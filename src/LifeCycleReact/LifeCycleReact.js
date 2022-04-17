import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("contructor");
  }
  // duoc goi khi component nay su dung tren DOM (giao dien cua app)
  static getDrivedStateFromProps(newProps, currentState) {
    console.log("getDrivedStateFromProps");
    return null;
  }

  //duoc goi khi setState hoac props
  shouldComponentUpdate(newProps, newState) {
    //return true thi chay tiep cac lifecycle con lai,
    //return false thi ko  chay tiep cac lifecycle con lai,
    return true;
  }

  render() {
    console.log('renderParent');
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number : {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        {this.state.number === 1?<ChildComponent/> : ''}
        {/* // <ChildComponent /> */}
      </div>
    );
  }

  //duoc goi sau render va chi goi 1 lan duy nhat (trang thai mounting), neu setState cung ko goi 1 lan nao nua
  componentDidMount() {
    console.log("componentDidMount");
  }

  //lan dau se khong goi, chi goi khi setState hoac thay doi props
  componentDidUpdate(prevProps,prevState) {
    console.log("componentDidUpdate");
  }
}
