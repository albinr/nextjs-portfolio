import Navbar from '../components/Navbar';
import { GlobalStyles } from "@component/styles/global";

export default function App({ Component, pageProps }) {
  return(
  <>
    <GlobalStyles/>
    <Navbar/>
    <Component {...pageProps} />
  </>
  
  ); 
}
