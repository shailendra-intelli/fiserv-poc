// @ts-nocheck
import {
  Checkbox,
  DropDown,
  InputWithMovingLabel,
  MultiAutoComplete,
  ToggleBtnGroup,
  AutoComplete,
  Button,
  Radio,
  Card,
} from "intelli-ui-components-library";
import React, { useEffect, useState } from "react";

import { convertToOriginalFormat } from "../../utils/conertData";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import AddEnum from "./AddEnum";
import CreateParam from "./subtabs/parameters/CreateParam";
import Responses from "./subtabs/responses/NoMediaTypes";
import CreateCallback from "./CreateCallback";
import requestTypes, {
  locationTypes,
  dataTypes,
  formatTypes,
} from "../../utils/constant/requestTypes";
import { DeleteIcon, SaveIcon, CopyIcon, AddIcon } from "../../assets/icons";
import {
  DEFAULT_PARAM_OBJ,
  addMethod,
  updatePath,
} from "../../store/reducers/mainTabsSlice";
import { DEFAULT_Callback_OBJ } from "./mainTabsSlice";
import PathSubTabMain from "./subtabs/main/PathSubTabMain";
import PathSubTabDescription from "./subtabs/description/PathSubTabDescription";
import PathSubTabsDocs from "./subtabs/docs/PathSubTabDocs";
import PathSubTabRequest from "./subtabs/requestBody/PathSubTabRequest";
import PathSubTabParameters from "./subtabs/parameters/PathSubTabParameters";
import PathSubTabSecurity from "./subtabs/security/PathSubTabSecurity";
import styles from "./maintab.module.scss";
import PathSubTabResponses from "./subtabs/responses/PathSubTabResponses";

const EditPathSubTabs = ({ pathName, methodName }: any) => {
  const [selectedTab, setSelectedTab] = useState("main");

  const content = () => {
    switch (selectedTab) {
      case "main":
        return <PathSubTabMain pathName={pathName} methodName={methodName} />;
      case "desc":
        return (
          <PathSubTabDescription pathName={pathName} methodName={methodName} />
        );
      case "docs":
        return <PathSubTabsDocs pathName={pathName} methodName={methodName} />;
      case "parameters":
        return (
          <PathSubTabParameters pathName={pathName} methodName={methodName} />
        );
      case "req":
        return (
          <PathSubTabRequest pathName={pathName} methodName={methodName} />
        );
      case "sec":
        return (
          <PathSubTabSecurity pathName={pathName} methodName={methodName} />
        );
      case "call":
        return <Callbacks pathName={pathName} methodName={methodName} />;
      case "res":
        return (
          <PathSubTabResponses pathName={pathName} methodName={methodName} />
        );
      default:
        return <div>default</div>;
    }
  };
  return (
    <div>
      <ToggleBtnGroup
        onToggle={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSelectedTab(e.target.value)
        }
        selectedTab={selectedTab}
        shouldSelectByDefault={true}
        borderBottom={true}
        disabled
        styleObj={{ bgColor: "#0086ff", color: "#0086ff" }}
      >
        <ToggleBtnGroup.Btn value="main">Main</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="desc">Description</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="docs">Docs</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="parameters">Parameters</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="req">Request Body</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="res">Responses</ToggleBtnGroup.Btn>
        <ToggleBtnGroup.Btn value="sec">Security</ToggleBtnGroup.Btn>
        {/* <ToggleBtnGroup.Btn value="link">Links</ToggleBtnGroup.Btn> */}
        <ToggleBtnGroup.Btn value="call">Callbacks</ToggleBtnGroup.Btn>
      </ToggleBtnGroup>
      <div>{content()}</div>
    </div>
  );
};

