
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../global.css'



// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/*Fixing title on next/head */}
        <title>Ideamarket</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}