import React, { Component } from "react";

class UpdatingExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  shouldComponentUpdate() {
    return true; //change this to false and see the effect
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 3000);
  }
  getSnapshotBeforeUpdate(props, state) {
    document.getElementById("div1").innerHTML =
      "Before the update, the favorite was " + state.favoritecolor;
    return state.favoritecolor; //to remove the warning
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default UpdatingExample;

//If you prefer hooks then this will be the updated version of the code

/*
import React, { useState, useEffect, useRef } from 'react';

const UpdatingExample = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);

  useEffect(() => {
    const div1 = div1Ref.current;
    const div2 = div2Ref.current;

    // Simulate componentDidMount
    setTimeout(() => {
      setFavoriteColor("yellow");
    }, 3000);

    // Simulate componentDidUpdate
    div2.innerHTML = "The updated favorite is " + favoriteColor;

    // Simulate componentWillUnmount
    return () => {
      div1.innerHTML = "Before the update, the favorite was " + favoriteColor;
    };
  }, [favoriteColor]); // Include specific dependencies to watch for changes

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <div ref={div1Ref}></div>
      <div ref={div2Ref}></div>
    </div>
  );
};

export default UpdatingExample;


*/
