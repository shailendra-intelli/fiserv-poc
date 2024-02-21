import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { updatePath } from "../../mainTabsSlice";
import { Card, Radio } from "intelli-ui-components-library";

import styles from "./path_sub_tab_security.module.scss";

const PathSubTabSecurity = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);

  const securitySchemes = [{}];
  const dispatch = useAppDispatch();

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (Object.keys(securitySchemes).length > 0) {
      setSelectedValue("custom");
    }
  }, [securitySchemes]);

  useEffect(() => {
    let updatedSecurityData: any[] = [];
    if (selectedValue === "default") {
      updatedSecurityData = [];
    } else if (selectedValue === "disabled") {
      updatedSecurityData = [];
    } else if (selectedValue === "custom") {
      updatedSecurityData = Object.keys(securitySchemes).map((key) => ({
        [key]: "",
      }));
    } else {
      updatedSecurityData = [];
    }
    dispatch(
      updatePath({
        pathName,
        methodName,
        methodKey: "security",
        data: [...paths[pathName][methodName].security, ...updatedSecurityData],
      })
    );
  }, [selectedValue]);

  return (
    <Card className={styles["security-subtab"]}>
      {/* <div className={styles["security-subtab__radio"]}>
        <div onClick={() => setSelectedValue("default")}>
          <Radio
            label={"Use default security"}
            checked={selectedValue === "default"}
          />
        </div>
        <div onClick={() => setSelectedValue("disabled")}>
          <Radio
            label={"Disable security"}
            checked={selectedValue === "disabled"}
          />
        </div>
        <div onClick={() => setSelectedValue("custom")}>
          <Radio
            label={"Use custom security"}
            checked={selectedValue === "custom"}
          />
        </div>
      </div>

      {selectedValue === "custom" &&
      paths[pathName][methodName].security.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <p>Selected Security Schemes</p>
          {paths[pathName][methodName].security.map((obj: any) => {
            let k = Object.keys(obj)[0];
            let v = obj[k];
            return <span key={k}>{`${k}`}</span>;
          })}
        </div>
      ) : (
        <></>
      )} */}
    </Card>
  );
};

export default PathSubTabSecurity;
