import Head from "next/head";
import { HeaderContext } from "./HeaderContext";

type HeaderProps = {
  title: string;
};

export const Header = (props: HeaderProps) => {
  const title = `${props.title} | ${process.env.NEXT_PUBLIC_APP_NAME}`;


  return (
    <HeaderContext.Provider value={{ title: props.title }}>
      <Head>
        <title>
          {title}
        </title>
        <meta name="author" content="Alfad Sabil Haq" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    </HeaderContext.Provider>
  )
}

export default Header
