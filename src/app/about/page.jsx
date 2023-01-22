import React from "react";
import Quotes from "./Quotes";

async function getQuotes() {
    const quotes = await fetch('https://dummyjson.com/quotes');

    if(!quotes.ok){
        throw new Error('Failed to fetch data');
    }

    return quotes.json();
}

async function About() {

    const data = await getQuotes();

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="pt-16 text-3xl font-bold">Test Call API</h1>

      <div className="flex justify-between flex-wrap">
      {data.quotes.map ((quote, index) => 
            <Quotes key={index} quote={quote}/>
      )}
      </div>

    </div>
  );
}

export default About;
