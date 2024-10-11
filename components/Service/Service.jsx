import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../public/img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            priority
          />
          <p className={Style.service_box_item_step}>
            <span>Service 1</span>
          </p>
          <h3>Minting NFTs</h3>
          <p>
            Users can create (or mint) their own NFTs by converting digital files (art, music, collectibles, etc.) into unique tokens stored on the blockchain and showcase your art to the world.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
            priority
          />
          <p className={Style.service_box_item_step}>
            <span>Service 2</span>
          </p>
          <h3>Buying and Selling</h3>
          <p>
            The marketplace facilitates the buying and selling of NFTs through auctions or direct sales, enabling seamless transactions between collectors and creators.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
            priority
          />
          <p className={Style.service_box_item_step}>
            <span>Service 3</span>
          </p>
          <h3>Discovering and Browsing</h3>
          <p>
            Users can explore a wide range of NFTs, organized by categories, popularity, and trending collections, providing easy discovery of digital assets.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
            priority
          />
          <p className={Style.service_box_item_step}>
            <span>Service 4</span>
          </p>
          <h3>Wallet Integration and Management</h3>
          <p>
          The platform integrates with crypto wallets, allowing users to securely manage, store, and transfer their NFTs and cryptocurrency directly through the marketplace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;