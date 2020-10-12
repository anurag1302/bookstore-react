import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/816HBXHJsaL._AC_UY218_.jpg"
      alt="book"
    ></img>
  );
};

const Title = () => {
  return <h1>React.js Book: Learning React JavaScript Library From Scratch</h1>;
};

const Author = () => {
  return <h4>Greg Sidelnikov </h4>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
