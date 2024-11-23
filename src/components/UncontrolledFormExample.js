import React, { useRef } from 'react';

const UncontrolledFormExample = () => {
  // Create refs for form elements
  // useRef() is another react hook, allows you to reference the element outside of react data workflow, direact access
  const inputValueRef = useRef();
  const textAreaValueRef = useRef();
  const checkboxValueRef = useRef();
  const selectValueRef = useRef();

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Access form element values using refs
    const inputValue = inputValueRef.current.value;
    const textAreaValue = textAreaValueRef.current.value;
    const checkboxValue = checkboxValueRef.current.checked;
    const selectValue = selectValueRef.current.value;

    // Do something with the submitted values
    console.log('Submitted Values:', {
      inputValue,
      textAreaValue,
      checkboxValue,
      selectValue,
    });
  };

  return (
    <div>
      <h2>Uncontrolled Form Example</h2>
      <form onSubmit={handleSubmit}>
        {/* Uncontrolled input field using ref */}
        <label>
          Enter something:
          <input type="text" ref={inputValueRef} />
        </label>
        <br />

        {/* Uncontrolled text area using ref */}
        <label>
          Enter a paragraph:
          <textarea ref={textAreaValueRef} />
        </label>
        <br />

        {/* Uncontrolled checkbox using ref */}
        <label>
          Agree to terms:
          <input type="checkbox" ref={checkboxValueRef} />
        </label>
        <br />

        {/* Uncontrolled select input using ref */}
        <label>
          Choose an option:
          <select ref={selectValueRef}>
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormExample;
