import React from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Forks = props => {
  const { forks, onForkSel, selectedFork } = props;

  return (
    <React.Fragment>
      <FormControl component="fieldset">
        <FormLabel component="legend">Forks</FormLabel>

        <RadioGroup
          aria-label="forks"
          name="forks"
          //value={value}
          //onChange={handleChange}
          row={true}
        >
          {forks.map(fork => (
            <FormControlLabel
              key={fork._id}
              value={fork.length}
              control={<Radio color="primary" />}
              label={fork.length}
              onChange={() => onForkSel(fork)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </React.Fragment>
  );
};

export default Forks;
