import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./components/redux/store/Store";
import Layout from "./components/public/Layout";
import Navi from "./components/baiduTask/Navi";
import Form1 from "./components/baiduTask/Form_1";
import Form2 from "./components/baiduTask/Form_2";
import Form3 from "./components/baiduTask/Form_3";
import UI6 from "./components/baiduTask/UI_6";
import UISort from "./components/baiduTask/UI_sort";


const app = document.getElementById("app");
window.baseUrl = "http://localhost:8080/firAjax";

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Navi}/>
        <Route path="/From1" component={Form1}/>
        <Route path="/From2" component={Form2}/>
        <Route path="/From3" component={Form3}/>
        <Route path="/UI6" component={UI6}/>
        <Route path="/UISort" component={UISort}/>
        {/*<Route path="/gfs/:name" component={Person}/>*/}
        {/*<Route path="/users/:username" component={User}/>*/}
        {/*<Route path="/testFlux" component={Gfs}/>*/}
        {/*<Route path="/testRedux" component={TestRedux}/>*/}
      </Switch>
    </div>
  </HashRouter>
  </Provider>, app);




