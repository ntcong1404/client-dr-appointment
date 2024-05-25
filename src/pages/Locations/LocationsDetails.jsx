import { useParams } from "react-router-dom";
import { locations } from "../../assets/data/location";
import main_loca from "../../assets/images/main_loca.webp";

const LocationsDetails = () => {
  const { id } = useParams();
  const loca = locations.filter((location) => location.id === id);
  return (
    <div>
      <div className="lg:w-full mx-auto">
        <img src={main_loca} className=" w-full h-auto object-cover" />
      </div>
      <section>
        {loca.map((item, index) => (
          <div key={index} className="container">
            <div className=" mx-auto mb-4">
              <h2 className="heading text-center text-[#187F6B]">
                {item.name}
              </h2>
            </div>
            <div className="p-6 mx-6">
              <p className="py-2 my-2">{item.desc}</p>
              <div className="py-2 my-2">
                <span className=" font-semibold">Address : </span>
                <span>{item.add}</span>
              </div>
              <div className="py-2 my-2">
                <span className=" font-semibold">Call : </span>
                <span>{item.tel}</span>
              </div>
              <div className="py-2 my-2">
                <span className=" font-semibold">Email : </span>
                <span>{item.email}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="container">
          <div className=" mx-auto my-2">
            <h2 className="heading text-center text-[#187F6B]">HIGHLIGHT</h2>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default LocationsDetails;
