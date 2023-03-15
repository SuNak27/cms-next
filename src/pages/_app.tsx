import Main from '@/layouts/DashLayout';
import { ChakraProvider } from '@chakra-ui/react'

export type AppProps = {
  Component: React.ComponentType & { getLayout?: (page: React.ReactNode) => React.ReactNode };
  pageProps: any;
};

export default function App({ Component, pageProps }: AppProps) {

  const getLayout = (page: React.ReactNode) => {
    return (
      <ChakraProvider>
        <Main>
          {Component.getLayout ? Component.getLayout(page) : page}
        </Main>
      </ChakraProvider>
    )
  }

  return getLayout(<Component {...pageProps} />)
}
