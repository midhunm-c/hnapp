import "../app/globals.css";
import type { AppProps } from "next/app";

function MyContainerApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyContainerApp;