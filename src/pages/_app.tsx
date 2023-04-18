import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../../layouts/MainLayout";
import { Header } from "../../components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}
