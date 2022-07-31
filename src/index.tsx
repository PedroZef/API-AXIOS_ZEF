import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ModalProvider } from "./context/ModalContext";
import { UsersProvider } from "./context/UsersContext";

import "./styles/global.scss";

ReactDOM.render(
  <UsersProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </UsersProvider>,
  document.getElementById("root")
);
