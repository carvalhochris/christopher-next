// import '@/styles/globals.css'
import { ChakraProvider, Center } from '@chakra-ui/react'
import ColorModeSwitch from '../components/colormode'
// import theme from '@/theme'
// import theme from '@/theme'
import theme from '../theme'
// import "@fontsource/questrial";
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
       <Center>
          <ColorModeSwitch />
        </Center>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}