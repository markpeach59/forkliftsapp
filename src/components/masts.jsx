import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Divider from "@material-ui/core/Divider";

const Masts = props => {
  const {
    masts,

    selectedMast,
    onMastSizeSel,
    selectedMastSize
  } = props;

  var aa = "";
  if (selectedMastSize) {
    aa = selectedMast + " " + selectedMastSize.mastlength;
    console.log("AAA", aa);
  }

  return (
    <React.Fragment>
      {masts.map(mast => (
        <div key={mast._id}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{mast.masttype}</FormLabel>

            <RadioGroup aria-label="mastsize" name="mastsize" row={false}>
              {mast.mastsizes.map(mastsize => {
                return mastsize.closedheight ? (
                  <FormControlLabel
                    key={mastsize._id}
                    value={mastsize.mastlength}
                    control={<Radio color="primary" />}
                    label={
                      mastsize.mastlength +
                      "mm,  " +
                      mastsize.closedheight +
                      "mm"
                    }
                    onChange={() => onMastSizeSel(mastsize, mast.masttype)}
                    checked={aa === mast.masttype + " " + mastsize.mastlength}
                  />
                ) : (
                  <FormControlLabel
                    key={mastsize._id}
                    value={mastsize.mastlength}
                    control={<Radio color="primary" />}
                    label={mastsize.mastlength + "mm"}
                    onChange={() => onMastSizeSel(mastsize, mast.masttype)}
                    checked={aa === mast.masttype + " " + mastsize.mastlength}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
      <Divider />
      <br />
    </React.Fragment>
  );
};

export default Masts;
