import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnime"
      variants={{
        pageInitial: {
          translateX: "100%",
          transitionDuration: "0.1s",
        },
        pageAnime: {
          translateX: 0,
          transitionDuration: "0.1s",
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
  );
}
export default MyApp;
