import {useState} from 'react';
import styles from '../styles/Home.module.scss'
import Image from 'next/image';


function Slide() {

const [first, setFirst] = useState(true);

const firstEnter = () => {
        setFirst(false);
    }
const firstLeave = () => {
      setFirst(true);
  }
  
  
const [second, setSecond] = useState(true);
  
const secondEnter = () => {
      setSecond(false);
  }
const secondLeave = () => {
    setSecond(true);
  }

const [third, setThird] = useState(true);

const thirdEnter = () => {
          setThird(false);
      }
const thirdLeave = () => {
        setThird(true);
    }
    
    
const [fourth, setFourth] = useState(true);
    
const fourthEnter = () => {
        setFourth(false);
    }
const fourthLeave = () => {
      setFourth(true);
    }  

const [fifth, setFifth] = useState(true);

const fifthEnter = () => {
              setFifth(false);
          }
const fifthLeave = () => {
            setFifth(true);
        }
        
        
const [sixth, setSixth] = useState(true);
        
const sixthEnter = () => {
            setSixth(false);
        }
const sixthLeave = () => {
          setSixth(true);
        }    

    return (
        <div className={styles.slide}>
            <div className={styles.image_slide}>

                <div className={styles.card_cont}>

                    <div className={ `${styles["card"]} ${styles["card_one"]} ${styles[first ? "" : "card_active"]}`} onMouseEnter={firstEnter} onMouseLeave={firstLeave}>
                        <div className={ `${styles["image"]} ${styles[first ? "" : "image_actives"]}`}>
                            <Image src="/images/pic1.png" alt="painting image" width={232} height={216}  />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>Innocence</div>
                            <div className={styles.owner}>Ria Arante</div>
                            <div className={styles.type}><i>Oil on canvas, 2020</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[first ? "" : "bottom_active"]}`}>
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

                    <div className={ `${styles["card"]} ${styles[second ? "" : "card_active"]}`} onMouseEnter={secondEnter} onMouseLeave={secondLeave}>
                        <div className={ `${styles["image"]} ${styles[second ? "" : "image_active"]}`}>
                            <Image src="/images/pic2.png" alt="painting image" width={232} height={264}  />
                        </div>
                        <div className={styles.content}>
                                <div className={styles.title}>Wallowing Breeze</div>
                                <div className={styles.owner}>Hettie Richards</div>
                                <div className={styles.type}><i>Oil on canvas, 2008</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[second ? "" : "bottom_active"]}`}>
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

                    <div className={ `${styles["card"]} ${styles[third ? "" : "card_active"]}`} onMouseEnter={thirdEnter} onMouseLeave={thirdLeave}>
                        <div className={ `${styles["image"]} ${styles[third ? "" : "image_actives"]}`}>
                            <Image src="/images/pic3.png" alt="painting image" width={232} height={216}  />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>J Resistance</div>
                            <div className={styles.owner}>Ria Arante</div>
                            <div className={styles.type}><i>Gouache on paper, 2018</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[third ? "" : "bottom_active"]}`}>
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

                    <div className={ `${styles["card"]} ${styles[fourth? "" : "card_active"]}`} onMouseEnter={fourthEnter} onMouseLeave={fourthLeave}>
                        <div className={ `${styles["image"]} ${styles[fourth ? "" : "image_active"]}`}>
                            <Image src="/images/pic4.png" alt="painting image" width={232} height={264}  />
                        </div>
                        <div className={styles.content}>
                                <div className={styles.title}>Warm Basket</div>
                                <div className={styles.owner}>Flora Powers</div>
                                <div className={styles.type}><i>Acrylic on wood, 2014</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[fourth ? "" : "bottom_active"]}`}>
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

                    <div className={ `${styles["card"]} ${styles[fifth ? "" : "card_active"]}`} onMouseEnter={fifthEnter} onMouseLeave={fifthLeave}>
                        <div className={ `${styles["image"]} ${styles[fifth ? "" : "image_actives"]}`}>
                            <Image src="/images/pic5.jpg" alt="painting image" width={232} height={216}  />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>The Vonnegut </div>
                            <div className={styles.owner}>Ria Arante</div>
                            <div className={styles.type}><i>Oil on canvas, 2020</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[fifth ? "" : "bottom_active"]}`}>
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

                    <div className={ `${styles["card"]} ${styles[sixth ? "" : "card_active"]}`} onMouseEnter={sixthEnter} onMouseLeave={sixthLeave}>
                        <div className={ `${styles["image"]} ${styles[sixth ? "" : "image_active"]}`}>
                            <Image src="/images/pic6.jpg" alt="painting image" width={232} height={264}  />
                        </div>
                        <div className={styles.content}>
                            <div className={styles.title}>Into the Walls</div>
                            <div className={styles.owner}>Ria Arante</div>
                            <div className={styles.type}><i>Acrylic on wood, 2014</i></div>
                        </div>

                        <div className={ `${styles["bottom"]} ${styles[sixth ? "" : "bottom_active"]}`}>
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

                </div>

                

            </div>
        </div>
    )
}

export default Slide
