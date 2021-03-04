import {useEffect, Fragment} from 'react'
import Link from "next/link";
import Layout from "../components/Layout";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../src/theme';
import NavBar from '../components/Nav'


function index(){

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout />
        <h1>Welcome to my webpage</h1>
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </Fragment>
  )
}

export default index