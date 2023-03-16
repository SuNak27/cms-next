import theme from '@/config';
import { DashLayout } from '@/layouts';
import { ChakraProvider } from '@chakra-ui/react'

export type AppProps = {
  Component: React.ComponentType & { getLayout?: (page: React.ReactNode) => React.ReactNode };
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = (page: React.ReactNode) => {
    return (
      <ChakraProvider theme={theme}>
        <DashLayout>
          {Component.getLayout ? Component.getLayout(page) : page}
        </DashLayout>
      </ChakraProvider>
    )
  }

  return getLayout(<Component {...pageProps} />)
}
