/**
 * Created by Administrator on 2017/7/1.
 */
import React from "react";
/* import your css modules styles for the component */
import styles from "../../../css/Form_2.css";
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

  bindData(e) {
    const id = e.target.id;
    if (id === "student") {
      this.setState({student: "show", noStudent: "hidden"});
    } else if (id === "noStudent") {
      this.setState({noStudent: "show", student: "hidden"});
    }
  }

  choseCity(e) {
    const val = e.target.value;
    if (val === "0") {
      this.setState({hz: "show", bj: "hidden"});
    } else if (val === "1") {
      this.setState({hz: "hidden", bj: "show"});
    }
  }

  render() {
    return (
      <div>
        <Navi /><br />
        <label>
          <input id="student" name="user_type" type="radio" onClick={this.bindData.bind(this)}/>在校生
        </label>
        <label>
          <input id="noStudent" name="user_type" type="radio" onClick={this.bindData.bind(this)}/>非在校生
        </label><br />

        <div className={this.state.student}>
          <select onChange={this.choseCity.bind(this)}>
            <option value="0">杭州</option>
            <option value="1">北京</option>
          </select>
          <select className={this.state.hz}>
            <option value="0">杭大</option>
            <option value="1">农大</option>
            <option value="2">浙大</option>
          </select>
          <select className={this.state.bj}>
            <option value="0">北大</option>
            <option value="1">清华</option>
          </select>
        </div>
        <div className={this.state.noStudent}>
          工作单位<input type="text" />
        </div>
      </div>
    )
  }
}