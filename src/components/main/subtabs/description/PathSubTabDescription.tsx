import React from "react";
import {
  InputWithMovingLabel,
  MultiAutoComplete,
} from "intelli-ui-components-library";
import { updatePath } from "../../mainTabsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import styles from "./pathsubtabdescription.module.scss";

const PathSubTabDescription = ({
  pathName,
  methodName,
}: {
  pathName: string;
  methodName: string;
}) => {
  const paths = useAppSelector((state) => state.main.paths);
  const tags = useAppSelector((state) => state.export.tags);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["mt-6"]}>
      <InputWithMovingLabel
        inputProps={{
          label: "Summary",
          name: "summary",
          value: paths[pathName][methodName]?.summary,
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "summary",
                data: event.target.value,
              })
            );
          },
          type: "text",
        }}
        top
      />
      <InputWithMovingLabel
        inputProps={{
          label: "Description",
          name: "description",
          value: paths[pathName][methodName]?.description ?? "",
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "description",
                data: event.target.value,
              })
            );
          },
          type: "text",
        }}
        top
        className={styles["my-4"]}
      />
      <MultiAutoComplete
        options={tags.map((x: any) => ({ ...x, label: x.name }))}
        onSelection={(event) => {
          const newTag = event.target.value;
          const updatedTags = [
            ...new Set([...paths[pathName][methodName].tags, newTag]),
          ];

          dispatch(
            updatePath({
              pathName,
              methodName,
              methodKey: "tags",
              data: updatedTags,
            })
          );
        }}
        onClose={(x) => console.log(x)}
        inputProps={{
          type: "text",
          label: "Tags",
          placeHolder: "Placeholder",
          onChange: (event) => console.log(event.target.value),
        }}
      />
    </div>
  );
};

export default PathSubTabDescription;
