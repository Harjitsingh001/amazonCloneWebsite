import React from 'react'
import "./Home.css"
import Saman from './Saman'
import Carousel from './Carousel'
function Home() {
    return (
        <div className='home'>

            <Carousel />    

            <div className='home__container'>
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>

            <div className='home__row'>
                <Saman title="The Maid" 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9RmcE1wERfsnVvRkqUjzPO5DDhyRgIQNGQ&usqp=CAU"
                    price={29.99}
                    rating={5} />
                <Saman title="MuscleBlaze Beginner's Protein Powder, 1 kg (2.2 lb), Blueberry" className="Hovr"
                    image="https://rukminim2.flixcart.com/image/612/612/xif0q/protein-supplement/a/c/l/creatine-creatine-monohydrate-100-gms-6600720154-as-it-is-original-imagzsfnzwz48gkb.jpeg?q=70"
                    price={39.99}
                    rating={4} />
            </div>

            <div className='home__row'>
                <Saman title="WISHKEY Remote Control Super High Speed Racing Car  For Kids  (Black, Blue)" className="Hovr"
                    image="https://rukminim2.flixcart.com/image/416/416/xif0q/remote-control-toy/8/o/0/remote-control-super-high-speed-racing-car-with-stylish-looks-original-imagqtphzat7xqej.jpeg?q=70"
                    price={9.99}
                    rating={3} />
                <Saman title="Alexa Compatiable Amazon Echo Plus, Model Number: L9D29R" className="Hovr"
                    image="https://www.irishnews.com/picturesarchive/irishnews/irishnews/2018/12/05/160105423-f1b4fe21-08fd-4092-90ec-210aa34987b9.jpg"
                    price={199.99}
                    rating={4} />
                <Saman title="Apple iPad Pro 6th Gen 32.77 cm  512 GB" className="Hovr"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwI7IsIhrLcdApHbaSDqNWwHbKpB8QfRlcxg&usqp=CAU"
                    price={899.99}
                    rating={3} />
            </div>


            <div className='home__row'>
                <Saman title="Samsung UN65NU7300 65” 4K Curved TV " className="Hovr"
                    image="https://www.bassheadspeakers.com/wp-content/uploads/2019/07/Samsung-UN65NU7300-65%E2%80%9D-4K-Curved-TV-1024x682.jpg"
                    price={499}
                    rating={5} />
            </div>

            <div className='home__row'>
                <Saman title="Apple Watch Ultra(2nd Gen) Heart Rate Monitor, Crash Detection, Sleep Tracking  (Starlight Sport Strap, 40mm)" className="Hovr"
                    image="https://images.macrumors.com/t/c96sXgJ-lcz2Agp1EimXz2CwYMM=/800x0/smart/article-new/2022/09/apple-watch-ultra-1.jpg?lossy"
                    price={32.99}
                    rating={5} />
                <Saman title="Clarzo Men's Banarasi Silk Regular Fit Kurta Chudidar Pajama Set with Waistcoat (Navy Blue & Red)" className="Hovr"
                    image="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/r/1/c/l-blue-kurta-s-kaashi-couture-original-imagn8rdmehupbcb.jpeg?q=70"
                    price={39.99}
                    rating={4} />
            </div>

            <div className='home__row'>
                <Saman title="Canon EOS R50 Mirrorless Camera Body with RF - S 18 - 45 mm f/4.5 - 6.3 IS STM  (Black)
" className="Hovr"
                    image="https://rukminim2.flixcart.com/image/416/416/xif0q/dslr-camera/n/p/t/eos-r50-24-2-r50-canon-original-imagngc7syac8pfd.jpeg?q=70"
                    price={79.99}
                    rating={3} />
                <Saman title="Nescafe Classic CoffeePowder, 100% Pure Instant Coffee  (90 g)" className="Hovr"
                    image="https://rukminim2.flixcart.com/image/416/416/xif0q/coffee/u/8/y/-original-imagqdu6uzz5z2aq.jpeg?q=70"
                    price={1.99}
                    rating={4} />
                <Saman title="Divena Blue Floral Printed Kurta Pant Set with dupatta" className="Hovr"
                    image="https://m.media-amazon.com/images/I/71CgfuTEdPL._AC_SY200_.jpg"
                    price={2.35}
                    rating={3} />
            </div>


            <div className='home__row'>
                <Saman title="Urban Terrain UT1000 Steel MTB 27.5 Mountain Cycle with 21 Shimano Gear with mudguard accessories , Pan India Installation and cultsport App Tracking " className="Hovr"
                    image="https://m.media-amazon.com/images/I/61UMaYi9rYL._AC_UY327_FMwebp_QL65_.jpg"
                    price={24.99}
                    rating={5} />
            </div>

        </div>

    )
}

export default Home