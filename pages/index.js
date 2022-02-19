import Layout from '../components/Layout'
import QrGenerator from "../components/QrGenerator"
import Header from '../components/Header'
import PruebasNext from '../components/PruebasNext'

export default function Home() {

   return (
      <Layout>
         <Header />
         <QrGenerator />
         <PruebasNext />
         
      </Layout>

   )
}
