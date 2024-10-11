import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Notification.module.css";
import images from "../../../public/img";

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image
            src={images.itachi}
            alt="profile image"
            width={50}
            height={50}
            className={Style.notification_box_img}
            priority
          />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Itachi Uchiha</h4>
          <p>Hi man, Thnx for joining us</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;