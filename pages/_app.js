import React from 'react';
import '../styles/globals.css'
import 'fontsource-roboto';
import { Provider } from 'next-auth/client'
import Layout from "../src/Layout"
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import { ToastProvider } from 'react-toast-notifications'

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <ToastProvider>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
