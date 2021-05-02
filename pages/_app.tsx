import '@styles/globals.css'
import "@fontsource/poppins" 
import "@fontsource/poppins/600.css" 
import "@fontsource/poppins/700.css" 
import "@fontsource/poppins/900.css" 
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}

export default MyApp
