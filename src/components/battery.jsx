import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Divider from "@material-ui/core/Divider";

const Batterys = props => {
  const { batterys, onBatterySel, selectedBattery } = props;

  var aa = "X";
  if (selectedBattery) {
    aa = selectedBattery.batterytype;
  }

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Batterys</FormLabel>

        <RadioGroup aria-label="batterys" name="batterys" row={true}>
          {batterys.map(battery => (
            <FormControlLabel
              key={battery._id}
              value={battery.batterytype}
              control={<Radio color="primary" />}
              label={battery.batterytype}
              onChange={() => onBatterySel(battery)}
              checked={aa === battery.batterytype}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Divider />
      <br />
    </React.Fragment>
  );
};

export default Batterys;
