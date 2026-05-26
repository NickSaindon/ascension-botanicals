import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />;
      <Footer />
    </ConfigProvider>
  );
}
