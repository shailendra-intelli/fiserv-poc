import {
  Button,
  Checkbox,
  DropDown,
  InputWithMovingLabel,
} from "intelli-ui-components-library";
import CreateParam from "./CreateParam";
import { DEFAULT_PARAM_OBJ, updatePath } from "../../mainTabsSlice";
import { AddIcon, CopyIcon, DeleteIcon } from "../../../../assets/icons";
import {
  dataTypes,
  formatTypes,
  locationTypes,
} from "../../../../utils/constant/requestTypes";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import styles from "./pathsubtabparameters.module.scss";

const PathSubTabParameters = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();
  const parametersArr =
    "parameters" in paths[pathName][methodName]
      ? paths[pathName][methodName].parameters
      : [];
  return (
    <div className={styles.parameterContainer}>
      {parametersArr.length > 0 ? (
        parametersArr.map((params: any, i: number) => (
          <>
            <div className={styles["button-container"]}>
              <div>
                <span style={{ marginRight: "8px" }}>Parameter:</span>
                <span>{i > 0 ? "newParam" : `${params?.name}`}</span>
              </div>
              <div>
                <button
                  title="Add"
                  onClick={() => {
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [...parametersArr, DEFAULT_PARAM_OBJ],
                      })
                    );
                  }}
                >
                  <AddIcon fill="#FFFFFF" width="16px" height="16px" />
                </button>
                <button title="Duplicate" onClick={() => {}}>
                  <CopyIcon fill="#FFFFFF" width="16px" height="16px" />
                </button>
                <button
                  title="Delete"
                  onClick={() => {
                    const filteredParamsArr = parametersArr.filter(
                      (el: any, index: any) => index !== i
                    );
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [...filteredParamsArr],
                      })
                    );
                  }}
                >
                  <DeleteIcon fill="#FFFFFF" width="16px" height="16px" />
                </button>
              </div>
            </div>
            <div className={styles.inputParamName}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Parameter Name",
                  name: "parameters.name",
                  value: params?.name || "",
                  onChange: (event) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      name: event.target.value,
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  },
                  type: "text",
                }}
                top={true}
              />
            </div>
            <div className={styles.inputDescription}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Parameter Description",
                  name: "parameters.description",
                  value: params?.description || "",
                  onChange: (event) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      description: event.target.value,
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  },
                  type: "text",
                }}
                top
              />
            </div>
            <div className={styles.twoItemGrid}>
              <DropDown
                optionList={locationTypes.map((x) => ({
                  label: x,
                  key: x,
                  //prev: data?.key,
                  name: "parameters.in",
                }))}
                label="Location"
                value={params?.in || ""}
                onChange={(selectedOption) => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    in: selectedOption.key,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                className={styles.dropdownLocation}
              />
              <DropDown
                optionList={dataTypes.map((x) => ({
                  label: x,
                  key: x,
                  //prev: data?.key,
                  name: "parameters.type",
                }))}
                label="Data Type"
                value={params?.schema?.type || ""}
                onChange={(selectedOption) => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    schema: {
                      ...parametersArr[i].schema,
                      type: selectedOption.key,
                    },
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                className={styles.dropdownType}
              />
            </div>
            <div className={styles.twoItemGrid}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Default Value",
                  name: "parameters.default",
                  value: params?.default || "",
                  onChange: (event) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      default: event.target.value,
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  },
                  type: "text",
                }}
                top={true}
                className={styles.inputDefault}
              />
              <div className={styles.autoComplete}>
                <DropDown
                  optionList={formatTypes.map((x) => ({
                    label: x,
                    key: x,
                    //prev: data?.key,
                    name: "parameters.type",
                  }))}
                  label="Data Type"
                  value={params?.schema?.format || ""}
                  onChange={(selectedOption) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      schema: {
                        ...parametersArr[i].schema,
                        format: selectedOption.key,
                      },
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  }}
                  className={styles.dropdownType}
                />
              </div>
            </div>
            <div className={styles.threeItemGrid}>
              <Checkbox
                value="Min.Exclusive"
                color="info"
                checked={params?.minRequired}
                onChange={() => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    minRequired: !params.minRequired,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                size="sm"
              />
              <Checkbox
                value="Max. Exclusive"
                color="info"
                checked={params?.maxRequired}
                onChange={() => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    maxRequired: !params.maxRequired,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                size="sm"
              />
              <label htmlFor="minInput">Min Length </label>
              <input
                id="minInput"
                type="number"
                name={`parameters.minLen.${i}`}
                value={params?.minLength || 0}
                onChange={(event) => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    minLength: event?.target.value,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                min={0}
                max={100}
                step={1}
              />
              <label htmlFor="maxInput">Max Length </label>
              <input
                id="maxInput"
                type="number"
                name={`parameters.maxLen.${i}`}
                value={params?.maxLength || 0}
                onChange={(event) => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    maxLength: event?.target.value,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                }}
                min={0}
                max={100}
                step={1}
              />
            </div>

            <InputWithMovingLabel
              inputProps={{
                label: "Pattern",
                name: "parameters.pattern",
                value: params?.pattern || "",
                onChange: (event) => {
                  const updatedObjAtIndex = {
                    ...parametersArr[i],
                    pattern: event?.target.value,
                  };
                  dispatch(
                    updatePath({
                      pathName,
                      methodName,
                      methodKey: "parameters",
                      data: [
                        ...parametersArr.slice(0, i),
                        updatedObjAtIndex,
                        ...parametersArr.slice(i + 1, parametersArr.length),
                      ],
                    })
                  );
                },
                type: "text",
              }}
              top
              className={styles["mb-4"]}
            />

            <div className={styles.threeItemGrid}>
              <div>
                <Button
                  children="Add Enum"
                  size="md"
                  variant="contained"
                  round="round"
                  color="success"
                  onClick={() => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      schema: {
                        ...parametersArr[i].schema,
                        enum: [
                          ...parametersArr[i].schema.items.enum,
                          "newEnumValue",
                        ],
                      },
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  }}
                  className={styles["mb-2"]}
                />
              </div>
              <div>
                <label htmlFor="maxInput">Multiple Of </label>
                <input
                  id="multipleOf"
                  type="number"
                  name={`parameters.multiOf.${i}`}
                  value={params?.multiOf || 0}
                  onChange={(event) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      multiOf: event.target.value,
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  }}
                  min={0}
                  max={100}
                  step={1}
                />
              </div>
              <div>
                <Checkbox
                  value="Unique Items"
                  color="info"
                  defaultChecked={params?.uniqueItems}
                  onChange={(event) => {
                    const updatedObjAtIndex = {
                      ...parametersArr[i],
                      uniqueItems: !params.uniqueItems,
                    };
                    dispatch(
                      updatePath({
                        pathName,
                        methodName,
                        methodKey: "parameters",
                        data: [
                          ...parametersArr.slice(0, i),
                          updatedObjAtIndex,
                          ...parametersArr.slice(i + 1, parametersArr.length),
                        ],
                      })
                    );
                  }}
                  size="sm"
                />
              </div>
            </div>

            <div>
              {(params.schema?.items.enum ?? []).length > 0 &&
                params.schema.items.enum.map(
                  (enumValue: any, enumIndex: any) => (
                    <div className={styles["enum-array"]}>
                      <span
                        onClick={() => {
                          const updatedObjAtIndex = {
                            ...parametersArr[i],
                            schema: {
                              ...parametersArr[i].schema.items,
                              enum: [
                                ...parametersArr[i].schema.items.enum,
                                "newEnumValue",
                              ],
                            },
                          };
                          dispatch(
                            updatePath({
                              pathName,
                              methodName,
                              methodKey: "parameters",
                              data: [
                                ...parametersArr.slice(0, i),
                                updatedObjAtIndex,
                                ...parametersArr.slice(
                                  i + 1,
                                  parametersArr.length
                                ),
                              ],
                            })
                          );
                        }}
                        style={{
                          margin: "10px 10px 0px 0px",
                        }}
                      >
                        <AddIcon fill="black" />
                      </span>
                      <span
                        onClick={() => {
                          const filteredEnumArr =
                            params.schema.items.enum.filter(
                              (el: any, idx: any) => idx !== enumIndex
                            );
                          const updatedObjAtIndex = {
                            ...parametersArr[i],
                            schema: {
                              ...parametersArr[i].schema,
                              enum: [...filteredEnumArr],
                            },
                          };
                          dispatch(
                            updatePath({
                              pathName,
                              methodName,
                              methodKey: "parameters",
                              data: [
                                ...parametersArr.slice(0, i),
                                updatedObjAtIndex,
                                ...parametersArr.slice(
                                  i + 1,
                                  parametersArr.length
                                ),
                              ],
                            })
                          );
                        }}
                        style={{
                          margin: "10px 10px 0px 0px",
                        }}
                      >
                        <DeleteIcon width="20" height="20" fill="black" />
                      </span>
                      <InputWithMovingLabel
                        key={enumIndex}
                        inputProps={{
                          label: "Enum Value",
                          name: `parameters.enum.${enumIndex}`,
                          value: i > 0 ? "" : enumValue,
                          onChange: (event) => {
                            const enumArray = params.schema?.items.enum ?? [];
                            const updatedEnumArr = [
                              ...enumArray.slice(0, enumIndex),
                              event.target.value,
                              ...enumArray.slice(
                                enumIndex + 1,
                                enumArray.length
                              ),
                            ];
                            const updatedObjAtIndex = {
                              ...parametersArr[i],
                              items: {
                                ...parametersArr[i].schema.items,
                                enum: [...updatedEnumArr],
                              },
                            };
                            dispatch(
                              updatePath({
                                pathName,
                                methodName,
                                methodKey: "parameters",
                                data: [
                                  ...parametersArr.slice(0, i),
                                  updatedObjAtIndex,
                                  ...parametersArr.slice(
                                    i + 1,
                                    parametersArr.length
                                  ),
                                ],
                              })
                            );
                          },
                          type: "text",
                          className: "enum-input__inner",
                        }}
                        top
                        className="mb-2 enum-input__outer"
                      />
                    </div>
                  )
                )}
            </div>

            <hr className={styles.horLine}></hr>
          </>
        ))
      ) : (
        <CreateParam pathName={pathName} methodName={methodName} />
      )}
    </div>
  );
};

export default PathSubTabParameters;
