import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import FreeForm from '@/components/FreeForm';
import HtmlVsJsx from '@/components/HTMLvsJSX';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [freeFormToDisplay, setFreeFormToDisplay] = useState(true);
  return (
    <>
      <Head>
        <title>JSX and HTML</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {freeFormToDisplay ? (
          <button className={styles.btn} onClick={() => setFreeFormToDisplay(false)}>Switch to Article</button>
        ) : (
          <button className={styles.btn} onClick={() => setFreeFormToDisplay(true)}>Switch to FreeForm</button>
        )}
        {freeFormToDisplay ? (
          <FreeForm />
        ) : (
          <HtmlVsJsx />
        )}
        
      </main>
    </>
  )
}
