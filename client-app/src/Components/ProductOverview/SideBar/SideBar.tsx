import * as React from "react";
import { Component } from "react";

export default class AccordionExampleStyled extends Component {
  state = { activeIndex: 0 };

  render() {
    const { activeIndex } = this.state;

    return <p>Hello</p>;
  }
}
