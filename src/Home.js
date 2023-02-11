import React from 'react'
import "./Home.css"
import Saman from './Saman'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>

            <div> <div className='home__row'>
                <Saman title="The Maid"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9RmcE1wERfsnVvRkqUjzPO5DDhyRgIQNGQ&usqp=CAU"
                    price={29.99}
                    rating={5} />
                <Saman title="MuscleBlaze Beginner's Protein Powder, 1 kg (2.2 lb), Blueberry"
                    image="https://img4.hkrtcdn.com/14147/prd_1414683-MuscleBlaze-Beginners-Protein-2.2-lb-Blueberry_o.jpg"
                    price={39.99}
                    rating={4} />
            </div>

                <div className='home__row'>
                    <Saman title="Einstein"
                        image="https://i5.walmartimages.com/asr/1466baa8-b8ae-48c1-8630-b5ed67da41ac.8afeca5cf9dad5023213745863a31083.jpeg"
                        price={9.99}
                        rating={3} />
                    <Saman title="Alexa Compatiable Amazon Echo Plus, Model Number: L9D29R"
                        image="https://www.irishnews.com/picturesarchive/irishnews/irishnews/2018/12/05/160105423-f1b4fe21-08fd-4092-90ec-210aa34987b9.jpg"
                        price={199.99}
                        rating={4} />
                    <Saman title="Apple iPad Pro 6th Gen 32.77 cm  512 GB"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwI7IsIhrLcdApHbaSDqNWwHbKpB8QfRlcxg&usqp=CAU"
                        price={899.99}
                        rating={3} />
                </div>


                <div className='home__row'>
                    <Saman title="Airfryer (Bajaj) "
                        image="https://img.etimg.com/photo/msid-93757479/havells-prolife-digi-air-fryer.jpg"
                        price={19.99}
                        rating={5} />
                </div></div>




        </div>

    )
}

export default Home