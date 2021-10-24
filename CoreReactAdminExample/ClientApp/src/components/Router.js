import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import AType from "Routes/AType";
import BType from "Routes/BType";

export default () => (
    <Router>
       <Route path="/" exact component={Home} />
    </Router>
);