import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/components/Top";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
