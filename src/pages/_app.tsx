import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Roboto } from "next/font/google";
import {ThemeProvider} from "@/util/theme-provider";
import Layout from "@/components/Layout";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export default function App({ Component, pageProps }: AppProps) {
  return (
      // <ThemeProvider attribute='class' themes={['light', 'dark']} defaultTheme='light' enableSystem={false}>
        <main className={roboto.className}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </main>
      // </ThemeProvider>
  );
}
