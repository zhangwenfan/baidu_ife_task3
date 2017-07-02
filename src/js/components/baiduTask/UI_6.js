/**
 * Created by Administrator on 2017/7/1.
 */
import React from "react";
/* import your css modules styles for the component */
import styles from "../../../css/UI_6.css";
import Navi from "./Navi";

export default class Form_2 extends React.Component {

  constructor() {
    super();
    this.state = {
      student: "hidden",
      noStudent: "hidden",
      hz: "show",
      bj: "hidden",
    }
  }

  close(e) {
    console.log(e.target.id)
    // if (e.target.id === "floatWindow") {
    //   console.log("window")
    // } else {
    //   console.log("ok")
    // }
  }

  render() {
    return (
      <div>
        <Navi />
        <div id="bk" className="bk" onClick={this.close.bind(this)}>
          <div id="floatWindow" className="floatWindow" onClick={this.close.bind(this)}>
            <span className="window">aaaa</span>
          </div>
        </div>
      </div>
    )
  }
}