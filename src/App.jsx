import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header";
import HeroContent from "./component/content/HeroContent";
import AboutContent from "./component/content/AboutContent";
import ServiceContent from "./component/content/ServiceContent";
import DamkarContent from "./component/content/DamkarContent";
import SoftwareContent from "./component/content/SoftwareContent";
import TestimonialContent from "./component/content/TestimonialContent";
import Footer from "./component/footer/Footer";
import ContactFloat from "./component/contact/ContactFloat";

function App() {
  return (
    <>
      <Header />
      <HeroContent />
      <AboutContent />
      <ServiceContent />
      <DamkarContent />
      <SoftwareContent />
      <TestimonialContent />
      <Footer />
      <ContactFloat />
    </>
  );
}

export default App;
