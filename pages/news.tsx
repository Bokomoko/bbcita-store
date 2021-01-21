import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function news () {
  return (
    <div className={styles.container}>
      <Head>
        <title>BBcita (a Nani Milet Company)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="./bybbcita.png" alt="bbcitalogo"></img>
      <h1>News of the fashion and good living world</h1>

    </div>
  )
}
