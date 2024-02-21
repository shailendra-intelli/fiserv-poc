// @ts-nocheck
import React from "react";
import { Card, Button } from "intelli-ui-components-library";
import { AddIcon, DeleteIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  DEFAULT_Callback_OBJ,
  updatePath,
} from "./mainTabsSlice";


const CreateCallback = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const callbackState = useAppSelector((state) => state.main.callbacks);
  const dispatch = useAppDispatch();
  return (
    <>
      <Card round="round" style={{
        width: "100%"
      }}>
       <Card.CardHeader
          title="There are no callbacks defined."
          divider="dark"
        />
        <Card.CardAction>
          <div>
            <Button
              //   children="Create Parameter"
              size="md"
              variant="contained"
              round="round"
              color="primary"
              onClick={() => {
                dispatch(
                  updatePath({
                    pathName,
                    methodName,
                    methodKey: "callbacks",
                    data: {
                      ...paths[pathName][methodName].callbacks,
                      "newCallback" : DEFAULT_Callback_OBJ,
                    },
                  })
                );
              }}

              className="mb-2"  
              icon={<AddIcon />}
            >
              <span>
                <AddIcon />
              </span>
              Create Callbacks
            </Button>
          </div>
        </Card.CardAction>
      </Card>
    </>
  );
};

export default CreateCallback;