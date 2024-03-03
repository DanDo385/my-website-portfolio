import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  
  // Place global components here (e.g., a shared navbar)
  <Navbar />
  return <Component {...pageProps} />
}

export default MyApp;