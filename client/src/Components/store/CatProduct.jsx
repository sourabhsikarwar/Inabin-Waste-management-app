import React from "react";
import Product from "./Product";

const CatProduct = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-8 py-8 sm:px-6 lg:max-w-7xl container lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {props.name}
        </h2>

        {props.name === 'Organic' && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183700/Products/photo_6287354302393595121_x_eysco1.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676184680/Products/organic5_uqqtag.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/organic_wooden_neem_wood_comb_gift_set_1_qg9wtx.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/photo_6287354302393595104_x_folx5x.jpg"/>
        </div>}
        {props.name === 'Upcycled' && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676184664/Products/upcycle5_nmhnia.png"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183700/Products/photo_6287354302393595119_x_hqen4g.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/hanging_star_set_1__1_eyyers.png"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/img_20221125_161530_1_qo5k8m.jpg"/>
        </div>}
        {props.name === 'Recycled' && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676190844/Products/recycle5_zgleod.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183700/Products/photo_6287354302393595112_x_tszoyl.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/photo_6287354302393595113_x_wlwnp9.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183700/Products/photo_6287354302393595126_x_x9igc8.jpg"/>
        </div>}
        {props.name === 'Natural' && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676190497/Products/IMG_20230212_135750_673_obmfxu.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183698/Products/3s4a8301_category_photo_1_3_ltbcsx.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183699/Products/natural-coffee-body-scrub_vaslgj.jpg"/>
          <Product url="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676184650/Products/natural5_m4j2vd.jpg"/>
        </div>}
      </div>
    </div>
  );
};

export default CatProduct;
