import { Container, Row, Col } from '@nextui-org/react';
import Head from 'next/head'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme, Text } from '@nextui-org/react'



const Layout = ({ children }) => {
   const { setTheme } = useNextTheme();
   const { isDark, type } = useTheme();
   return (
      <Container lg>
         <Head>
            <title>ULTIMATE QR CODE GENERATOR</title>
            <meta name="description" content="Ultimate QR code Generator" />
         </Head>

         <Text>
            the current theme is {type}
         </Text>

         <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
         />

         {children}

      </Container>
   )
}

export default Layout