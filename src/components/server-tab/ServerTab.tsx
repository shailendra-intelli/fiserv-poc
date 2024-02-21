import {
  Button,
  Card,
  InputWithMovingLabel,
  ListItem,
  Tooltip,
} from "intelli-ui-components-library";
import { useEffect, useState } from "react";
import styles from "./server-tab.module.scss";
import { AddIcon, DeleteIcon, EditIcon, SaveIcon } from "../../assets/icons";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { addServer } from "../../store/reducers/serversSlice";
import VariableModel from "./variables/VariableModel";
import { exportData } from "../../store/reducers/exportSlice";

const ServerTab = () => {
  const dispatch = useAppDispatch();
  const exportVal = useAppSelector((state) => state.export);
  const exportObj = { ...exportVal };
  const { servers } = exportObj;
  const newServersDataschemes = useAppSelector(
    (state) => state.servers.servers
  );
  const newObjectSchema = [...newServersDataschemes];
  const [showModal, setShowModal] = useState(false);
  const [serverItem, setServerItem] = useState<any>();
  const [serverIndex, setserverIndex] = useState(0);

  const addNewServer = () => {
    const newServer = {
      url: "",
      description: "",
    };
    let newKeys = true;
    newObjectSchema.map((item) => {
      if (item.url === "") {
        newKeys = false;
      }
    });
    if (newKeys) {
      newObjectSchema.push(newServer);
      dispatch(addServer([...newObjectSchema]));
    }
  };
  const handleOnNamechange = (e: any, index: any) => {
    const dataCopy = { ...newObjectSchema[index] };
    const newValues = e.target.value;
    dataCopy[e.target.name] = newValues;
    newObjectSchema[index] = dataCopy;
    dispatch(addServer([...newObjectSchema]));
  };
  const handleDeleteServer = (serverIndex: number) => {
    newObjectSchema.splice(serverIndex, 1);
    dispatch(addServer([...newObjectSchema]));
  };
  const saveUpdatedData = () => {
    exportObj["servers"] = newObjectSchema;
    dispatch(exportData(exportObj));
  };
  const editVariable = (index: number, serverObj: any) => {
    setserverIndex(index);
    setShowModal(true);
    setServerItem(serverObj);
  };

  useEffect(() => {
    dispatch(addServer([...servers]));
  }, [exportVal]);

  return (
    <div className={styles.container}>
      <div className={styles["card-container"]}>
        <Card className={styles["card"]}>
          <div className={styles["title-section"]}>
            <div className={styles["button-group"]}>
              <Tooltip message="Add sever" position="top">
                <Button
                  variant="outline"
                  round="flat"
                  className={styles["add-btn"]}
                  onClick={addNewServer}
                >
                  <AddIcon />
                </Button>
              </Tooltip>
            </div>
          </div>
          <ListItem
            style={{ backgroundColor: "transparent" }}
            midSection={
              <div className={styles["header-container"]}>
                <div className={styles["header-url"]}>URL</div>
                <div className={styles["header-description"]}>DESCRIPTION</div>
              </div>
            }
            rightSection={
              <div className={styles["action-container"]}>
                <div className={styles["action-header"]}>ACTION</div>
              </div>
            }
          ></ListItem>
          {Object.keys(newObjectSchema).map(
            (numberOfitem: any, index: number) => {
              const { url, description } = newObjectSchema[numberOfitem];
              return (
                <ListItem
                  style={{ backgroundColor: "transparent" }}
                  midSection={
                    <div className={styles["variable-container"]}>
                      <div className={styles["variable-input"]}>
                        <InputWithMovingLabel
                          inputProps={{
                            type: "text",
                            value: url,
                            name: "url",
                            label: "URL",
                            required: true,
                            onChange: (e) => handleOnNamechange(e, index),
                          }}
                          top={true}
                        />
                      </div>
                      <div className={styles["variable-description"]}>
                        <InputWithMovingLabel
                          inputProps={{
                            type: "text",
                            value: description,
                            name: "description",
                            label: "DESCRIPTION",
                            onChange: (e) => handleOnNamechange(e, index),
                          }}
                          top={true}
                        />
                      </div>
                    </div>
                  }
                  rightSection={
                    <div className={styles["action-btn-container"]}>
                      <Tooltip message="Add/Edit Variables" position="top">
                        <Button
                          size="md"
                          round="round"
                          variant="outline"
                          onClick={(e) =>
                            editVariable(index, newObjectSchema[numberOfitem])
                          }
                          style={{ height: "40px", marginRight: "5px" }}
                        >
                          <EditIcon />
                        </Button>
                      </Tooltip>
                      <div className={styles["delete-variable-btn"]}>
                        <Tooltip message="Delete Server" position="top">
                          <Button
                            size="md"
                            round="round"
                            variant="outline"
                            onClick={(e) => handleDeleteServer(index)}
                            style={{ height: "40px", marginRight: "5px" }}
                          >
                            <DeleteIcon />
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  }
                ></ListItem>
              );
            }
          )}
          {showModal && (
            <VariableModel
              serverIndex={serverIndex}
              serverItem={serverItem}
              setShowModal={setShowModal}
            />
          )}
        </Card>
      </div>
      <div className={styles["save-btn"]}>
        <Button
          color="default"
          onClick={saveUpdatedData}
          className={styles["button"]}
        >
          {" "}
          <span className={styles["button-icon"]}>
            <SaveIcon />
          </span>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ServerTab;