const Callbacks = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();
  const callbacksArr = paths[pathName]?.[methodName]?.callbacks ?? [];

  return (
    <div className={styles.parameterContainer}>
      {Object.keys(callbacksArr).length > 0 ? (
        Object.keys(callbacksArr).map((key, i) => (
          <>
            <>
              <Card
                round="round"
                style={{
                  width: "100%",
                }}
              >
                <div className="text-left w-full">
                  <button
                    className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                    title="Add Callback"
                    onClick={() => {
                      dispatch(
                        updatePath({
                          pathName,
                          methodName,
                          methodKey: "callbacks",
                          data: {
                            ...paths[pathName][methodName].callbacks,
                            [Object.keys(paths[pathName][methodName].callbacks)
                              .length]: DEFAULT_Callback_OBJ,
                          },
                        })
                      );
                    }}
                  >
                    <AddIcon fill="#FFFFFF" width="16px" height="16px" />
                  </button>
                  <button
                    className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                    title="Duplicate Callback"
                    onClick={() => {}}
                  >
                    <CopyIcon fill="#FFFFFF" width="16px" height="16px" />
                  </button>
                  <button
                    className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                    title="Delete Callback"
                    onClick={() => {
                      const { [key]: omit, ...rest } = callbacksArr;
                      dispatch(
                        updatePath({
                          pathName,
                          methodName,
                          methodKey: "callbacks",
                          data: rest,
                        })
                      );
                    }}
                  >
                    <DeleteIcon fill="#FFFFFF" width="16px" height="16px" />
                  </button>
                </div>
                <div className={styles.inputParamName}>
                  <InputWithMovingLabel
                    inputProps={{
                      label: "Name",
                      name: ["callbacks", "name"],
                      value: callbacksArr[key]?.name || "",
                      onChange: (event) => {
                        const updatedObjAtIndex = {
                          ...callbacksArr[i],
                          [key]: {
                            ...callbacksArr[key],
                            name: event.target.value,
                          },
                        };
                        dispatch(
                          updatePath({
                            pathName,
                            methodName,
                            methodKey: "callbacks",
                            data: updatedObjAtIndex,
                          })
                        );
                      },
                      type: "text",
                    }}
                    top={true}
                  />
                </div>
                <div className="text-left w-full">
                  {/* <button
                  className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                  title="Add Expression"
                  onClick={() => {
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "callbacks",
                        data: {
                          ...paths[pathName][methodName].callbacks,
                          [Object.keys(paths[pathName][methodName].callbacks).length]: {
                            ...DEFAULT_Callback_OBJ,
                            urlExpression: DEFAULT_Callback_OBJ.urlExpression,
                          }
                        },
                      })
                    );
                  }}
                >
                  <AddIcon fill="#FFFFFF" width="16px" height="16px" />
                </button>
                <button
                  className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                  title="Duplicate Callback"
                  onClick={() => { }}
                >
                  <CopyIcon fill="#FFFFFF" width="16px" height="16px" />
                </button>
                <button
                  className="bg-gray-400 rounded-md p-1 disabled:bg-gray-200 hover:bg-gray-500"
                  title="Delete Expression"
                  onClick={() => {
                    // Create a copy of the callbacksArr
                    const updatedCallbacksArr = { ...callbacksArr };
                    // Delete the urlExpression property from the callback object
                    delete updatedCallbacksArr[key].urlExpression;

                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "callbacks",
                        data: updatedCallbacksArr,
                      })
                    );
                  }}
                >
                  <DeleteIcon fill="#FFFFFF" width="16px" height="16px" />
                </button> */}
                </div>
                <div className={styles.inputDescription}>
                  <InputWithMovingLabel
                    inputProps={{
                      label: "URL Expression",
                      name: ["New expression"],
                      value: callbacksArr[key]?.urlExpression || "",
                      onChange: (event) => {
                        const updatedObjAtIndex = {
                          ...callbacksArr,
                          [key]: {
                            ...callbacksArr[key],
                            urlExpression: event.target.value,
                          },
                        };
                        dispatch(
                          updatePath({
                            pathName,
                            methodName,
                            methodKey: "callbacks",
                            data: updatedObjAtIndex,
                          })
                        );
                      },
                      type: "text",
                    }}
                    top
                  />
                </div>
                {/* <Button
                size="md"
                variant="contained"
                round="round"
                color="primary"
                className="mb-2"
                icon={<AddIcon />}
              >
                <span>
                  <AddIcon />
                </span>
                Add Operation
              </Button> */}
              </Card>
            </>
          </>
        ))
      ) : (
        <CreateCallback pathName={pathName} methodName={methodName} />
      )}
    </div>
  );
};

const Res = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();
  const [showResponses, setShowResponses] = useState(true); // Initial visibility state

  const toggleResponses = () => {
    setShowResponses((prevShowResponses) => !prevShowResponses);
  };

  return (
    <div className="mt-6">
      <div>
        {Object.entries(
          paths[pathName][methodName].responseBody.content || {}
        ).map(([key, value]) => (
          <InputWithMovingLabel
            key={key}
            inputProps={{
              label: "Media-Type",
              name: "responseBody.description",
              value: key ?? "",
              onChange: (e) => console.log(e),
              type: "text",
            }}
            top
            className="mb-4"
          />
        ))}
        <button
          onClick={() => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "responseBody",
                data: {
                  ...paths[pathName][methodName].responseBody,
                  content: {
                    "change/me": {
                      schema: {},
                    },
                  },
                },
              })
            );
            toggleResponses(); // Togglling the visibility state
          }}
        >
          {showResponses && <Responses />}
        </button>
      </div>
    </div>
  );
};

export default EditPathSubTabs;
