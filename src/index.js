import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";
//import ReactGA from "react-ga4";
import GA4React from "ga-4-react";

const engine = new Styletron();
// const GA_MEASUREMENT_ID = "G-4BYRX7YQJG";
// ReactGA.initialize(GA_MEASUREMENT_ID);
// ReactGA.send("pageview");
const ga4react = new GA4React("G-986MMT705B");
ga4react.initialize().then().catch();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

try {
  setTimeout((_) => {
    const ga4react = new GA4React("G-986MMT705B");
    ga4react.initialize().catch((err) => console.error(err));
  }, 4000);
} catch (err) {
  console.error(err);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
