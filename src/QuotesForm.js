import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const QuotesForm = (props) => {
  // const { addQuote } = props;
  //alias name
  const {
    formSubmission,
    id: slNo,
    name: author,
    body: quote,
    handleToggle,
  } = props;
  //if id not their then generate
  const [id, setId] = useState(slNo ? slNo : uuidv4());
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      // id: Number(new Date()),
      // id: uuidv4(),
      id: id,
      name: name,
      body: body,
    };

    // console.log(formData);
    // addQuote(formData);

    //invoke formSubmission pass formData
    formSubmission(formData);

    // reset form

    if (handleToggle) {
      //truthy value
      handleToggle();
    }
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
