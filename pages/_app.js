import React from 'react';
import '../styles/globals.css'
import 'fontsource-roboto';
import { Provider } from 'next-auth/client'
import Layout from "../src/Layout"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
      console.log("Remoooove")
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
