import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Destination = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-lg-12">
          {Data.map((d) => {
            console.log("show");
            <div className="single-destination">
              <a href="destination-single ">
                <div className="destination-image">
                  <img src={d.img} alt="destination" />
                  <div className="destination-title">
                    <h3>{d.name}</h3>
                  </div>
                </div>
              </a>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

const Data = [
  {
    name: "Neelum Valley",
    img: "/img/destination/d-Neelum.png",
  },
  {
    name: "Hunza Valley",
    img: "/img/destination/d-Hunza.png",
  },
  {
    name: "Swat",
    img: "/img/destination/d-Swat.png",
  },
  {
    name: "Khunjerab Pass",
    img: "/img/destination/d-Khunjerab.png",
  },
  {
    name: "Skardu",
    img: "/img/destination/d-Skardu.png",
  },
  {
    name: "Kalash Valley",
    img: "/img/destination/d-Kalash.png",
  },
  {
    name: "Rakaposhi Base Camp",
    img: "/img/destination/d-Rakaposhi.png",
  },
  {
    name: "Deosai",
    img: "/img/destination/d-Deosai.png",
  },
  {
    name: "Molla Chattok",
    img: "/img/destination/d-Mulla Chatok.png",
  },
  {
    name: "Abbottabad",
    img: "/img/destination/d-Abbotabad.png",
  },
  {
    name: "K2 Base Camp",
    img: "/img/destination/d-K2 base camp.png",
  },
  {
    name: "NALTAR VALLEY",
    img: "/img/destination/d-NALTAR VALLEY.png",
  },
];

export default Destination;
