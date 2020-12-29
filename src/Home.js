import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
      className="home_image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      alt=""
      />

      <div className="home_row">
    <Product
        id="123123123"
        title="Harry Potter and the Chamber of Secrets"
        price={11.99}
      //  rating={5}
        image="https://m.media-amazon.com/images/I/91zdBItGkwL._AC_UY218_.jpg"
        />
    <Product
            id="213213213"
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray Aluminium Case with Black Sport Band"
            price={169.99}
            //rating={5}
            image="https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UY218_.jpg"
            />
        </div>

        <div className="home_row">
        <Product
            id="987654321"
            title="Keurig K-Slim Coffee Maker, Single Serve K-Cup Pod Coffee Brewer"
            price={33.95}
            //rating={5}
            image="https://m.media-amazon.com/images/I/61xJQViyxML._AC_UL320_.jpg"
            />
        <Product
                id="123123123"
                title="Womens Chunky Popcorn Cardigan Oversized"
                price={23.99}
                //rating={5}
                image="https://m.media-amazon.com/images/I/61HARivOPRL._AC_UL320_.jpg"
                />
        <Product
                    id="123123123"
                    title="The Lean Startup"
                    price={23.08}
                  //  rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                    />
        </div>

        <div className="home_row">
        <Product
                    id="567123456"
                    title="All-New Toshiba 50LF621U21 50-inch Smart 4K UHD with Dolby Vision - Fire TV Edition, Released 2020"
                    price={379.99}
                  //  rating={5}
                    image="https://m.media-amazon.com/images/I/61XJCCT1mIL._AC_UY218_.jpg"
                    />
        </div>
    </div>
  );
}

export default Home;
