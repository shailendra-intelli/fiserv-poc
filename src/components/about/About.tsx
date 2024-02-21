import { Card } from "intelli-ui-components-library";
import styles from "./about.module.scss";
import { APIDocGenIcon, HomeIcon, TestWizardIcon } from "../../assets/icons";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles["card-container"]}>
      <div
        className={`${styles["action-btn-container"]} ${styles["centered"]} ${styles["flex-row"]}`}
      >
        <Link
          to={"/api-doc-gen/upload"}
          className={`${styles["action-btn"]} ${styles["centered"]} ${styles["flex-col"]}`}
        >
          <span className={`${styles["icon"]} ${styles["centered"]}`}>
            <APIDocGenIcon width={"50"} height={"50"} />
          </span>
          <div className={styles["title"]}>API Doc Generator</div>
          <div className={styles["desc"]}>
            Generate API requests in the form of Postman collection.
          </div>
        </Link>
        <Link
          to={"/test-wizard/test-builder"}
          className={`${styles["action-btn"]} ${styles["centered"]} ${styles["flex-col"]}`}
        >
          <span className={`${styles["icon"]} ${styles["centered"]}`}>
            <TestWizardIcon width={"50"} height={"50"} />
          </span>

          <div className={styles["title"]}>Test Wizard</div>
          <div className={styles["desc"]}>
            Execute the Postman collection to test API requests.
          </div>
        </Link>
      </div>
    </div>
  );
};
export default About;

{
  /* <div>
  <h2>What is OpenAPI-GUI?</h2>
  <p>
    OpenAPI-GUI is a GUI for creating and updating OpenAPI 3.0.x definitions.
  </p>
  <br />
  <h3>How does OpenAPI-GUI work?</h3>
  <p>
    Upload an existing definition, or create a new one (select the red
    'trash-can' button on the Upload tab to remove all Paths) and start adding
    Paths, Operations, and Parameters. When an existing definition is used, it
    is parsed and forms for editing each Path, Operation and Parameter will be
    created.
  </p>
  <p>
    By default when OpenAPI-GUI starts, it loads the OpenAPI Petstore sample.
  </p>
  <p>
    Click an item from the menu on the left to begin editing. View the JSON/YAML
    output at any time by selecting the "Export" tabs. When finished, click
    "Download" or Copy" to copy the output to your clipboard. OpenAPI-GUI saves
    data only to your browser's local-storage. Data is saved before destructive
    edits (deletions) and when the "Save" button is pressed. "Undo" will return
    to the last-saved state. Make sure you save your JSON/YAML output when
    finished.
  </p>
  <br />
  <h3>Converting from Swagger / OpenAPI 2.0</h3>
  <p>Swagger / OpenAPI 2.0 definitions are converted using this online tool.</p>
</div>; */
}
