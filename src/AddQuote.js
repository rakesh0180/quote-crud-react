import React from "react";
import QuotesForm from "./QuotesForm";

const AddQuote = (props) => {
  const { addQuote } = props;

  //instead of passing addQuote to QuoteForm
  // we take formSubmission pass to QuotesForm
  //child to parent
  const formSubmission = (formData) => {
    // console.log("AddQuote", formData);
    addQuote(formData);
  };

  return (
    <div>
      {/* <h2>Add Quote</h2> */}
      <h2>Add Quotes</h2>
      <QuotesForm formSubmission={formSubmission} />
    </div>
  );
};
export default AddQuote;
