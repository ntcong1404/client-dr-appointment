import main_about from "../assets/images/main_about.webp";
import { about } from "../assets/data/about";
import FaqItem from "../components/Faq/FaqItem";
const About = () => {
  return (
    <div>
      <div className="lg:w-full mx-auto">
        <img src={main_about} className=" w-full h-auto object-cover" />
      </div>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-4">
            <h2 className="heading text-center text-[#187F6B]">About Us</h2>
          </div>
          <div>
            <ul className="mt-[30px]">
              {about?.map((item, index) => (
                <FaqItem item={item} key={index} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
