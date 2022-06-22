import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  addItem = (e) => {
    e.preventDefault();
    const value = e.target.item.value;
    this.setState(
      ({items}) => {return {items:[...items, value]}}
      // {
      //   let { items } = prevState;
      //   return [...items,value]
      // }
    );
    console.log(this.state.items);
  };

  render() {
    const lists = this.state.items.map((item, index) => (
      <li key={item + index}>{item}</li>
    ));
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input name="item" />
          <button type="submit">Add Item</button>
        </form>
        <ul>{lists}</ul>
      </div>
    );
  }
}
