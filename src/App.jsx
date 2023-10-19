import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";
import FirstContent from "./component/content/FirstContent.jsx";
import SecondContent from "./component/content/SecondContent.jsx";
import ThirdContent from "./component/content/ThirdContent.jsx";
import FourthContent from "./component/content/FourthContent.jsx";
import FifthContent from "./component/content/FifthContent.jsx";
import ContactBtn from "./component/content/ContactBtn.jsx";

function App() {
  return (
    <>
      <Header />
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <FifthContent />
      <Footer />
      <ContactBtn />
    </>
  );
}

export default App;
