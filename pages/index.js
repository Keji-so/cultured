import {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import Head from "next/head";
import Nav from '../components/Nav'
import Slide from '../components/Slide'
import { Data } from '../components/data.js';



export default function Home() {




  return (
    <>
     <Head>
          <link
            rel="preload"
            href="/fonts/Optima/optimaltstd-medium.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
    <div className={styles.container}>
      <Nav />

      <div className={styles.featured}>
        <div className={styles.featured_text}>Featured Products</div>
        <div>
          <Image className={styles.icon} src="/images/arrow.png" alt="arrow right" width={40} height={20}  />
        </div>
      </div>

      <main className={styles.slider}>
        <Slide  />
     </main>

     <footer>
       <div className={styles.footer}>
         <div className={styles.container}>
            <div className={styles.text}>Featured Artists</div>
            <div className={styles.cont}>
              {Data.map(data => {
              return ( 
              <div className={styles.sale_cont} key={data.id}>
                  <div className={styles.image}>
                      <Image src={data.image} alt="image" width={80} height={80} />
                  </div>
                  <div className={styles.desc}>
                      <div className={styles.name}>{data.name}</div>
                      <div className={styles.type}><i>{data.type}</i></div>
                  </div>
                </div>
                )
                })}
            </div>
         </div>
       </div>
     </footer>

    </div>
    </>
  )
}
