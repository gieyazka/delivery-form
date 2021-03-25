import "./App.css";
import Form from "./component/form.js";
import Status from "./component/status.js";
import Test from "./component/test.js";

import RequestTable from "./component/requestTable.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router basename="/#/">
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/status/:id/:status" component={Status} />
          <Route path="/request" component={RequestTable} />
          <Route path="/test" component={Test} />

          <Route path="/*" component={Form} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
