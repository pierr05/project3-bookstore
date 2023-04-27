import React, { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {

  const [books, setBooks] = useState([]);

useEffect(() => {
  const fetchBooks = async () => {
    const response = await fetch("https://api2.isbndb.com/books");
    const data = await response.json();
    setBooks(data.books);
  };
  fetchBooks();
},[]);

  return (
    <ApiContext.Provider value={{ books }}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
