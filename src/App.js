import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@material-ui/core";

import { Header, Card } from "./components/";

import "./scss/app.scss";

const transformTitle = (title) => {
   let splitStr = title.toLowerCase().split(" ");
   for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }

   // eslint-disable-next-line no-control-regex
   let newString = splitStr.join(" ").replace(/[^\x00-\x7F]/g, "");

   return newString;
};

function App() {
   const [books, setBooks] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
      setIsLoaded(false);
      axios.get("/books").then(({ data }) => {
         setBooks(data);
         setIsLoaded(true);
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const onAddBook = (bookObj) => {
      const newBook = { ...bookObj, id: books.length };
      newBook.title = transformTitle(newBook.title);

      const newBooks = [...books, newBook];

      setBooks(newBooks);
   };

   const onEditBook = (obj) => {
      obj.title = transformTitle(obj.title);

      const newBooks = [...books];

      newBooks[obj.id] = obj;

      setBooks(newBooks);
   };

   const onDeleteBook = (bookId) => {
      const newBooks = books.filter((book) => book.id !== bookId);

      setBooks(newBooks);
   };

   return (
      <div className="App">
         <Header onAddBook={onAddBook} />
         <Container maxWidth="lg">
            <div className="content">
               <div className="books">
                  {isLoaded &&
                     books[0].imageUrl &&
                     books.map((book) => (
                        <Card
                           key={book.id}
                           onEditBook={onEditBook}
                           onDeleteBook={onDeleteBook}
                           {...book}
                        />
                     ))}
               </div>
            </div>
         </Container>
      </div>
   );
}

export default App;
