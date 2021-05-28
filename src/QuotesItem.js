import React from "react";
const QuotesItem = (props) => {
  const { id, name, quote, removeQuote } = props;

  return (
    <div>
      <blockquote>
        {quote}-{name}
      </blockquote>
      <br />
      <button>edit</button>
      <button
        onClick={() => {
          const confirm = window.confirm("Are you sure");
          if (confirm) {
            removeQuote(id);
          }
        }}
      >
        remove
      </button>
      <br />
    </div>
    //   A day without coding, A day get wasted.
  );
};
export default QuotesItem;
