import { Container, Row, Col, useTheme } from '@nextui-org/react';
import Head from 'next/head'
import Header from './Header';
import Footer from "./Footer"

const Layout = ({ children }) => {

    const { isDark } = useTheme();

    return (
        <Container sm>
            <Head>
                <title>ULTIMATE QR CODE GENERATOR</title>
                <meta name="description" content="Ultimate QR code Generator" />
            </Head>

            <div className={isDark? 'cover-dark' : 'cover-light'}>
                <Header />

                {children}
               
            </div>
            <Footer />
            <style jsx>{`
            .cover-dark {
                height: 100vh;
                background-image: url("/img/gradient-left-dark.svg"), url("/img/gradient-right-dark.svg");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
            .cover-light {
                height: 100vh;
                background-image: url("/img/theming-gradient.svg");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center center;

            }
            `}</style>
        </Container>
    )
}

export default Layout