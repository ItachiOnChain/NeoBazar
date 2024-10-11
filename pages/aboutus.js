import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import images from "../public/img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Itachi Uchiha",
      position: "Full Stack Blockchain Developer",
      images: images.itachi,
    },
    {
      name: "Aditya Gupta",
      position: "UIUX Designer & Frontend Developer",
      images: images.Aditya,
    },
    
  ];

  const factsArray = [
    {
      title: "Advocate",
      info: "We are working as a Developer Advocate at HackQuest right now, and prev. worked at Avocado Wallet, and Push Protocol etc.",
    },
    {
      title: "DevRel Uni",
      info: "We are also a Devrel Uni cohort 5 graduate :)",
    },
    {
      title: "Angel Hacks",
      info: "Apart fro this we have been part of the angel hacks community builder program :)",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We specialize in multiple programming languages, frameworks, and tools,
              enabling me to build robust, scalable decentralized applications and conduct thorough smart contract audits.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
          We love solving problems and bringing ideas to life through code. 
          Programming is more than just our profession—it's our passion. 
          We thrive on exploring new technologies and continuously sharpening my skills.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Few more Facts about us :)</h2>
          <p>
            We are not just developers but also strong community builders.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;