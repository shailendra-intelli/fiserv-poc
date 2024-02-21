import {
  Button,
  Card,
  InputWithMovingLabel,
  Tooltip,
} from "intelli-ui-components-library";
import styles from "./variable.module.scss";
import { AddIcon, DeleteIcon } from "../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addServer } from "../../../store/reducers/serversSlice";
import Enum from "../enum/Enum";

interface variableProps {
  serverIndex: number;
  serverItem: any;
}
const Variables: React.FC<variableProps> = ({ serverIndex, serverItem }) => {
  const dispatch = useAppDispatch();
  const newServersDataschemes = useAppSelector(
    (state) => state.servers.servers
  );
  const serverObject = [...newServersDataschemes];
  const oldServerItem = { ...serverObject[serverIndex] };
  const oldvariables = { ...oldServerItem.variables };

  const addVariable = () => {
    const newVariable = {
      variable1: {
        description: "Description",
        default: "changeMe",
        enum: [],
      },
    };
    const updatedVariables = { ...oldvariables, ...newVariable };
    oldServerItem["variables"] = updatedVariables;
    serverItem = oldServerItem;
    serverObject[serverIndex] = serverItem;
    dispatch(addServer([...serverObject]));
  };
  const deleteVariable = (index: number, variableKeys: any) => {
    let variablesCopy = { ...oldvariables };
    const varKeys = Object.entries(variablesCopy);
    varKeys.splice(index, 1);
    variablesCopy = Object.fromEntries(varKeys);
    oldServerItem["variables"] = variablesCopy;
    serverObject[serverIndex] = oldServerItem;
    dispatch(addServer([...serverObject]));
  };
  const handleKeysChange = (e: any, variableKey: any, index: number) => {
    const oldValues = { ...oldvariables[variableKey] };
    const newKeys = e.target.value;
    const keyValues = Object.entries(oldvariables);
    keyValues.splice(index, 1, [newKeys, oldValues]);
    const newObjVariables = Object.fromEntries(keyValues);
    oldServerItem["variables"] = newObjVariables;
    serverObject[serverIndex] = oldServerItem;
    dispatch(addServer([...serverObject]));
  };
  const handleOnNamechange = (e: any, variableKey: any) => {
    const oldValues = { ...oldvariables[variableKey] };
    oldValues[e.target.name] = e.target.value;
    oldvariables[variableKey] = oldValues;
    oldServerItem["variables"] = oldvariables;
    serverObject[serverIndex] = oldServerItem;
    dispatch(addServer([...serverObject]));
  };

  return (
    <div className={styles["card-container"]}>
      <Card className={styles["card"]}>
        {Object.keys(oldvariables).map((variableKeys, index) => {
          const variblesItem = oldvariables[variableKeys];
          return (
            <>
              <div className={styles["input-btn-container"]}>
                <div className={styles["input-btn"]}>
                  <InputWithMovingLabel
                    inputProps={{
                      type: "name",
                      value: variableKeys,
                      name: "varKey",
                      label: "Name",
                      onChange: (e) => handleKeysChange(e, variableKeys, index),
                    }}
                    top={true}
                  />
                </div>
                <div className={styles["input-btn"]}>
                  <InputWithMovingLabel
                    inputProps={{
                      type: "text",
                      value: variblesItem.description || "",
                      name: "description",
                      label: "Description",
                      onChange: (e) => handleOnNamechange(e, variableKeys),
                    }}
                    top={true}
                  />
                </div>
                <div className={styles["input-btn"]}>
                  <InputWithMovingLabel
                    inputProps={{
                      type: "text",
                      value: variblesItem.default || "change-me",
                      name: "default",
                      label: "Default",
                      onChange: (e) => handleOnNamechange(e, variableKeys),
                    }}
                    top={true}
                  />
                </div>
                <Tooltip
                  message={"Delete Variable"}
                  arrowIcon={true}
                  position="top"
                >
                  <Button
                    size="sm"
                    round="round"
                    variant="outline"
                    style={{ height: "40px" }}
                    onClick={() => {
                      deleteVariable(index, variableKeys);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </Tooltip>
                <Tooltip
                  message={"Add Variable"}
                  arrowIcon={true}
                  position="top"
                >
                  <Button
                    size="sm"
                    round="round"
                    variant="outline"
                    style={{ height: "40px" }}
                    onClick={addVariable}
                    className={styles["add-icon"]}
                  >
                    <AddIcon fill={"black"} />
                  </Button>
                </Tooltip>
              </div>
              <Enum serverIndex={serverIndex} variableKeys={variableKeys} />
            </>
          );
        })}
        <div className={styles["btn-container"]}>
          <Tooltip message={"Add Variable"} arrowIcon={true} position="top">
            <Button
              size="sm"
              round="round"
              variant="outline"
              style={{ height: "40px" }}
              onClick={addVariable}
              className={styles["add-icon"]}
            >
              <AddIcon fill={"black"} />
            </Button>
          </Tooltip>
        </div>
      </Card>
    </div>
  );
};

export default Variables;
