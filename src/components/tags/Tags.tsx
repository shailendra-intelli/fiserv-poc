import AddTag from "./AddTag";
import styles from "./tags.module.scss";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
import { tagsData } from "../../store/reducers/tagsSlice";
import { AddIcon, SaveIcon } from "../../assets/icons";
import { Button, Tooltip } from "intelli-ui-components-library";
import { exportData } from "../../store/reducers/exportSlice";
const Tags = () => {
  const UploadData = useAppSelector((state) => state.export);
  const dispatch = useAppDispatch();
  const newData = { ...UploadData };
  const { tags } = newData;
  const newTags = useAppSelector((state) => state.tags.tags);

  useEffect(() => {
    tags
      ? dispatch(tagsData({ key: "tags", data: tags }))
      : dispatch(tagsData({ key: "tags", data: [] }));
  }, [UploadData]);

  const onSave = () => {
    newData["tags"] = [...newTags];
    dispatch(exportData({ ...newData }));
  };
  const addNewTag = () => {
    const tagsObj = [...newTags];
    let dup = true;
    const newTag = {
      name: "newTag",
    };
    tagsObj.map((obj) => {
      if (obj.name === "newTag") {
        dup = false;
      }
    });
    if (dup) {
      tagsObj.push(newTag);
      dispatch(tagsData({ key: "tags", data: tagsObj }));
    }
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          height: "20em",
          overflowY: "scroll",
        }}
      >
        <div className={styles["tag-addicon"]}>
          <Tooltip message="Add tag" position="top">
            <button className={styles["add-icon"]} onClick={addNewTag}>
              <AddIcon fill="#FFFFFF" width="24px" height="24px" />
            </button>
          </Tooltip>
        </div>

        {newTags.length > 0 && (
          <div className={styles["tags-container"]}>
            {newTags.map((obj: any, index: number) => (
              <AddTag tag={obj} index={index} />
            ))}
          </div>
        )}
      </div>

      {newTags.length > 0 && (
        <div className={styles["tag-button"]}>
          <Button className={styles["button"]} onClick={onSave}>
            {" "}
            <span className={styles["button-icon"]}>
              <SaveIcon />
            </span>
            Save
          </Button>
        </div>
      )}
    </div>
  );
};
export default Tags;
