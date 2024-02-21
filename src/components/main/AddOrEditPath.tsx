// @ts-nocheck
import React, { useEffect, useState } from "react";
import {
  Accordion,
  Button,
  InputWithMovingLabel,
  Modal,
} from "intelli-ui-components-library";
//@ts-ignore
import styles from "./main.module.scss";
import { DeleteIcon, SaveIcon, CopyIcon, AddIcon } from "../../assets/icons";

import {
  convertToCustomStructure,
  convertToOriginalFormat,
} from "../../utils/conertData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateData } from "../../store/reducers/exportSlice";
import requestTypes from "../../utils/constant/requestTypes";
import DemoJson from "../../utils/constant/demo.json";
import {
  VALID_METHODS,
  addMethod,
  addPath,
  copyMethod,
  deleteMethod,
} from "../../store/reducers/mainTabsSlice";
import EditPathSubTabs from "./EditPathSubTabs";

const AddOrEditPath = ({ Key, onHidden }: any) => {
  const [data, setData] = useState<[]>([]);

  const [path, setPath] = useState(Key);

  const paths = useAppSelector((state) => state.main.paths);

  const [expanded, setIsExpanded] = useState("");
  const dispatch = useAppDispatch();

  const handleExpand = (key: any) => () => {
    setIsExpanded((pre) => (pre === key ? "" : key));
  };

  const handlePathChange = (event: any) => {
    const { name, value } = event.target;
    setPath(value);
  };

  const handleSave = () => {
    dispatch(updateData({ key: "paths", data: paths }));
    onHidden();
  };

  return (
    <Modal
      onHidden={onHidden}
      showOverlay={true}
      setting={{
        modalId: "center-btn",
        className: styles["modal"],
        variant: "action",
      }}
    >
      <Modal.CloseIcon />
      <Modal.Header>{Key ? "Edit Operation" : "Add Path"}</Modal.Header>
      <InputWithMovingLabel
        inputProps={{
          label: "Method",
          name: "title",
          value: path,
          onChange: handlePathChange,
          onBlur: () => {
            dispatch(addPath({ pathName: path }));
          },
          type: "text",
          className: "!text-black",
        }}
        top
        className="mb-2"
        disabledInput={!!Key}
      />
      <Modal.Body>
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <button
            title="Add Method"
            onClick={() => {
              let selectedPath = paths[path];
              if (!paths[path]) {
                dispatch(addMethod({ pathName: path, methodName: "get" }));
              } else {
                const allowedMethods = VALID_METHODS.filter(
                  (method) => !Object.keys(selectedPath).includes(method)
                );
                if (allowedMethods.length === 0) {
                  return;
                } else {
                  dispatch(
                    addMethod({
                      pathName: path,
                      methodName: allowedMethods[0],
                    })
                  );
                }
              }
            }}
            disabled={requestTypes.length === data.length}
            style={{
              width: "fit-content",
              alignSelf: "flex-end",
              margin: "16px 0px",
              backgroundColor: "#000",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            <AddIcon fill="#fff" width="16px" height="16px" />
          </button>
          <div>
            {paths[path]
              ? Object.keys(paths[path]).map((method: any) => (
                  <Accordion.Section
                    key={method}
                    className="w-full block bg-white"
                    header={
                      <div>
                        <span className="uppercase">{method}</span>
                        <span style={{ marginLeft: "16px" }}>
                          {paths[path][method].operationId}
                        </span>
                      </div>
                    }
                    expanded={expanded === method}
                    onOpenClick={handleExpand(method)}
                    rightChild={
                      <>
                        <Button
                          variant="text"
                          title="Copy"
                          className="mr-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            let selectedPath = paths[path];
                            const allowedMethods = VALID_METHODS.filter(
                              (method) =>
                                !Object.keys(selectedPath).includes(method)
                            );

                            if (allowedMethods.length === 0) {
                              return;
                            } else {
                              dispatch(
                                copyMethod({
                                  pathName: path,
                                  methodName: allowedMethods[0],
                                  data: paths[path][method],
                                })
                              );
                            }
                          }}
                        >
                          <CopyIcon />
                        </Button>
                        <Button
                          variant="text"
                          title="Delete"
                          onClick={(e) => {
                            e.stopPropagation();
                            dispatch(
                              deleteMethod({
                                pathName: path,
                                methodName: method,
                              })
                            );
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </>
                    }
                  >
                    <EditPathSubTabs pathName={path} methodName={method} />
                  </Accordion.Section>
                ))
              : ""}
          </div>

          <Button
            onClick={() => {
              if (!path) {
                return;
              }
              handleSave();
            }}
            style={{
              width: "fit-content",
              alignSelf: "center",
              backgroundColor: "#9e9e9e",
              borderRadius: "4px",
            }}
          >
            <span className={styles["button-icon"]}>
              <SaveIcon />
            </span>
            Save
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddOrEditPath;
