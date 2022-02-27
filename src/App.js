import React from "react";
import Global from "./styles/global";
import Home from "./pages/Home/Home";

const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";

const data = [
  {
    id: Math.random(),
    title: "Box Title 🚀",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box title ❤️",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box title 🐬",
    text: lorem,
  },
  {
    id: Math.random(),
    title: "Box title 🏀 ",
    text: lorem,
  },
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;
