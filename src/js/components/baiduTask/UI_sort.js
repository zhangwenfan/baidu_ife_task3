/**
 * Created by Administrator on 2017/7/1.
 */
import React from "react";
/* import your css modules styles for the component */
import styles from "../../../css/UI_sort.css";
import Navi from "./Navi";

export default class UI_sort extends React.Component {

  constructor() {
    super();
    this.state = {
      students: [
        {name: "小红", yuwen: 90, shuxue: 60, waiyu: 90},
        {name: "小明", yuwen: 80, shuxue: 90, waiyu: 70},
        {name: "小亮", yuwen: 60, shuxue: 100, waiyu: 70},
      ],
      sort_name: false,
      sort_yuwen: false,
      sort_shuxue: false,
      sort_waiyu: false,
    }
  }

  sortData(e) {
    const data = this.state.students;
    const type = e.target.id;
    if (type === "name") {
      if (!this.state.sort_name) {
        data.sort((a, b) => {
          return a.name - b.name;
        });
      } else {
        data.sort((a, b) => {
          return b.name - a.name
        });
      }
      this.setState({students: data, sort_name: !this.state.sort_name});
    } else if (type === "yuwen") {
      if (!this.state.sort_yuwen) {
        data.sort((a, b) => {
          return a.yuwen - b.yuwen;
        });
      } else {
        data.sort((a, b) => {
          return b.yuwen - a.yuwen;
        });
      }
      this.setState({students: data, sort_yuwen: !this.state.sort_yuwen});
    } else if (type === "shuxue") {
      if (!this.state.sort_shuxue) {
        data.sort((a, b) => {
          return a.shuxue - b.shuxue;
        });
      } else {
        data.sort((a, b) => {
          return b.shuxue - a.shuxue;
        });
      }
      this.setState({students: data, sort_shuxue: !this.state.sort_shuxue});
    } else if (type === "waiyu") {
      if (!this.state.sort_waiyu) {
        data.sort((a, b) => {
          return a.waiyu - b.waiyu;
        });
      } else {
        data.sort((a, b) => {
          return b.waiyu - a.waiyu;
        });
      }
      this.setState({students: data, sort_waiyu: !this.state.sort_waiyu});
    }
  }

  render() {
    const data = this.state.students.map((s) => {
      return (
        <tr key={s.name}>
          <td>{s.name}</td>
          <td>{s.yuwen}</td>
          <td>{s.shuxue}</td>
          <td>{s.waiyu}</td>
        </tr>
      )
    });
    return (
      <div>
        <Navi />
        <div>
          <table className="table">
            <thead className="thead">
            <tr className="tr">
              <td>
                姓名<button id="name" onClick={this.sortData.bind(this)}>sort</button>
              </td>
              <td>
                语文<button id="yuwen" onClick={this.sortData.bind(this)}>sort</button>
              </td>
              <td>
                数学<button id="shuxue" onClick={this.sortData.bind(this)}>sort</button>
              </td>
              <td>
                外语<button id="waiyu" onClick={this.sortData.bind(this)}>sort</button>
              </td>
            </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}