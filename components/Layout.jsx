import { Container, Row, Col, useTheme } from '@nextui-org/react';
import Head from 'next/head'
import Header from './Header';
import Image from 'next/image';
import background from "../public/img/gradient-left-dark.svg"



const Layout = ({ children }) => {

    const { isDark } = useTheme();

    return (
        <Container sm>
            <Head>
                <title>ULTIMATE QR CODE GENERATOR</title>
                <meta name="description" content="Ultimate QR code Generator" />
            </Head>

            <div className={isDark && 'cover'}>
                <Header />

                {children}
            </div>

            <style jsx>{`
            .cover {
                background-image: url("/img/gradient-left-dark.svg"), url("/img/gradient-right-dark.svg");
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }
            `}</style>
        </Container>
    )
}

export default Layout