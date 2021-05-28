import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import QuotesForm from "./QuotesForm";

const QuotesContainer = (props) => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    // console.log(localStorage.getItem("quotes") );
    // if it is true
    // console.log(localStorage.getItem("quotes") || []);
    //first item to add
    const result = JSON.parse(localStorage.getItem("quotes")) || [];
    setQuotes(result);
  }, []);

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes), [quotes]);
    //when ever quotes variable change call this function
  });

  //callback function
  //get quotes from child item QuotesForm
  const addQuotes = (quote) => {
    // console.log("container", quote);

    //spreading all the quote and adding end of array
    // const result = [...quotes, quote];

    //spreading all the quote and adding first of array
    const result = [quote, ...quotes];
    setQuotes(result);
  };

  const removeQuote = (id) => {
    console.log("container", id);
    //remove the match id
    const result = quotes.filter((quote) => {
      return quote.id !== id;
    });
    setQuotes(result);
    //after this useEffect hook executed
  };

  return (
    <div>
      <h3>QuoteContainer</h3>
      <QuotesList quotes={quotes} removeQuote={removeQuote} />
      <QuotesForm addQuotes={addQuotes} />
    </div>
  );
};
export default QuotesContainer;
