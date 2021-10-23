import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { interval: null, timer: 0 };
  }

  componentDidMount(){
      this.setState({
          interval : setInterval(() => {
             this.setState ({ timer : this.state.timer +1}); 
          }, 1000)
      }

      )
  }

componentDidUpdate(){

}
componentWillUnmount(){
    clearInterval(this.state.interval)
}
  todos = [
    "Raed Rdhaouni",
    "Hello I have 27 years old I am a student",
    "./image/mypic.jpg",
    "student",
  ];


  render() {
    return (
      <div>
        <ul className="list">
          {this.todos.map((todo, i) => (
            <li key={i}> {todo} </li>
          ))}
        </ul>
        <h4> {this.state.timer} </h4>
      </div>
    );
  }
}
export default Profile;
