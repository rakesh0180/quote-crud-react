import React, { useState, useEffect } from "react";
import QuotesList from "./QuotesList";
import AddQuote from "./AddQuote";

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
  const addQuote = (quote) => {
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

  const editItem = (quote) => {
    // console.log("edit", quote);
    const result = quotes.map((q) => {
      if (q.id === quote.id) {
        //
        console.log("spread1", { ...q, ...quote });
        // edit quote and return the quote to screen
        return { ...q, ...quote };
      } else {
        console.log("spread2", { ...q });
        return { ...q };
      }
    });
    setQuotes(result);
  };

  return (
    <div>
      <h3>QuoteContainer</h3>
      <QuotesList
        quotes={quotes}
        removeQuote={removeQuote}
        editItem={editItem}
      />
      <AddQuote addQuote={addQuote} />
    </div>
  );
};
export default QuotesContainer;
