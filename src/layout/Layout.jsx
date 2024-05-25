import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import onToTop from "../assets/images/onToTop.svg";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 700) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      <Header />
      <main>
        {children}
        {isVisible ? (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-10 flex justify-center items-center hover:scale-125"
          >
            <img src={onToTop} alt="" />
          </button>
        ) : (
          <></>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
