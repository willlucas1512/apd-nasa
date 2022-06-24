import React from "react";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";
import { Detail, List } from "../../pages";

function Routes() {
  return (
    <Switch>
      <Route exact path="/list" component={List} />
      <Route exact path="/detail" component={Detail} />
      <Redirect from="/" to="/list" />
    </Switch>
  );
}

export default withRouter(Routes);
