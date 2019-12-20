import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import MastSizes from "./mastsizes";

const Masts = props => {
  const {
    masts,
    onMastSel,
    selectedMast,
    onMastSizeSel,
    selectedMastSize
  } = props;

  return (
    <React.Fragment>
      <h2>Mast Types</h2>

      {masts.map(mast => (
        <div key={mast._id}>
          <h4>{mast.masttype}</h4>

          <FormControl component="fieldset">
            <FormLabel component="legend">Mast Size</FormLabel>

            <RadioGroup
              aria-label="mastsize"
              name="mastsize"
              //value={value}
              //onChange={handleChange}
              //onClick={() => onMastSizeSel(mastsize)}
              row={false}
            >
              {mast.sizes.map(mastsize => (
                <FormControlLabel
                  key={mastsize._id}
                  value={mastsize.length}
                  control={<Radio color="primary" />}
                  label={mastsize.length}
                  onChange={() => onMastSizeSel(mastsize)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Masts;
