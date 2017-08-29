import React from "react";
import ReactDOM from "react-dom";

import Root from "app/Root";
import AdminRoot from "app/AdminRoot";

const $root = document.getElementById("root");
const $adminroot = document.getElementById("adminroot");

ReactDOM.render(<Root/>, $root);
ReactDOM.render(<AdminRoot/>, $adminroot);
