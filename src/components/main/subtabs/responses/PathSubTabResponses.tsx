import React, { useState } from "react";
import {
  Card,
  Button,
  InputWithMovingLabel,
} from "intelli-ui-components-library";
import { AddIcon } from "../../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import Responses from "./NoMediaTypes";
import { updatePath } from "../../mainTabsSlice";
import NoMediaTypes from "./NoMediaTypes";

const PathSubTabResponses = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const responses = paths[pathName][methodName].responses;
  const dispatch = useAppDispatch();
  const [showResponses, setShowResponses] = useState(true); // Initial visibility state

  console.log(responses);

  const toggleResponses = () => {
    setShowResponses((prevShowResponses) => !prevShowResponses);
  };

  return (
    <div className="mt-6">
      <div>
        {Object.entries(responses || {}).map(([key, value]) => {
          const responseDetails: any = value;
          const mediaTypes = responseDetails.content ?? {};
          return (
            <div key={key}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Status Code",
                  name: "response.statusCode",
                  value: key ?? "",
                  onChange: (e) => console.log(e),
                  type: "text",
                }}
                top
                className="mb-4"
              />
              <InputWithMovingLabel
                inputProps={{
                  label: "Description",
                  name: "response.description",
                  value: responseDetails.description ?? "",
                  onChange: (e) => console.log(e),
                  type: "text",
                }}
                top
                className="mb-4"
              />
              {mediaTypes.length === 0 ? (
                <NoMediaTypes />
              ) : (
                <div>
                  {Object.keys(mediaTypes).map((mediaTypeKey) => (
                    <InputWithMovingLabel
                      inputProps={{
                        label: "Media Type",
                        name: `response.mediaType.${mediaTypeKey}`,
                        value: mediaTypeKey ?? "",
                        onChange: (e) => console.log(e),
                        type: "text",
                      }}
                      top
                      className="mb-4"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PathSubTabResponses;
