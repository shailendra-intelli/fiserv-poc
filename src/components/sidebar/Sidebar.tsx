import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./sidebar.module.scss";
import SelectionTab from "./SelectionTab";
import { useAppSelector } from "../../store/hooks";
import {
  APIDocGenIcon,
  APIDocGenSmallIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  HomeIcon,
  TestWizardIcon,
  TestWizardSmallIcon,
  UploadIcon,
} from "../../assets/icons";
import { SidebarItem, sidebarMenu } from "./config";

const Sidebar = () => {
  const params = useParams();
  const routePath =
    Object.keys(params).length === 0 ? "/Home" : `/${params["*"]}`;

  const [showApiDocsSubMenus, setShowApiDocsSubMenus] = useState(false);
  const apiDocGenSubMenus = sidebarMenu.filter((obj) =>
    obj.path.startsWith("/api-doc-gen")
  );
  const [showTestWizardSubMenus, setShowTestWizardSubMenus] = useState(false);
  const testWizardSubMenus = sidebarMenu?.filter((obj) =>
    obj.path.startsWith("/test-wizard")
  );

  useEffect(() => {
    if (routePath === "/Home") {
      setShowApiDocsSubMenus(false);
      setShowTestWizardSubMenus(false);
    } else if (routePath.startsWith("/api-doc-gen")) {
      setShowApiDocsSubMenus(true);
    } else if (routePath.startsWith("/test-wizard")) {
      setShowTestWizardSubMenus(true);
    }
  }, [routePath]);

  const renderSubMenus = (subMenuArr: SidebarItem[]) => {
    return (
      <>
        {subMenuArr.map((cur, index) => {
          return (
            <Link to={cur.path} key={index}>
              <div
                className={`${styles["list-holder"]} ${
                  cur.path === routePath ? styles["active"] : styles["inactive"]
                } `}
                key={index}
              >
                <div className={`${styles["list-main"]}`}>
                  <span className={`${styles["list-icon"]}`}>
                    <cur.icon />
                  </span>
                  {cur.title}
                </div>
              </div>
            </Link>
          );
        })}
      </>
    );
  };

  if (routePath === "/Home") {
    return <></>;
  }
  return (
    <div className={styles["list-container"]}>
      <div
        className={`${styles["list-main-title"]} ${
          routePath === "/Home" ? styles["active"] : null
        }`}
      >
        <Link to="/Home" className={`${styles["list-main"]}`}>
          <div>
            <span className={`${styles["list-icon"]}`}>
              <HomeIcon />
            </span>
            <span>Home</span>
          </div>
        </Link>
      </div>
      {routePath.startsWith("/api-doc-gen") && (
        <>
          <div className={styles["list-main-title"]}>
            <div
              className={`${styles["list-main"]}`}
              onClick={() => setShowApiDocsSubMenus(!showApiDocsSubMenus)}
            >
              <div className={styles["list-main"]}>
                <span className={`${styles["list-icon"]}`}>
                  <APIDocGenSmallIcon width={"16px"} height={"18px"} />
                </span>
                <span>API Doc Gen</span>
              </div>

              <span>
                {showApiDocsSubMenus ? (
                  <ChevronUpIcon height={"18px"} />
                ) : (
                  <ChevronRightIcon />
                )}
              </span>
            </div>
          </div>
          {showApiDocsSubMenus && renderSubMenus(apiDocGenSubMenus)}
        </>
      )}
      {routePath.startsWith("/test-wizard") && (
        <>
          <div className={styles["list-main-title"]}>
            <div
              className={`${styles["list-main"]}`}
              onClick={() => setShowTestWizardSubMenus(!showTestWizardSubMenus)}
            >
              <div className={styles["list-main"]}>
                <span className={`${styles["list-icon"]}`}>
                  <TestWizardSmallIcon width={"16px"} height={"18px"} />
                </span>
                <span>API Test Wizard</span>
              </div>

              <span>
                {showTestWizardSubMenus ? (
                  <ChevronUpIcon height={"18px"} />
                ) : (
                  <ChevronRightIcon />
                )}
              </span>
            </div>
          </div>
          {showTestWizardSubMenus && renderSubMenus(testWizardSubMenus)}
        </>
      )}
    </div>
  );
};

export default Sidebar;
