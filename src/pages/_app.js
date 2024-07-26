import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/normalize.css";
// import Layout from "@/components/layout.js";

export default function App({ Component, pageProps }) {
  return (
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  );
}
