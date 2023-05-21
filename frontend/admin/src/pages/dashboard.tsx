import { Layout } from "@/components/layout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

export default function Example() {
  return (
    <Layout>
      <h1>Dash</h1>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { 'genkaistore.token': token } = parseCookies(context)

  if(!token) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: {}
  }
}