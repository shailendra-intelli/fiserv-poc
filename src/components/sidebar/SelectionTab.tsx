import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { sidebarMenu } from "./config";
import styles from "./sidebar.module.scss";

const Upload = React.lazy(() => import("../upload/Upload"));
const About = React.lazy(() => import("../about/About"));
const Export = React.lazy(() => import("../export/Export"));
const Header = React.lazy(() => import("../header/Header"));
const Server = React.lazy(() => import("../server-tab/ServerTab"));
const Main = React.lazy(() => import("../main/Main"));
const Schemas = React.lazy(() => import("../schemas/Schemas"));
const Tags = React.lazy(() => import("../tags/Tags"));
const ApiValidator = React.lazy(() => import("../api-validator/ApiValidator"));
const TestBuilder = React.lazy(
  () => import("../api-validator/GeneratePostmanCollection")
);
const TestExecutor = React.lazy(
  () => import("../api-validator/RunPostmanCollection")
);

const SelectionTab = () => {
  const params = useParams();
  const routePath =
    Object.keys(params).length === 0 ? "/Home" : `/${params["*"]}`;
  const obj: any = {
    "/Home": <About />,
    "/api-doc-gen/upload": <Upload />,
    "/api-doc-gen/header": <Header />,
    "/api-doc-gen/servers": <Server />,
    "/api-doc-gen/exports": <Export />,
    "/api-doc-gen/tags": <Tags />,
    "/api-doc-gen/path-and-operations": <Main />,
    "/api-doc-gen/schemas": <Schemas />,
    "/test-wizard/test-builder": <TestBuilder />,
    "/test-wizard/test-executor": <TestExecutor />,
  };
  const selectedComponent = obj[routePath];
  const selectedPathDetailes = sidebarMenu.filter(
    (obj) => obj.path === routePath
  )[0];

  return (
    <div style={{ height: "100%" }}>
      {routePath !== "/Home" && (
        <>
          <p
            className={`${styles["selection-tab-title"]} ${
              routePath === "/Home" && styles["centered-title"]
            }`}
          >
            {selectedPathDetailes.title}
          </p>
          <p className={styles["selection-tab-desc"]}>
            {selectedPathDetailes.desc}
          </p>
        </>
      )}

      <Suspense fallback={<div>Loading...</div>}>{selectedComponent}</Suspense>
    </div>
  );
};
export default SelectionTab;
