import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store, persistor} from "utils/store/store"
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import axios from "axios";

// axios.defaults.baseURL = "http://54.255.147.31/";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
