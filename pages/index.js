import Layout from '../components/Layout'
import QrGenerator from "../components/QrGenerator"
import TopSection from '../components/TopSection'


export default function Home() {

    return (
        <Layout>
            <TopSection />
            <QrGenerator />
        </Layout>
    )
}
