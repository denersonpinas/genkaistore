import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    city: String,
    cep: String,
    address: String,
    numberAddress: String,
    country: String,
    paidType: String,
    paid: Boolean
}, {
    timestamps: true
})

export const Order = models.Order || model('Order', OrderSchema)