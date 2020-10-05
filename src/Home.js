import React from 'react'
import "./Home.css";
import Product from "./Product"


function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img className="home_image"src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"/>
            <div className="home_row">
               <Product title='the lean startup' price={21.99} image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/September/CLPTiles/D15930632_IN_HETV_TV_CLP_Tiles_BAUnewtheme_QC_420x450_4.jpg' rating='*'/>
               <Product title='the discount' price={20.99} image='https://m.media-amazon.com/images/I/51SIr8isgRL._AC_UY218_.jpg' rating='***'/>
               <Product title='the laptop' price={19.99} image='https://m.media-amazon.com/images/I/71R8b57aasL._AC_UY218_.jpg' rating='**'/>
                 

            </div>
            <div className="home_row">
               <Product title='the lean startup' price={21.99} image='https://images-eu.ssl-images-amazon.com/images/I/31owKlGw1uL._AC_US160_FMwebp_QL70_.jpg' rating="**"/>
               <Product title='the lean startup' price={21.99} image='https://m.media-amazon.com/images/I/51SIr8isgRL._AC_UY218_.jpg' rating='***'/>
               <Product title='the lean startup' price={21.99} image='https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/September/CLPTiles/D15930632_IN_HETV_TV_CLP_Tiles_BAUnewtheme_QC_420x450_4.jpg'rating='***'/>

            </div>
            <div className="home_row">
            < img src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/SalDaysOct/Slary_days_1500x300.jpg' width="100%"/>
             
            </div>
            </div>
        </div>
        
    )
}

export default Home

