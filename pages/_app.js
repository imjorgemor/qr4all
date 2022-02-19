import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

   const lightTheme = createTheme({
      type: 'light',
   })

   const darkTheme = createTheme({
      type: 'dark',
      colors:{
         
      }
   })
   return (

      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className
         }}
      >
         <NextUIProvider>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   )
}

export default MyApp
