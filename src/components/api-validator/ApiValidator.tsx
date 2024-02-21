import {
  Button,
  FileUpload,
  Checkbox,
  Radio,
  ToggleBtnGroup,
} from "intelli-ui-components-library";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { uploadFile } from "../../store/reducers/uploadSlice";
import { toastFile } from "../../store/reducers/showToastSlice";
import DemoJson from "../../utils/constant/demo.json";
import { DeleteIcon, UploadIcon, PawIcon } from "../../assets/icons";
import SnackBar from "../snackbar/SnackBar";
import Modals from "../modals/Modals";
import { exportData } from "../../store/reducers/exportSlice";
import { LoadingOutlined } from "@ant-design/icons";
import GeneratePostmanCollection from "./GeneratePostmanCollection";
import RunPostmanCollection from "./RunPostmanCollection";

const BASE_URL = "http://localhost:8080";

const ApiValidator = () => {
  const [selectedTab, setSelectedTab] = useState("generate-postman");
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

  return (
    <>
      <ToggleBtnGroup
        onToggle={(e: any, val: any) => setSelectedTab(val)}
        selectedTab={selectedTab}
        shouldSelectByDefault={true}
        borderBottom={false}
        disabled
        styleObj={{
          bgColor: "#FF6600",
          borderColor: "#FF6600",
        }}
      >
        <ToggleBtnGroup.Btn value="generate-postman">
          Generate Postman Collection
        </ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="run-postman">
          Run Postman Collection
        </ToggleBtnGroup.Btn>
      </ToggleBtnGroup>
      {selectedTab === "generate-postman" && (
        <GeneratePostmanCollection
          modalData={modalData}
          onCloseModal={closeModal}
          onChangeModalData={(data: any) => setModalData(data)}
        />
      )}
      {selectedTab === "run-postman" && (
        <RunPostmanCollection modalData={modalData} onCloseModal={closeModal} />
      )}
      <SnackBar />
    </>
  );
};

export default ApiValidator;
