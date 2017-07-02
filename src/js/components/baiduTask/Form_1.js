/**
 * Created by Administrator on 2017/7/1.
 */
import React from "react";
/* import your css modules styles for the component */
import styles from "../../../css/Form_1.css";
import Navi from "./Navi";

export default class Gfs extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "plz input String with 4-16 characters",
      hidden: "",
      validateColor: ""
    }
  }

  validate() {
    if ("" === this.state.hidden) {
      this.setState({text: "it cannot be empty", validateColor: "wrong"})
    } else if (this.state.hidden.length < 4) {
      this.setState({text: "it must longer than 4", validateColor: "wrong"})
    } else if (this.state.hidden.length > 12) {
      this.setState({text: "it must shorter than 12", validateColor: "wrong"})
    } else {
      this.setState({text: "it's ok", validateColor: "right"})
    }
  }

  bindText(e) {
    this.state.hidden = e.target.value;
  }

  render() {
    return (
      <div>
        <Navi /><br />
        <b className="text">username:</b> <input className="input" onChange={this.bindText.bind(this)}/>
        <button className="button" onClick={this.validate.bind(this)}>validate</button><br />
        <span className={this.state.validateColor}>{this.state.text}</span>
      </div>
    )
  }
}