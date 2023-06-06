import type { NextApiRequest, NextApiResponse } from 'next'
import { mongooseConnect } from '../../../lib/mongoose'
import { buffer } from 'micro'
import { Order } from '../../../models/order';
const stripe = require('stripe')(process.env.STRIPE_SK)

const endpointSecret = "whsec_e4bc495198882bea5593c92ea2af6e3826ffdf84ed703990fb780fe31d17db1e";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {method} = req
  await mongooseConnect()
  
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const data = event.data.object;
      const orderId = data.metadata.orderId
      const paid = data.payment_status === 'paid'
      const paidType = data.payment_method_types[0]
      if(orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
          paidType: paidType
        })
      }
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send('ok')

}

export const config = {
  api: {bodyParser: false}
}

// pep-skill-regard-trophy
// acct_1NBjoMCj9Eopg63d