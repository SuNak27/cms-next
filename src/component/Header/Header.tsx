import Head from "next/head";
import { HeaderContext } from "./HeaderContext";

type Props = {
  title: string;
};

export const Header = (props: Props) => {
  const title = `${props.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`;


  return (
    <HeaderContext.Provider value={{ title: props.title }}>
      <Head>
        <title>
          {title}
        </title>
        <meta name="author" content="Alfad Sabil Haq" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" href="/assets/images/logo.png" /> */}
      </Head>
    </HeaderContext.Provider>
  )
}

export default Header
