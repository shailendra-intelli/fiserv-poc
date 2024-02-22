import React, { useState } from "react";
import styles from "./apiValidator.module.scss";
import SelectFile from "../../assets/svgs/select_file.svg";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toastFile } from "../../store/reducers/showToastSlice";
import { Button, FileUpload, Radio } from "intelli-ui-components-library";
import {
  CaretRightOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { ExecuteIcon, PawIcon, SaveIcon, UploadIcon } from "../../assets/icons";
import Modals from "../modals/Modals";
import { updateApiValidatorState } from "../../store/reducers/apiValidatorSlice";

const BASE_URL = "http://localhost:8080";

const RunPostmanCollection = () => {
  const dispatch = useAppDispatch();
  const apiValidator = useAppSelector((state) => state.apiValidator);

  const [collectionFile, setCollectionFile] = useState<File | null>(null);
  const [uploadStatusMessage, setUploadStatusMessage] = useState<{
    className: string;
    message: string;
  } | null>(null);

  const {
    hasCreatedCollection,
    createdCollectionData,
    fileSelectForReport,
    uploadedCollectionData,
    isCreatingReport,
    reportDataAsHTMLString,
    hasViewedReport,
    hasDownloadedReport,
  } = apiValidator;

  const [modalData, setModalData] = useState({
    title: "",
    description: "",
    onConfirm: () => {},
    showModal: false,
  });

  const closeModal = () => {
    setModalData({
      title: "",
      description: "",
      onConfirm: () => {},
      showModal: false,
    });
  };

  const runPostmanCollection = async () => {
    console.log(collectionFile, fileSelectForReport);
    const formData = new FormData();

    if (fileSelectForReport === "uploaded") {
      if (collectionFile === null) {
        setUploadStatusMessage({
          message: "Please upload a postman collection",
          className: "upload-failure-message",
        });
        return;
      } else {
        formData.append("postmanCollection", collectionFile);
      }
    } else if (fileSelectForReport === "generated") {
      const blob = new Blob([JSON.stringify(createdCollectionData, null, 2)], {
        type: "application/json",
      });
      const file = new File([blob], "data.json", { type: "application/json" });
      formData.append("postmanCollection", file);
    }

    dispatch(updateApiValidatorState({ isCreatingReport: true }));
    try {
      let response = await fetch(`${BASE_URL}/runPostmanCollection`, {
        method: "POST",
        body: formData,
      });

      const data = await response.text();
      dispatch(updateApiValidatorState({ reportDataAsHTMLString: data }));
      dispatch(updateApiValidatorState({ hasViewedReport: false }));
      dispatch(updateApiValidatorState({ hasDownloadedReport: false }));
    } catch (error) {
      console.log(error);
    }
    dispatch(updateApiValidatorState({ isCreatingReport: false }));
  };

  const viewHtmlReportInNewTab = () => {
    const blob = new Blob([reportDataAsHTMLString], { type: "text/html" });
    let url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
    window.URL.revokeObjectURL(url);
    dispatch(updateApiValidatorState({ hasViewedReport: true }));
    dispatch(updateApiValidatorState({ uploadedCollectionData: "" }));
  };

  const downloadReport = () => {
    const blob = new Blob([reportDataAsHTMLString], { type: "text/html" });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "report.html";
    a.click();
    window.URL.revokeObjectURL(url);
    dispatch(updateApiValidatorState({ hasDownloadedReport: true }));
    dispatch(updateApiValidatorState({ uploadedCollectionData: "" }));
  };

  const uplodadPostmanCollection = (file: File) => {
    if (file) {
      setCollectionFile(file);
      setUploadStatusMessage({
        message: `${file.name} has been uploaded succesfully`,
        className: "upload-success-message",
      });
      dispatch(
        updateApiValidatorState({
          fileSelectForReport: "uploaded",
        })
      );
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <div
          className={styles.itemDist}
          onClick={() =>
            dispatch(
              updateApiValidatorState({
                fileSelectForReport: "uploaded",
              })
            )
          }
          style={{ marginBottom: "16px" }}
        >
          {createdCollectionData.length > 0 ? (
            <Radio
              label="Import your file here"
              size="sm"
              checked={fileSelectForReport === "uploaded"}
            />
          ) : (
            <div style={{ height: "32px" }}></div>
          )}
        </div>

        <div className={styles.itemCenter}>
          <div className={styles.selectFile}>
            <img src={SelectFile} alt="" />
            <h4>Select a file or drag and drop here</h4>
            <p>Accepted file type: .json only</p>
            <FileUpload
              id="postman-collection"
              fileInputClass={styles.fileUpload}
              onFileSelect={uplodadPostmanCollection}
              fileType=".json"
            />
          </div>
        </div>
        {uploadStatusMessage !== null && (
          <div className={styles[uploadStatusMessage.className]}>
            {uploadStatusMessage.message}
          </div>
        )}

        {createdCollectionData.length > 0 && (
          <>
            <div
              className={styles.itemDist}
              onClick={() => {
                dispatch(
                  updateApiValidatorState({
                    fileSelectForReport: "generated",
                  })
                );
                setUploadStatusMessage(null);
              }}
            >
              <Radio
                label="Select Generated Postman Collection"
                size="sm"
                checked={fileSelectForReport === "generated"}
              />
            </div>
            <div className={styles.itemCenter}>
              <p
                style={{
                  color: "#ff6600",
                }}
              >
                collection.json
              </p>
            </div>
          </>
        )}
      </div>

      <div className={`${styles["button-group"]}`}>
        <div>
          <Button
            round="round"
            className={styles["button1"]}
            onClick={runPostmanCollection}
          >
            <span className={styles["button-icon"]}>
              {isCreatingReport ? (
                <LoadingOutlined />
              ) : (
                <ExecuteIcon fill="#FFFFFF" width={"18px"} height={"18px"} />
              )}
            </span>
            <span>{isCreatingReport ? "Running..." : "Run Postman"}</span>
          </Button>
          {reportDataAsHTMLString.length > 0 && (
            <>
              <Button
                round="round"
                color="success"
                className={
                  hasViewedReport === false
                    ? `${styles["button1"]} ${styles["bg-green"]}`
                    : styles["button1"]
                }
                onClick={viewHtmlReportInNewTab}
              >
                <span className={styles["button-icon"]}>
                  <EyeOutlined />
                </span>
                <span>
                  {hasViewedReport === false ? `View Report` : "View Report"}
                </span>
              </Button>
              <Button
                round="round"
                color="success"
                className={
                  hasDownloadedReport === false
                    ? `${styles["button1"]} ${styles["bg-green"]}`
                    : styles["button1"]
                }
                onClick={downloadReport}
              >
                <span className={styles["button-icon"]}>
                  <SaveIcon fill="#FFFFFF" />
                </span>
                {hasDownloadedReport === false ? `Download` : "Download Report"}
              </Button>
            </>
          )}
        </div>
      </div>
      {modalData.showModal && (
        <Modals
          showModal={modalData.showModal}
          header={modalData.title}
          description={modalData.description}
          onConfirm={modalData.onConfirm}
          onCancel={closeModal}
          childClassName=""
        />
      )}
    </div>
  );
};

export default RunPostmanCollection;
