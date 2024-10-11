import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Filter,
  NFTCard,
  FollowerTab,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../components/TopCreators/TopCreators";

//IMPORTING CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount } = useContext(
    NFTMarketplaceContext
  );
  
  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  const { fetchNFTs } = useContext(NFTMarketplaceContext);
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);

  useEffect(() => {
    if (currentAccount) {
      fetchNFTs().then((items) => {
        console.log(items);
        setNfts(items?.reverse() || []); // Ensure nfts is always an array
        setNftsCopy(items || []); // Ensure nftsCopy is always an array
      });
    }
  }, [currentAccount]);

  //CREATOR LIST
  const creators = getTopCreators(nfts || []); // Safely pass nfts array

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      {creators.length === 0 ? (
        <Loader />
      ) : (
        <FollowerTab TopCreator={creators} />
      )}

      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {nfts.length === 0 ? <Loader /> : <NFTCard NFTData={nfts} />}

      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;
