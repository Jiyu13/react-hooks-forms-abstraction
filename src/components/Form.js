import React, { useState } from "react";

function Form() {

  // 1. make an new state varibale (an object) to represent all the input fields
  const [formData, setFormData] = useState({
    firstName: "Johm",
    lastName: "Henry",
    admin: false, // 6. add one more input field
  })

  // // 2. update onChange handler and variable names(spread operator) 
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData, // formData is an object, so we need to copy all the key/value pairs
  //     firstName:event.target.value // we want to overwrite the lastName key with a new value
  //   })
  // }

  // function handleLastNameChange(event) {
  //   setFormData({...formData, lastName:event.target.value})
  // }
  
  // 4. write a generic handleChange function instead of writing separate handle function for each input
  function handleChange(event) {
    // name is the KEY in the formData object we're trying to update
    const name = event.target.name
    let value = event.target.value

    // 7/ validate input type: use `checked` property of checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.value
    }
    setFormData({
      ...formData,
      [name]: value
    })
  

  // 8. handle form submit
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
  }

}

  return (
    <form onSubmit={handleSubmit}>
      {/* 3. give each input a name attribute, access them as event.target.name */}
      <input name="firstName" type="text" onChange={handleChange} value={formData.firstName} /> 
      <input name="lastName" type="text" onChange={handleChange} value={formData.lastName} />

      {/* 5. add new input field, checkbox */}
      <input name="admin" type="checkbox" onChange={handleChange} value={formData.admin} /> 
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
