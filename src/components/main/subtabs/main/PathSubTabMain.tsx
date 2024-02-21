import { DropDown, InputWithMovingLabel } from "intelli-ui-components-library";
import { updatePath } from "../../mainTabsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import requestTypes from "../../../../utils/constant/requestTypes";
import styles from "./pathsubtabmain.module.scss";

const PathSubTabMain = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();

  return (
    <div className={styles["mt-6"]}>
      <DropDown
        optionList={requestTypes.map((x) => ({
          label: x,
          key: x,
          //prev: data?.key,
          name: `main.main`,
        }))}
        label="Method"
        value={methodName}
        onChange={(option) => {
          const newMethod = option.key;
          dispatch(
            updatePath({
              pathName,
              methodName: newMethod,
              methodKey: "operationId",
              data: paths[pathName][methodName].operationId,
            })
          );
        }}
        className={styles["mb-4"]}
      />
      <InputWithMovingLabel
        inputProps={{
          label: "OperationId",
          name: "operationId",
          value: paths[pathName][methodName].operationId,
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "operationId",
                data: event.target.value,
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

export default PathSubTabMain;
