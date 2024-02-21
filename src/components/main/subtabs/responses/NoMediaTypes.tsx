// @ts-nocheck
import React from "react";
import { Card, Button } from "intelli-ui-components-library";
import { AddIcon } from "../../../../assets/icons";

const NoMediaTypes = () => {
  return (
    <Card
      round="round"
      style={{
        width: "100%",
      }}
    >
      <Card.CardHeader
        title="There are no media-types defined (they are optional)."
        divider="dark"
      />
      <Card.CardAction>
        <div>
          <Button
            size="md"
            variant="contained"
            round="round"
            color="primary"
            //   onClick={handleAdd}
            className="mb-2"
            icon={<AddIcon />}
          >
            <span>
              <AddIcon />
            </span>
            Create MediaType
          </Button>
        </div>
      </Card.CardAction>
    </Card>
  );
};

export default NoMediaTypes;
