import React, { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      name:''
    };
  }
  addItem = (e) => {
    e.preventDefault();
    const value = e.target.item.value;
    this.setState(
      ({items}) => {return {items:[...items, value]}}
      );
    // console.log(this.state.items);

    // clearing the value after form submission
    this.setState({name:''})
  };
  // to get the value of the input and assigning into the state
    getInputValue = (e) => {
      const value=e.target.value
      this.setState({name:value})
  }
// to remove items array
  removeItems = () => this.setState({ items: [] })
    
// to remove list item
  
  removeListItem = (index) => {
   
}
  render() {
    const lists = this.state.items.map((item, index) => (
      <li key={item + index}>{item} </li>
    ));
    return (
      <div>
        <form onSubmit={this.addItem}>
          <input name="item" value={this.state.name} onChange={this.getInputValue} />
          <button type="submit" >Add Item</button>
          <button type="reset" onClick={this.removeItems}>Reset</button>
        </form>
        <ul>{lists}</ul>
      </div>
    );
  }
}
