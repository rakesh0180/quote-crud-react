import React, { useState } from "react";
import EditQuote from "./EditQuote";
const QuotesItem = (props) => {
  const { id, name, body, removeQuote, editItem } = props;
  const [toggle, setToggle] = useState(false);

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure");
    if (confirmRemove) {
      removeQuote(id);
    }
  };
  /*
   both function have same so we can reuse the code by creating  another function
  const handleEdit = () => {
    //not of toggle is true
    const result = !toggle;
    setToggle(result);
    // setToggle(!toggle);one line code
  };

  const handleCancel = () => {
    setToggle(!toggle);
  };
 */
  const handleToggle = () => {
    // setToggle(!toggle);
    const result = !toggle;
    setToggle(result);
  };
  return (
    <div>
      {toggle ? (
        <div>
          <EditQuote
            id={id}
            name={name}
            body={body}
            editItem={editItem}
            handleToggle={handleToggle}
          />
          <button onClick={handleToggle}>cancel</button>
        </div>
      ) : (
        <div>
          <blockquote>
            {body} - <strong>{name}</strong>
          </blockquote>
          <br />
          <button onClick={handleToggle}>edit</button>
          {/* inline event
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
          or */}
          <button onClick={handleRemove}>remove</button>

          <br />
        </div>
      )}
    </div>
    //   A day without coding, A day get wasted.
  );
};
export default QuotesItem;
