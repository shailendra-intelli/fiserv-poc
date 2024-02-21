import {
  Button,
  InputWithMovingLabel,
  Modal,
  Tooltip,
} from "intelli-ui-components-library";
import styles from "./schemas.module.scss";
import { AddIcon, CopyIcon, DeleteIcon, EditIcon } from "../../assets/icons";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { schemasData } from "../../store/reducers/schemasSlice";
import ace from "brace";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import "brace/mode/json";
import "brace/theme/github";
import { useState } from "react";

interface SchemasListProps {
  schemaKey: string;
  index: number;
}

const SchemasList: React.FC<SchemasListProps> = ({ schemaKey, index }) => {
  const [showModal, setShowModal] = useState(false);
  const schemasObj = useAppSelector((state) => state.schema.schemas);
  const dispatch = useAppDispatch();
  const newSchemas = { ...schemasObj };
  const schemaObj = { ...newSchemas[schemaKey] };
  const [json, setJson] = useState(schemaObj);
  const onInputChanges = (e: any) => {
    const newKey = e.target.value;
    const keyValues = Object.entries(newSchemas);
    keyValues.splice(index, 1, [newKey, schemaObj]);
    const newObj = Object.fromEntries(keyValues);
    dispatch(schemasData({ ...newObj }));
  };
  const onCloseButton = () => {
    setShowModal(false);
    newSchemas[schemaKey] = json;
    dispatch(schemasData({ ...newSchemas }));
  };
  const addSchema = () => {
    const newObj = {
      NewSchema: {
        type: "object",
      },
    };
    const addObjs = { ...newSchemas, ...newObj };
    dispatch(schemasData({ ...addObjs }));
  };

  const copySchema = () => {
    const copyObj = {
      NewSchema: newSchemas[schemaKey],
    };
    const addObjs = { ...newSchemas, ...copyObj };
    dispatch(schemasData({ ...addObjs }));
  };
  const deleteSchema = () => {
    const keyValues = Object.entries(newSchemas);
    keyValues.splice(index, 1);
    const newObj = Object.fromEntries(keyValues);
    dispatch(schemasData({ ...newObj }));
  };
  return (
    <>
      <div className={styles["schema"]}>
        <div className={styles["schema-icon"]}>
          <Tooltip message="Add Schema" position="top">
            <button className={styles["add-icon"]} onClick={addSchema}>
              <AddIcon fill="#FFFFFF" width="16px" height="16px" />
            </button>
          </Tooltip>
        </div>
        <div className={styles["schema-icon"]}>
          <Tooltip message="Duplicate Schema" position="top">
            <button onClick={copySchema} className={styles["add-icon"]}>
              <CopyIcon fill="#FFFFFF" width="16px" height="16px" />
            </button>
          </Tooltip>
        </div>
        <div className={styles["schema-icon"]}>
          <Tooltip message="Edit shared schema" position="top">
            <button
              onClick={() => setShowModal(true)}
              className={styles["add-icon"]}
            >
              <EditIcon fill="#FFFFFF" width="16px" height="16px" />
            </button>
          </Tooltip>
        </div>
        <div className={styles["schema-icon"]}>
          <Tooltip message="Delete Schema" position="left">
            <button onClick={deleteSchema} className={styles["add-icon"]}>
              <DeleteIcon fill="#FFFFFF" width="16px" height="16px" />
            </button>
          </Tooltip>
        </div>
        <InputWithMovingLabel
          inputProps={{
            label: "Schema",
            name: schemaKey,
            value: schemaKey,
            onChange: onInputChanges,
            type: "text",
          }}
          top
        />
      </div>
      {showModal && (
        <Modal
          onHidden={() => {
            setShowModal(false);
          }}
          showOverlay={true}
          setting={{
            modalId: "center-btn",
            className: styles.schemaModel,
            variant: "action",
          }}
          childClassName={styles.schemaContents}
        >
          <Modal.CloseIcon onClick={onCloseButton} />
          <Modal.Body className={styles["model-body"]}>
            <div className={styles.schemaContents}>
              <Editor
                mode="tree"
                history
                value={schemaObj}
                onChange={setJson}
                ace={ace}
                theme="ace/theme/github"
              />
            </div>
            <Button onClick={onCloseButton} className={styles.buttomButton}>
              Close
            </Button>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
export default SchemasList;
