import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header/Header";

import Footer from "./component/footer/Footer";
import ContactFloat from "./component/contact/ContactFloat";
import { setDataSetting } from "./store/reducers/setting";
import { API_URL } from "./component/utils/const";

function App() {
  const dispatchState = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataSetting = async () => {
      try {
        const response = await fetch(`${API_URL}/pengaturan`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatchState(setDataSetting(data.data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataSetting();
  }, []);

  return (
    <>
      <Header />
      {/* <HeroContent />
      <AboutContent />
      <ServiceContent />
      <DamkarContent />
      <SoftwareContent />
      <TestimonialContent /> */}
      <Footer />
      <ContactFloat />
    </>
  );
}

export default App;
