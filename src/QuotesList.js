import React from "react";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
  const { quotes, removeQuote, editItem } = props;
  return (
    <div>
      {/* conditional rendering */}
      {quotes.length === 0 ? (
        <div>
          <h1>No quotes found</h1>
          <p>add your first Quote</p>
        </div>
      ) : (
        <div>
          <h1> My Quotes - {quotes.length}</h1>
          {/* passing each quote  */}
          {quotes.map((quote) => {
            return (
              <QuotesItem
                key={quote.id}
                {...quote}
                removeQuote={removeQuote}
                editItem={editItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
export default QuotesList;
