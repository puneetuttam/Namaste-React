import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Shimmer from "./components/Body"
/*
- Header
  - logo
- Body

- Footer
*/








const AppLayout = () => {
  return <div className="app">
    <Header></Header>
    
    <Body></Body>

  </div>;
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)
