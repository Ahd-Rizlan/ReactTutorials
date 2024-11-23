import React, { Component } from 'react';

class MountingExample extends Component {
  // 1. constructor(): Initializing state and binding methods.
  constructor(props) {
    super(props);
    this.state = {
      message: 'Yellow',
	  gender: 'Unknown',
    };
    console.log('Value when in constructor:', this.state.message);
  }

  // 2. static getDerivedStateFromProps(): Used to update state based on props. 
  // Will override componentDidMount if trying to update the same state
  static getDerivedStateFromProps(props, state) {
    // Check if the content of the message prop has changed
    if (props.message !== state.message) {
      // Only update the state if the message prop has changed
      console.log('Updating state from props:', props.message);
      return {
        message: props.message,
      };
    }
    return null; // No state update needed
  }

  // 3. render(): Returns the component JSX to be rendered.
  render() {
    console.log('Rendering with message:', this.state.message);
    return (
      <div>
        <h1>Message: {this.state.message}</h1>
		<h2>Gender: {this.state.gender}</h2>
      </div>
    );
  }

  // 4. componentDidMount(): Invoked after the component is mounted. Ideal for side effects like data fetching.
  componentDidMount() {
    // Simulating data fetching (e.g., making an API call)
    setTimeout(() => {
      console.log('Data fetched! Updating component state.');
      this.setState({
        gender: 'Male',
      });
    }, 2000);
  }
}

export default MountingExample;


//If you prefer hooks then this will be the updated version of the code

/*

import React, { useState, useEffect } from 'react';

const MountingExample = (props) => {
  // Initializing state
  const [state, setState] = useState({
    message: 'Yellow',
    gender: 'Unknown',
  });

  // Simulating componentDidMount using useEffect
  useEffect(() => {
    // Simulating data fetching (e.g., making an API call)
    const fetchData = async () => {
      try {
        // Simulate an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Data fetched! Updating component state.');
        // Update state after data is fetched
        setState((prevState) => ({
          ...prevState,
          gender: 'Male',
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once (equivalent to componentDidMount)

  // Simulating getDerivedStateFromProps
  useEffect(() => {
    // Check if the content of the message prop has changed
    if (props.message !== state.message) {
      // Only update the state if the message prop has changed
      console.log('Updating state from props:', props.message);
      setState((prevState) => ({
        ...prevState,
        message: props.message,
      }));
    }
  }, [props.message]); // Run when the message prop changes

  // Rendering
  console.log('Rendering with message:', state.message);
  return (
    <div>
      <h1>Message: {state.message}</h1>
      <h2>Gender: {state.gender}</h2>
    </div>
  );
};

export default MountingExample;
*/