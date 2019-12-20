import React, { Component } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import EnginesFilter from "./enginesfilter";
import CapacityFilter from "./capacityfilter";
import ResetFilters from "./resetfilters";

import { getForklifts } from "../services/fakeForkliftsService";
import { getEngTypes } from "../services/fakeEngTypeFilterService";
import { getCapacityFilters } from "../services/fakeCapacityFilterService";

import "typeface-roboto";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

class Forklifts extends Component {
  state = {
    forklifts: []
  };

  componentDidMount() {
    this.setState({
      forklifts: getForklifts(),
      engTypesFilter: getEngTypes(),
      capacityFilter: getCapacityFilters()
    });
  }

  handleResetFilters = () => {
    console.log("Been Reset");

    this.setState({
      selectedEngine: undefined,
      selectedCapacityFilter: undefined
    });
  };

  handleCapFilter = capfilter => {
    console.log(
      "UU",
      capfilter.capFilter,
      " ",
      this.state.selectedCapacityFilter
    );
    this.setState({ selectedCapacityFilter: capfilter });
  };

  handleEngineSel = engine => {
    console.log("ZZ", engine.name);
    this.setState({ selectedEngine: engine });
  };

  filterModels(models) {
    /* filter for capacity - then engtype */

    const mseng = this.state.selectedEngine
      ? models.filter(m => m.engType === this.state.selectedEngine.name)
      : models;

    const mscap = this.state.selectedCapacityFilter
      ? mseng.filter(
          m => m.capacity === this.state.selectedCapacityFilter.capFilter
        )
      : mseng;

    /*const ms = models.map(model => model);*/

    /*console.log("MSENG", mseng);*/

    return mscap;
  }

  filterEng(forklifts) {
    var g = [];

    if (!this.state.selectedEngine) {
      if (!this.state.selectedCapacityFilter) return forklifts;
    }

    /* if any filters set - need to create a filtered clone */
    /* filter values.models within each range */

    Object.entries(forklifts).map(
      ([key, values]) =>
        (g[key] = {
          range: values.range,
          models: this.filterModels(values.models)
        })
    );
    console.log("TTT", this.state.selectedEngine, " ", g);

    /* remove any ranges that have zero models meeting the criteria */
    const tt = g.filter(x => x.models.length > 0);

    return tt;
  }

  render() {
    const t = this.filterEng(this.state.forklifts);
    console.log("LL", t);

    const { length: count } = this.state.forklifts;
    /*
    Object.entries(this.state.forklifts).map(([key, values]) =>
      values.models.map(v => console.log(v.modelName, v.engType, v.capacity))
    );*/

    if (count === 0) return <p>There are no forklifts in the database</p>;

    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="h2">Forklifts</Typography>

            <Typography variant="subtitle1" gutterBottom>
              There are {count} forklift ranges
            </Typography>
            {this.state.selectedEngine ? (
              <h1>{this.state.selectedEngine.name}</h1>
            ) : null}
            {this.state.selectedCapacityFilter ? (
              <h1>{this.state.selectedCapacityFilter.capFilter}</h1>
            ) : null}

            {Object.entries(t).map(([key, values]) => (
              <React.Fragment key={key}>
                <Typography variant="h4">{values.range}</Typography>

                <ul>
                  {values.models.map(g => (
                    <li key={g._id}>
                      <Link to="/kbd">
                        <Button>{g.modelName}</Button>
                      </Link>{" "}
                      {g.capacity} {g.engType}
                      {this.state.selectedEngine &&
                        this.state.selectedEngine.name}
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={6}>
            <ResetFilters onResetFilters={this.handleResetFilters} />

            <EnginesFilter
              engines={this.state.engTypesFilter}
              onEngineSel={this.handleEngineSel}
              selectedEngine={this.selectedEngine}
            />

            <CapacityFilter
              capacityfilters={this.state.capacityFilter}
              onCapacityFilterSel={this.handleCapFilter}
              selectedCapacityFilter={this.selectedCapacityFilter}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Forklifts;
