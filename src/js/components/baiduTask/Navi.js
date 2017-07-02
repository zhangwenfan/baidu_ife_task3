/**
 * Created by Administrator on 2017/7/1.
 */
import React from "react";
/* import your css modules styles for the component */
import styles from "../../../css/Navi.css";
import {Link} from "react-router-dom"

export default class Navi extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "plz input String with 4-16 characters",
      hidden: "",
      validateColor: ""
    }
  }

  render() {
    return (
      <div>
        <ul className="navi">
          <li className="li">
            <Link className="link" to="/From1">From_1</Link>
            <Link className="link" to="/From2">From_2</Link>
            <Link className="link" to="/From3">From_3</Link>
            {/*<Link className="link" to="/UI6">UI6</Link>*/}
            <Link className="link" to="/UISort">UI_Sort</Link>
          </li>
        </ul>
      </div>
    )
  }
}