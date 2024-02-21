import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import styles from "./apiValidator.module.scss";
import { Button, FileUpload } from "intelli-ui-components-library";
import { DeleteIcon, PawIcon, SaveIcon, UploadIcon } from "../../assets/icons";
import { LoadingOutlined, SettingOutlined } from "@ant-design/icons";
import Modals from "../modals/Modals";
import { uploadFile } from "../../store/reducers/uploadSlice";
import { exportData } from "../../store/reducers/exportSlice";
import { updateApiValidatorState } from "../../store/reducers/apiValidatorSlice";
import SelectFile from "../../assets/svgs/select_file.svg";
import { style } from "@mui/system";

const BASE_URL = "http://localhost:8080";

const GeneratePostmanCollection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const apiValidator = useAppSelector((state) => state.apiValidator);

  const {
    isCreatingCollection,
    createdCollectionData,
    hasDownloadedCollection,
  } = apiValidator;

  const [jsonFile, setJsonFile] = useState<File | null>(null);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [uploadStatusMessage, setUploadStatusMessage] = useState<{
    className: string;
    message: string;
  } | null>(null);

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

  const generatePostmanCollection = async () => {
    if (jsonFile === null || csvFile === null) {
      setUploadStatusMessage({
        message:
          "Both API Spec (.json) file and API Data (.csv) file are required.",
        className: "upload-failure-message",
      });
      return;
    }
    const formData = new FormData();
    if (jsonFile !== null) {
      formData.append("apiSpec", jsonFile);
    }

    if (csvFile !== null) {
      formData.append("apiData", csvFile);
    }

    dispatch(updateApiValidatorState({ isCreatingCollection: true }));
    try {
      let response = await fetch(`${BASE_URL}/createPostmanCollection`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      const dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(data, null, 2));

      dispatch(updateApiValidatorState({ createdCollectionData: dataStr }));
      dispatch(updateApiValidatorState({ hasCreatedCollection: true }));
    } catch (error) {
      console.log(error);
    }
    dispatch(updateApiValidatorState({ isCreatingCollection: false }));
    dispatch(updateApiValidatorState({ hasDownloadedCollection: false }));
  };

  const downloadCollectionData = () => {
    if (!createdCollectionData) {
      return;
    }
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", createdCollectionData);
    downloadAnchorNode.setAttribute("download", "collection.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    dispatch(updateApiValidatorState({ hasDownloadedCollection: true }));
  };

  const handleUploadJsonFile = (file: File) => {
    if (file) {
      setJsonFile(file);
      setUploadStatusMessage({
        message: `${file.name} uploaded succesfully`,
        className: "upload-success-message",
      });
    }
  };

  const handleUploadCsvFile = (file: File) => {
    if (file) {
      setCsvFile(file);
      setUploadStatusMessage({
        message: `${file.name} uploaded succesfully`,
        className: "upload-success-message",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.uploadFiles}>
          <h4 style={{ marginTop: "20px" }}>Upload API Spec file</h4>
          <h4 style={{ marginTop: "20px" }}>Upload API Data file</h4>
        </div>
        <div className={styles.uploadFiles}>
          <div className={styles.selectFile}>
            <img src={SelectFile} alt="" />
            <h4>Select a file or drag and drop here</h4>
            <p>Accepted file type: .json or .yaml only</p>
            <FileUpload
              id={"jsonFileUpload"}
              fileInputClass={styles.fileUpload}
              onFileSelect={handleUploadJsonFile}
              fileType=".json,.yaml"
            />
          </div>
          <div className={styles.selectFile}>
            <img src={SelectFile} alt="" />
            <h4>Select a file or drag and drop here</h4>
            <p>Accepted file type: .csv only</p>

            <FileUpload
              id={"csvFileUpload"}
              fileInputClass={styles.fileUpload}
              onFileSelect={handleUploadCsvFile}
              fileType=".csv"
            />
          </div>
        </div>
      </div>
      {uploadStatusMessage !== null && (
        <div className={styles[uploadStatusMessage.className]}>
          {uploadStatusMessage.message}
        </div>
      )}

      <div className={`${styles["button-group"]}`}>
        <div>
          <Button
            round="round"
            className={styles["button1"]}
            onClick={generatePostmanCollection}
          >
            <span className={styles["button-icon"]}>
              {isCreatingCollection ? (
                <LoadingOutlined />
              ) : (
                <SettingOutlined width="16px" height="16px" />
              )}
            </span>
            {isCreatingCollection ? `Generating....` : "Generate"}
          </Button>
          {createdCollectionData.length > 0 && (
            <Button
              round="round"
              color="success"
              className={
                hasDownloadedCollection === false
                  ? `${styles["button1"]} ${styles["bg-green"]}`
                  : styles["button1"]
              }
              onClick={downloadCollectionData}
            >
              <span className={styles["button-icon"]}>
                <SaveIcon fill="#FFFFFF" />
              </span>
              {hasDownloadedCollection === false ? `Download` : `Download`}
            </Button>
          )}

          {createdCollectionData.length > 0 && (
            <Button
              round="round"
              color="success"
              className={`${styles["button1"]} ${styles["bg-green"]}`}
              onClick={() => {
                dispatch(
                  updateApiValidatorState({
                    fileSelectForReport: "generated",
                  })
                );
                navigate("/test-wizard/test-executor");
              }}
            >
              Execute
            </Button>
          )}
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
    </div>
  );
};

export default GeneratePostmanCollection;
