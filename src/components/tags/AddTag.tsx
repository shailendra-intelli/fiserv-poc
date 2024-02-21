import { InputWithMovingLabel, Tooltip } from "intelli-ui-components-library";
import styles from "./tags.module.scss";
import { DeleteIcon } from "../../assets/icons";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { tagsData } from "../../store/reducers/tagsSlice";

interface AddTagProps {
  tag: any;
  index: number;
}
const AddTag: React.FC<AddTagProps> = ({ tag, index }) => {
  const tags = useAppSelector((state) => state.tags.tags);
  const dispatch = useAppDispatch();
  const newTags = [...tags];
  const tagObj = { ...newTags[index] };
  const { name, description, externalDocs } = tag;
  const onInputChanges = (e: any) => {
    tagObj[e.target.name] = e.target.value;
    newTags[index] = tagObj;
    dispatch(tagsData({ key: "tags", data: newTags }));
  };
  const onExternalInputChanges = (e: any) => {
    const newobj = { ...tagObj["externalDocs"] };
    const nameKey = e.target.name;
    newobj[nameKey] = e.target.value;
    tagObj["externalDocs"] = newobj;
    newTags[index] = { ...tagObj };
    dispatch(tagsData({ key: "tags", data: [...newTags] }));
  };
  const deleteTag = () => {
    newTags.splice(index, 1);
    dispatch(tagsData({ key: "tags", data: [...newTags] }));
  };

  return (
    <div className={styles["tag"]}>
      <InputWithMovingLabel
        inputProps={{
          label: "Name",
          name: "name",
          value: name,
          onChange: onInputChanges,
          type: "text",
        }}
        top
      />
      <InputWithMovingLabel
        inputProps={{
          label: "Docs URL",
          name: "url",
          value: externalDocs ? externalDocs.url : "",
          onChange: onExternalInputChanges,
          type: "text",
        }}
        top
      />
      <Tooltip message="Delete Tag" position="top">
        <button className={styles["delete-icon"]} onClick={deleteTag}>
          <DeleteIcon fill="#FFFFFF" width="20px" height="20px" />
        </button>
      </Tooltip>
      <InputWithMovingLabel
        inputProps={{
          label: "Description",
          name: "description",
          value: description,
          onChange: onInputChanges,
          type: "text",
        }}
        multiLine
        rows={2}
        top
      />
      <InputWithMovingLabel
        inputProps={{
          label: "External Docs",
          name: "description",
          value: externalDocs ? externalDocs.description : "",
          onChange: onExternalInputChanges,
          type: "text",
        }}
        multiLine
        rows={2}
        top
      />
    </div>
  );
};
export default AddTag;
