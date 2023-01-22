import React from "react";

function Quotes({ quote }) {
  return (
    <div className="bg-teal-500 m-2 p-2 w-40 h-48 rounded-lg text-ellipsis overflow-hidden shadow-xl">
      <p></p>
      <p className="max-h-40 whitespace-pre-line truncate text-ellipsis overflow-hidden ">
        <span className="font-semibold">{quote.id + `. `}</span>
        <span>
        {`"` + quote.quote + `"`}
        </span>
      </p>
      <p className="italic font-bold">{quote.author}</p>
    </div>
  );
}

export default Quotes;
