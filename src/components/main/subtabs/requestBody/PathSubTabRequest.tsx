import { Checkbox, InputWithMovingLabel } from "intelli-ui-components-library";
import { updatePath } from "../../mainTabsSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

const PathSubTabRequest = ({ pathName, methodName }: any) => {
  const paths = useAppSelector((state) => state.main.paths);
  const requestBody = paths[pathName][methodName].requestBody ?? {};
  const dispatch = useAppDispatch();

  return (
    <div className="mt-6">
      <InputWithMovingLabel
        inputProps={{
          label: "Description",
          name: "requestBody.description",
          value: requestBody?.description ?? "",
          onChange: (event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "requestBody",
                data: {
                  ...requestBody,
                  description: event.target.value,
                },
              })
            );
          },
          type: "text",
        }}
        top
      />
      <div className="w-fit my-4">
        <Checkbox
          checked={requestBody?.required ?? false}
          value="Required"
          onChange={(event) => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "requestBody",
                data: {
                  ...requestBody,
                  required: !requestBody?.required,
                },
              })
            );
          }}
        />
      </div>
      <div>
        {Object.entries(requestBody?.content || {}).map(([key, value]) => (
          <InputWithMovingLabel
            inputProps={{
              label: "Media-Type",
              name: "requestBody.description",
              value: key ?? "",
              onChange: (e) => console.log(e),
              type: "text",
            }}
            top
            className="mb-4"
          />
        ))}
        <button
          onClick={() => {
            dispatch(
              updatePath({
                pathName,
                methodName,
                methodKey: "requestBody",
                data: {
                  ...requestBody,
                  content: {
                    "/": {
                      schema: {},
                    },
                    "change/me": {
                      schema: {},
                    },
                  },
                },
              })
            );
          }}
        >
          Add Media
        </button>
      </div>
    </div>
  );
};
export default PathSubTabRequest;
