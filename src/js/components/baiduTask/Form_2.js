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
      hidden_username: "必填, 4-12个字符",
      hidden_pw: "请输入密码",
      hidden_pwvali: "再次输入相同的密码",
      hidden_email: "请输入邮箱",
      hidden_cell: "请输入手机",

      mes_username: "hidden",
      mes_pw: "hidden",
      mes_pwvali: "hidden",
      mes_email: "hidden",
      mes_cell: "hidden",

      username: "",
      pw: "",
      pwvali: "",
      email: "",
      cell: "",

      suc_username: false,
      suc_pw: false,
      suc_pwvali: false,
      suc_email: false,
      suc_cell: false,

    }
  }

  validate(e) {
    const id = e.target.id;
    const state = this.state;
    if (id === "username") {
      if (state.username === "") {
        this.setState({hidden_username: "用户名不能为空", mes_username: "wrong", suc_username: false});
      } else if (state.username.length < 4) {
        this.setState({hidden_username: "用户名必须大于4位", mes_username: "wrong", suc_username: false});
      } else if (state.username.length > 16) {
        this.setState({hidden_username: "用户名必须小于16位", mes_username: "wrong", suc_username: false});
      } else {
        this.setState({hidden_username: "用户名可用", mes_username: "right", suc_username: true});
      }

    } else if (id === "pw") {
      if (state.pw === "") {
        this.setState({hidden_pw: "密码不能为空", mes_pw: "wrong", suc_pw: false});
      } else {
        this.setState({hidden_pw: "密码可用", mes_pw: "right", suc_pw: true});
      }

    } else if (id === "pwvali") {
      if (state.pwvali === "") {
        this.setState({hidden_pwvali: "不能为空", mes_pwvali: "wrong", suc_username: false});
      } else if (state.pwvali !== state.pw) {
        this.setState({hidden_pwvali: "重复密码必须相同", mes_pwvali: "wrong", suc_username: false});
      } else {
        this.setState({hidden_pwvali: "重输合法", mes_pwvali: "right", suc_username: false});
      }

    } else if (id === "email") {
      const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      const email = state.email;
      if (email === "") {
        this.setState({hidden_email: "email不能为空", mes_email: "wrong"});
      } else if (!reg.test(email)) {
        this.setState({hidden_email: "email不合法", mes_email: "wrong"});
      } else {
        this.setState({hidden_email: "email合法", mes_email: "right"});
      }

    } else if (id === "cell") {
      if (state.cell.length !== 11) {
        this.setState({hidden_cell: "手机合法长度为11", mes_cell: "wrong"});
      } else {
        this.setState({hidden_cell: "手机合法", mes_cell: "right"});
      }
    }
  }

  bindData(e) {
    const id = e.target.id;
    if (id === "username") {
      this.state.username = e.target.value;
    } else if (id === "pw") {
      this.state.pw = e.target.value;
    } else if (id === "pwvali") {
      this.state.pwvali = e.target.value;
    } else if (id === "email") {
      this.state.email = e.target.value;
    } else if (id === "cell") {
      this.state.cell = e.target.value;
    }
  }

  showText(e) {
    const id = e.target.id;
    if (id === "username" && this.state.mes_username === "hidden") {
      this.setState({mes_username: "show"});
    } else if (id === "pw" && this.state.mes_pw === "hidden") {
      this.setState({mes_pw: "show"});
    } else if (id === "pwvali" && this.state.mes_pwvali === "hidden") {
      this.setState({mes_pwvali: "show"});
    } else if (id === "email" && this.state.mes_email === "hidden") {
      this.setState({mes_email: "show"});
    } else if (id === "cell" && this.state.mes_cell === "hidden") {
      this.setState({mes_cell: "show"});
    }
  }

  submit() {
    const username = this.state.mes_username;
    const pw = this.state.mes_pw;
    const pwvali = this.state.mes_pwvali;
    const email = this.state.mes_email;
    const cell = this.state.mes_cell;
    if (username === "hidden" || username === "wrong") {
      window.alert("用户名不正确");
    } else if (pw === "hidden" || pw === "wrong") {
      window.alert("密码不能为空");
    } else if (pwvali === "hidden" || pwvali === "wrong") {
      window.alert("两次密码不相同");
    } else if (email === "hidden" || email === "wrong") {
      window.alert("email不正确");
    } else if (cell === "hidden" || cell === "wrong") {
      window.alert("手机不正确");
    } else {
      window.alert("suc");
    }
  }

  render() {
    return (
      <div>
        <Navi /><br />
        <b className="b">名称:</b>
        <input id="username" className="input"
               onFocus={this.showText.bind(this)}
               onChange={this.bindData.bind(this)}
               onBlur={this.validate.bind(this)}/><br />
        <span className={this.state.mes_username}>
          {this.state.hidden_username}
        </span><br /><br />

        <b className="b">密码:</b>
        <input id="pw" className="input" type="password"
               onFocus={this.showText.bind(this)}
               onChange={this.bindData.bind(this)}
               onBlur={this.validate.bind(this)}/><br />
        <span className={this.state.mes_pw}>
          {this.state.hidden_pw}
        </span><br /><br />

        <b className="b">验证密码:</b>
        <input id="pwvali" className="input" type="password"
               onFocus={this.showText.bind(this)}
               onChange={this.bindData.bind(this)}
               onBlur={this.validate.bind(this)}/><br />
        <span className={this.state.mes_pwvali}>
          {this.state.hidden_pwvali}
        </span><br /><br />

        <b className="b">邮箱:</b>
        <input id="email" className="input"
               onFocus={this.showText.bind(this)}
               onChange={this.bindData.bind(this)}
               onBlur={this.validate.bind(this)}/><br />
        <span className={this.state.mes_email}>
          {this.state.hidden_email}
        </span><br /><br />

        <b className="b">手机:</b>
        <input id="cell" className="input"
               onFocus={this.showText.bind(this)}
               onChange={this.bindData.bind(this)}
               onBlur={this.validate.bind(this)}/><br />
        <span className={this.state.mes_cell}>
          {this.state.hidden_cell}
        </span><br /><br />

        <button className="button"
                onClick={this.submit.bind(this)}>
          submit
        </button>
        <br />
      </div>
    )
  }
}