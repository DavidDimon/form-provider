import React from "react";
import { render } from "react-dom";

import { Home } from "scenes";

const renderApp = Component =>
  render(<Component />, document.getElementById("root"));

renderApp(Home);
