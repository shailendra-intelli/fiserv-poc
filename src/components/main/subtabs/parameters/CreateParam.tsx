// @ts-nocheck
import React from "react";
import { Card, Button } from "intelli-ui-components-library";
import { AddIcon, DeleteIcon } from "../../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  DEFAULT_PARAM_OBJ,
  updatePath,
} from "../../../../store/reducers/mainTabsSlice";

const CreateParam = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();
  const parametersArr =
    "parameters" in paths[pathName][methodName]
      ? paths[pathName][methodName].parameters
      : [];

  return (
    <>
      <Card
        round="round"
        style={{
          width: "100%",
        }}
      >
        <Card.CardHeader
          title="There are no parameters defined for this operation."
          divider="dark"
        />
        <Card.CardAction>
          <div>
            <Button
              size="md"
              variant="contained"
              round="round"
              color="primary"
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
              className="mb-2"
              icon={<AddIcon />}
            >
              <span>
                <AddIcon />
              </span>
              Create Parameters
            </Button>
          </div>
        </Card.CardAction>
      </Card>
    </>
  );
};

export default CreateParam;
