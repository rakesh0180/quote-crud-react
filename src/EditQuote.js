import React from "react";
import QuotesForm from "./QuotesForm";
const EditQuote = (props) => {
  const { id, name, body, editItem, handleToggle } = props;

  const formSubmission = (formData) => {
    console.log("edit", formData);
    editItem(formData);
  };
  /*
 we can  declare cancel button hear
 then pass handleCancel through props or in quoteItem
 const handleCancel = () => {
    setToggle(!toggle);
  }; */
  return (
    <div>
      <h2> Edit quote</h2>
      <QuotesForm
        id={id}
        name={name}
        body={body}
        formSubmission={formSubmission}
        handleToggle={handleToggle}
      />
      <br />
      {/* <button onClick={handleCancel}>cancel</button> */}
    </div>
  );
};
export default EditQuote;
