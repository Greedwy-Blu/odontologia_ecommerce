import '../styles/globals.css'
import {useState, useEffect} from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
 
  return <Component {...pageProps} />
}

export default MyApp
