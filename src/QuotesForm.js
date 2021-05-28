import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const QuotesForm = (props) => {
  const { addQuotes } = props;
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // id: Number(new Date()),
      id: uuidv4(),
      name: name,
      body: body,
    };
    // console.log(formData);
    addQuotes(formData);

    // reset form
    setName("");
    setBody("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <h2>Add Quotes</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Body</label>
        <br />
        <textarea value={body} onChange={handleBodyChange} />
        <br />
        <input type="submit" value="save" />
      </form>
    </div>
  );
};
export default QuotesForm;
