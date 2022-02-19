import { Text } from '@nextui-org/react'

const Header = () => {
   return (
      <header>
         <Text
            h1
            size={70}
            css={{
               textGradient: '45deg, $blue500 -20%, $pink500 50%',
               lineHeight: "4.5rem"
            }}
            weight="bold"
         >Ultimate QR Code  </Text>
         <Text
            h1
            size={70}
            css={{
               textGradient: '45deg, $purple500 -20%, $pink500 100%',
               lineHeight: "4.5rem"
            }}
            weight="bold"
         >
            Generator
         </Text>
      </header>
   )
}

export default Header