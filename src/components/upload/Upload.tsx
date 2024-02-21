import { Button, FileUpload } from "intelli-ui-components-library";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uploadFile } from "../../store/reducers/uploadSlice";
import styles from "./upload.module.scss";
import DemoJson from "../../utils/constant/demo.json";
import { DeleteIcon, UploadIcon, PawIcon } from "../../assets/icons";
import SnackBar from "../snackbar/SnackBar";
import Modals from "../modals/Modals";
import { exportData } from "../../store/reducers/exportSlice";

const Upload = () => {
  const dispatch = useAppDispatch();
  const uploadData = useAppSelector((state) => state.upload);
  const [input, setInput] = useState(uploadData);
  const [invalid, setInvalid] = useState(true);
  const [modelData, setModelData] = useState({
    title: "",
    description: "",
    onConfirm: () => {},
    showModal: false,
  });
  const [uploadStatusMessage, setUploadStatusMessage] = useState<{
    className: string;
    message: string;
  } | null>(null);

  const handleFileSelect = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          dispatch(uploadFile(jsonData));
        } catch {
          console.log("Something Wents Worng while reading the file");
        }
      };
      reader.readAsText(file);
    }
  };

  const handleLoadDefault = () => {
    setInput(JSON.stringify(DemoJson, null, 2));

    setInvalid(false);
  };

  const handleSubmit = () => {
    const data = JSON.parse(input);
    dispatch(uploadFile({ ...data }));
    dispatch(exportData({ ...data }));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleClear = () => {
    setInput("");
    setModelData({
      title: "",
      description: "",
      onConfirm: () => {},
      showModal: false,
    });
  };
  const handleOnRemoveAll = () => {
    setModelData({
      title: "Are you sure?",
      description:
        "This action will remove properties from the document. Undo will be available.",
      onConfirm: handleClear,
      showModal: true,
    });
  };
  const handleOnCancel = () => {
    setModelData({
      title: "",
      description: "",
      onConfirm: () => {},
      showModal: false,
    });
  };
  useEffect(() => {
    try {
      JSON.parse(input);
      setInvalid(false);
      setUploadStatusMessage({
        message: "JSON Successfully Validated!",
        className: "upload-success-message",
      });
    } catch (e) {
      setInvalid(true);
      setUploadStatusMessage({
        message: "Please Upload/Paste Valid JSON File",
        className: "upload-failure-message",
      });
    }
  }, [input]);

  useEffect(() => {
    setInput(JSON.stringify(uploadData, null, 2));
  }, [uploadData]);
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles["textarea-container"]}`}>
          <textarea
            onChange={handleInputChange}
            value={input}
            className={`${styles["text-area"]}`}
            name="Open Api Json"
            rows={20}
          />
        </div>
        {uploadStatusMessage !== null && (
          <div className={styles[uploadStatusMessage.className]}>
            {uploadStatusMessage.message}
          </div>
        )}
        <div className={`${styles["button-group"]}`}>
          <Button
            round="round"
            color="success"
            className={styles["button1"]}
            disabled={invalid}
            onClick={handleSubmit}
          >
            <span className={styles["button-icon"]}>
              <UploadIcon fill="#FFFFFF" />
            </span>
            LOAD DEFINATION
          </Button>
          <Button
            round="round"
            className={styles["button1"]}
            onClick={handleLoadDefault}
          >
            <span className={styles["button-icon"]}>
              <PawIcon fill="#FFFFFF" width="16px" height="16px" />
            </span>
            DEMO
          </Button>
          <Button
            round="round"
            className={styles["button"]}
            disabled={!input}
            onClick={handleOnRemoveAll}
          >
            <span className={styles["button-icon"]}>
              <DeleteIcon stroke="#ff6600" width="16px" height="16px" />
            </span>
            REMOVE ALL
          </Button>
          {modelData.showModal && (
            <Modals
              showModal={modelData.showModal}
              header={modelData.title}
              description={modelData.description}
              onConfirm={modelData.onConfirm}
              onCancel={handleOnCancel}
              childClassName=""
            />
          )}
          <FileUpload
            fileInputClass={styles.fileUpload}
            onFileSelect={handleFileSelect}
            fileType=".json"
          />
        </div>
      </div>
    </>
  );
};

export default Upload;
