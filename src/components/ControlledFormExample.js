import React, { useState } from 'react';

const ControlledFormExample = () => {
  // Define state variables to store form data
  // useState is a react hook, is essential in creating and managing state in a React functional component
  const [inputValue, setInputValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectValue, setSelectValue] = useState('');
  const [submittedValues, setSubmittedValues] = useState({});

  // Event handler for input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler for text area changes
  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  // Event handler for checkbox changes
  const handleCheckboxChange = (e) => {
    setCheckboxValue(e.target.checked);
  };

  // Event handler for select input changes
  const handleSelectChange = (e) => {
    setSelectValue(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the submitted values (for example, update state)
    setSubmittedValues({
      inputValue,
      textAreaValue,
      checkboxValue,
      selectValue,
    });
  };

  return (
    <div>
      <h2>Controlled Form Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled input field */}
        <label>
          Enter something:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {/* Controlled text area */}
        <label>
          Enter a paragraph:
          <textarea
            value={textAreaValue}
            onChange={handleTextAreaChange}
          />
        </label>
        <br />

        {/* Controlled checkbox */}
        <label>
          Agree to terms:
          <input
            type="checkbox"
            checked={checkboxValue}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        {/* Controlled select input */}
        <label>
          Choose an option:
          <select value={selectValue} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />

        {/* Display the submitted values */}
        <p>Submitted Values:</p>
		// pre formatted content, HTML element
		// JSON.stringify function to convert submittedValues to JSON format, null to 
		// get everything and 2 is defining the indentation space
        <pre>{JSON.stringify(submittedValues, null, 2)}</pre>

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledFormExample;
