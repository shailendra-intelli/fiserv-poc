import SchemasList from "./SchemasList";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { schemasData } from "../../store/reducers/schemasSlice";
import styles from "./schemas.module.scss";
import { AddIcon, SaveIcon } from "../../assets/icons";
import { Button, Tooltip } from "intelli-ui-components-library";
import { exportData } from "../../store/reducers/exportSlice";

const Schemas = () => {
  const uploadData = useAppSelector((state) => state.export);
  const newUploadData = { ...uploadData };
  const dispatch = useAppDispatch();
  const componentValue = { ...uploadData.components };
  const schemasValue = { ...componentValue.schemas };
  const schemasObj = useAppSelector((state) => state.schema.schemas);
  const lengthObj = Object.keys(schemasObj).length;
  const saveData = () => {
    componentValue["schemas"] = schemasObj;
    newUploadData["components"] = componentValue;
    dispatch(exportData({ ...newUploadData }));
  };
  const addSchema = () => {
    const newObj = {
      NewSchema: {
        type: "object",
      },
    };
    const addObjs = { ...schemasObj, ...newObj };
    dispatch(schemasData({ ...addObjs }));
  };
  useEffect(() => {
    const noData = {};
    schemasValue
      ? dispatch(schemasData({ ...schemasValue }))
      : dispatch(schemasData({ ...noData }));
  }, [uploadData]);
  return (
    <div className={styles.container}>
      {lengthObj < 1 && (
        <div className={styles["schema-addicon"]} onClick={addSchema}>
          <Tooltip message="Add new schema" position="top">
            <button className={styles["add-icon"]}>
              <AddIcon fill="#FFFFFF" width="24px" height="24px" />
            </button>
          </Tooltip>
        </div>)}
      <div className={styles["schemas-container"]}>
        {schemasObj &&
          Object.keys(schemasObj).map((schemaKey, index) => {
            return <SchemasList schemaKey={schemaKey} index={index} />;
          })}
      </div>
      <div className={styles["button-box"]}>
        {lengthObj > 0 && (
          <Button className={styles["button"]} onClick={saveData}>
            {" "}
            <span className={styles["button-icon"]}>
              <SaveIcon />
            </span>
            Save
          </Button>
        )}
      </div>
    </div>
  );
};
export default Schemas;
