import {useEffect, Fragment} from 'react'
import Link from "next/link";
import Layout from "../components/Layout";
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from '../src/theme';
import NavBar from '../components/Nav'
import HeaderCard from '../components/HeaderCard'
import Image from 'next/image'

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
        <h1>Welcome to Will Kencel's homesite and blog.</h1>
        <h2>...more coming soon!</h2>
          <div className="my-wrapper">
            <Image
            src="/WillK.headshot_1.png"
            className="my-image"
            alt="Will Kencel Headshot"
            width={400}
            height={400}
            />
          </div>
        <h2>Engineer | Scientist | Explorer</h2>
        <HeaderCard />
          {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </Fragment>
  )
}

export default index