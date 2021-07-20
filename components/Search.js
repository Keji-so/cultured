import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import { Items } from '../components/data.js';
import Link from 'next/link'


export const getStaticPaths = async () => {
    const res = await fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US')
    const data = await res.json()
    console.log(res)
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

function Search() {
    return (
        <>
        <div className={styles.search_text}>Searched Products</div>
        <div className={styles.search_cont}>
             {Items.map(item => {
              return ( 
                  
             <Link href={'/purchase/' + item.id} key={item.id}>
                <div className={styles.card}>
                        <div className={styles.image}>
                            <Image src={item.image} alt="painting image" width={232} height={264}  />
                        </div>
                        <div className={styles.content}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.owner}>{item.owner}</div>
                                <div className={styles.type}><i>{item.type}</i></div>
                        </div>

                        <div className={styles.bottom}>
                            <div className={styles.left}>
                                <div className={styles.currency}>$</div>
                                <div className={styles.amount}>620</div>
                            </div>
                            <div className={styles.icons}>
                                <div className={styles.share}>
                                    <Image src="/images/share.png" width={20} height={20} />
                                </div>
                                <div className={styles.cart}>
                                    <Image src="/images/cartw.png" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                 </div>
                 </Link>
                  )
               })}
        </div>
        </>
    )
}

export default Search


