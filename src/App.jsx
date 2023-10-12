import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header.jsx";
import FirstContent from "./component/content/FirstContent.jsx";
import SecondContent from "./component/content/SecondContent.jsx";
import ThirdContent from "./component/content/ThirdContent.jsx";

function App() {
  return (
    <>
      <Header />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
    </>
  );
}

export default App;
