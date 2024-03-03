import Navbar from '../components/Navbar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
);

export default MyApp;