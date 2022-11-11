import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from "@next/font/google";

const customFont = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font--var",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <main className={customFont.className}>
      <Component {...pageProps} />
  </main>
  )
}

export default MyApp
