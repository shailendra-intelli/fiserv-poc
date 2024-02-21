import { InputWithMovingLabel } from "intelli-ui-components-library";
import { updatePath } from "../../mainTabsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import styles from "./pathsubtabdocs.module.scss";

const PathSubTabsDocs = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["mt-6"]}>
      <InputWithMovingLabel
        inputProps={{
          label: "Description",
          name: "description",
          value: paths[pathName][methodName].externalDocs?.description ?? "",
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "externalDocs",
                data: {
                  ...paths[pathName][methodName].externalDocs,
                  description: event.target.value,
                },
              })
            );
          },
          type: "text",
        }}
        top
        className={styles["mb-4"]}
      />
      <InputWithMovingLabel
        inputProps={{
          label: "Url",
          name: "url",
          value: paths[pathName][methodName].externalDocs?.url ?? "",
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "externalDocs",
                data: {
                  ...paths[pathName][methodName].externalDocs,
                  url: event.target.value,
                },
              })
            );
          },
          type: "text",
        }}
        top
        className={styles["mb-2"]}
      />
    </div>
  );
};

export default PathSubTabsDocs;
