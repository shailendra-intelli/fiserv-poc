import {
  Button,
  Card,
  InputWithMovingLabel,
  Tooltip,
} from "intelli-ui-components-library";
import styles from "./enum.module.scss";
import { AddIcon, DeleteIcon } from "../../../assets/icons";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addServer } from "../../../store/reducers/serversSlice";

interface enumProps {
  serverIndex: number;
  variableKeys: any;
}
const Enum: React.FC<enumProps> = ({ serverIndex, variableKeys }) => {
  const dispatch = useAppDispatch();
  const newServersDataschemes = useAppSelector(
    (state) => state.servers.servers
  );
  const serverObject = [...newServersDataschemes];
  const oldServerItem = { ...serverObject[serverIndex].variables };
  const oldEnumData = [...oldServerItem[variableKeys].enum];

  const addEnum = () => {
    let enumKeys = true;
    oldEnumData.map((enumItem) => {
      if (enumItem === "") {
        enumKeys = false;
      }
    });
    if (enumKeys) {
      const updatedEnumData = [...oldEnumData, ""];
      const updatedServerItem = {
        ...oldServerItem,
        [variableKeys]: {
          ...oldServerItem[variableKeys],
          enum: updatedEnumData,
        },
      };
      const updatedServerObject = [...serverObject];
      updatedServerObject[serverIndex] = {
        ...serverObject[serverIndex],
        variables: updatedServerItem,
      };
      dispatch(addServer(updatedServerObject));
    }
  };
  const handleChangeEnum = (e: any, index: number) => {
    const copyOfOldData = [...oldEnumData];
    copyOfOldData[index] = e.target.value;
    const updatedServerItem = {
      ...oldServerItem,
      [variableKeys]: {
        ...oldServerItem[variableKeys],
        enum: copyOfOldData,
      },
    };
    const updatedServerObject = [...serverObject];
    updatedServerObject[serverIndex] = {
      ...serverObject[serverIndex],
      variables: updatedServerItem,
    };
    dispatch(addServer(updatedServerObject));
  };
  const deleteEnum = (index: number) => {
    if (oldEnumData.length > 1) {
      oldEnumData.splice(index, 1);
      const updatedServerItem = {
        ...oldServerItem,
        [variableKeys]: {
          ...oldServerItem[variableKeys],
          enum: oldEnumData,
        },
      };
      const updatedServerObject = [...serverObject];
      updatedServerObject[serverIndex] = {
        ...serverObject[serverIndex],
        variables: updatedServerItem,
      };
      dispatch(addServer(updatedServerObject));
    }
  };
  useEffect(() => {
    if (oldEnumData.length === 0) {
      const updatedEnumData = [...oldEnumData, ""];
      const updatedServerItem = {
        ...oldServerItem,
        [variableKeys]: {
          ...oldServerItem[variableKeys],
          enum: updatedEnumData,
        },
      };
      const updatedServerObject = [...serverObject];
      updatedServerObject[serverIndex] = {
        ...serverObject[serverIndex],
        variables: updatedServerItem,
      };
      dispatch(addServer(updatedServerObject));
    }
  }, [serverIndex, variableKeys, dispatch, serverObject]);

  return (
    <Card className={styles["card"]}>
      {oldEnumData.map((enumItem, index) => {
        return (
          <div className={styles["enum-row"]}>
            <InputWithMovingLabel
              inputProps={{
                type: "text",
                value: enumItem,
                name: "item",
                label: `Enum ${index + 1}`,
                onChange: (e) => handleChangeEnum(e, index),
              }}
              top={true}
            />
            <Tooltip message="Delete Enum" position="top">
              <Button
                size="sm"
                round="round"
                variant="outline"
                style={{ height: "40px" }}
                onClick={() => deleteEnum(index)}
                className={`${
                  oldEnumData.length === 1 ? styles["disabled"] : ""
                }`}
              >
                <DeleteIcon width={"20px"} height={"20px"} />
              </Button>
            </Tooltip>
          </div>
        );
      })}
      <div className={styles["add-btn"]}>
        <Button
          size="sm"
          round="round"
          variant="outline"
          style={{ height: "30px" }}
          className={styles["add-btn-icon"]}
          onClick={addEnum}
        >
          <AddIcon fill="black" />
          <span className={styles["add-enum-text"]}>Add Enum</span>
        </Button>
      </div>
    </Card>
  );
};

export default Enum;
