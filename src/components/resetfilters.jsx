import React from "react";
import Button from "@material-ui/core/Button";
import "typeface-roboto";

const ResetFilters = props => {
  const { onResetFilters } = props;

  return (
    <React.Fragment>
      <Button onClick={() => onResetFilters()}>Reset Filters</Button>
    </React.Fragment>
  );
};

export default ResetFilters;
