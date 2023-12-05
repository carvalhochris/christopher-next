// import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
// import theme from '@/theme'
// import theme from '@/theme'
import theme from '../theme'
// import "@fontsource/questrial";
import { AppProps } from 'next/app'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}