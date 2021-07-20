import React from 'react'
import Nav from '/components/Nav'
import { Items } from '/components/data.js';
import Image from 'next/image';
import styles from '/styles/Purchase.module.scss'
import Link from 'next/link'




export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await res.json()
    const paths =  data.map(item => { 
        return {
        params: { id: item.id.toString() } 
    }
})
       

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id)
    const data = await res.json()

    return {
        props: { item: data }
    }
}




function purchase({item}) {
    return (
        <div>
             <Nav />
             <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.left_cont}>
                        <div className={styles.image}>
                            <Image src={item.url} alt="image" width={408} height={464} />
                        </div>
                        <div className={styles.left_description}>
                            <div className={styles.view}>
                                <div className={styles.icon}>
                                     <Image src="/images/eye.png" width={18} height={18} />
                                </div>
                                <div className={styles.text}>View in a room</div>
                            </div>
                            <div className={styles.share}>
                                <div className={styles.icon}>
                                     <Image src="/images/share.png" width={18} height={18} />
                                </div>
                                <div className={styles.text}>Share</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.right_cont}>
                           <Link href="/">
                            <div className={styles.back}>
                                <div className={styles.icon}>
                                     <Image src="/images/back.png" width={20} height={20} />
                                </div>
                                <div className={styles.text}>Back</div>
                            </div>
                            </Link>
                           <div className={styles.right_title}>Wallowing Breeze </div>
                            <div className={styles.right_name}>Hettie Richards</div>
                            <div className={styles.inch}>
                                <div className={styles.right_inch}>Oil on canvas, 2008</div>
                                <div className={styles.right_inches}>Gallery wrap canvas</div>
                                <div className={styles.right_inch}>26 in × 23 in</div>
                            </div>
                            <div className={styles.right_desc}>Dynamic and elusive abstraction and texture. Plays between the lines of chaos and serenity. Perfect fit for modern and contemporary styled interiors.</div>
                            <div className={styles.right_line}></div>
                            <div className={styles.cost}>
                                <div className={styles.currency}>$</div>
                                <div className={styles.amount}>620</div>
                            </div>
                            <div className={styles.shipping}>
                                <div className={styles.ship}>
                                    <div className={styles.icon}>
                                        <Image src="/images/ship.png" width={14} height={14} />
                                    </div>
                                    <div className={styles.text}>Ships from New York, NY, USA</div>
                                </div>
                                <div className={styles.box}>
                                    <div className={styles.icon}>
                                        <Image src="/images/box.png" width={14} height={14} />
                                    </div>
                                    <div className={styles.text}>Estimated to ship in 3 - 7 days within USA</div>
                                </div>
                            </div>
                          
                            <div className={styles.button}>
                                     Add to cart
                            </div>
                            <div className={styles.shipped}>
                                  Taxes and shipping fees will apply upon checkout
                            </div>
                    </div>
                </div>
             </div>
             
        </div>
    )
}

export default purchase
