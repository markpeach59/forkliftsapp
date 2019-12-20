import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const SideShift = props => {
  const { sideshifts, onSideShiftSel, selectedSideShift } = props;

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Side Shift</FormLabel>

        <RadioGroup
          aria-label="sideshift"
          name="sideshift"
          //value={value}
          //onChange={handleChange}
          //onChange={() => onSideShiftSel(sideshift)}
          row={true}
        >
          {sideshifts.map(sideshift => (
            <FormControlLabel
              key={sideshift._id}
              value={sideshift.type}
              control={<Radio color="primary" />}
              label={sideshift.type}
              //checked ={selectedSideShift === {sideshift.type}}
              onChange={() => onSideShiftSel(sideshift)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default SideShift;
