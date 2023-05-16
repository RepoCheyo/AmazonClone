import React from 'react'
import "./Home.css"
import Product from "./Product.js"

function Home() {
    return (
        <div className="Home">
            <div className="home__container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""></img>

                <div className="home__row">
                    <Product id="122343" title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC__SY400_.jpg" rating={5}/>
                    <Product id="345566" title="Acer Monitor" price={129} image="https://images-na.ssl-images-amazon.com/images/I/519rzl-wIQL.jpg" rating={4}/>
                </div>

                <div className="home__row">
                <Product id="465666" title="White Noice Machine" price={19.99} image="https://m.media-amazon.com/images/I/61yoN+jt5tL._AC_UL320_.jpg" rating={5}/>
                <Product id="976334" title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display" price={14.99} image="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_UL320_.jpg" rating={4}/>
                <Product id="384750" title="Homemory – Bombilla LED de té realista y brillante con pilas sin llama para celebración de temporada y festival, paquete de" price={10.99} image="https://m.media-amazon.com/images/I/51aJaF1EDhL._AC_UL320_.jpg" rating={5}/>
                </div>

                <div className="home__row">
                <Product id="374598" title="PS5 Controller Dual Charger Controller Charging Dock with Upgraded 1.8Hours Charging Chip, Dual Charging Dock Station for Playstation 5 By Divine Spear" price={21.99} image="https://m.media-amazon.com/images/I/61yeAH6jDrL._AC_UY218_.jpg" rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
