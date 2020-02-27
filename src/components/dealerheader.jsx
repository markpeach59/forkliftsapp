import React, { Component } from "react";
import auth from "../services/authService";
import { getDealerDetail } from "../services/dealerService";
import "typeface-roboto";

class DealerHeader extends Component {
  state = {};

  async componentDidMount() {
    const user = auth.getCurrentUser();
    var headerlogo = "/img/logo.jpg";

    if (user && user.dealerId) {
      const { data: dealery } = await getDealerDetail(user.dealerId);

      //console.log("Dealer ", dealery);
      if (dealery.dealerlogo) headerlogo = dealery.dealerlogo;
    }

    this.setState({ user, headerlogo });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.user && (
          <React.Fragment>
            <img
              src={this.state.headerlogo}
              alt=""
              style={{ paddingTop: 60 }}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default DealerHeader;
