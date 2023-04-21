import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../../layouts/MainLayout";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Header />
      <div className="duration-100	flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </Layout>
  );
}
