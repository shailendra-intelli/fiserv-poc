import React from "react";
import {
  AccountCircleIcon,
  MicrosoftLogo,
  NotificationsFilledIcon,
} from "../../assets/icons";
import { Header, IconButton } from "intelli-ui-components-library";
import styles from "./topNavbar.module.scss";
import fiservLogo from "../../assets/fiserv-logo.png";

const TopNavbar = () => {
  return (
    <>
      <Header
        brandLogo={fiservLogo}
        elevation={1}
        className={styles["fiserv-header"]}
      ></Header>
    </>
  );
};

export default TopNavbar;
