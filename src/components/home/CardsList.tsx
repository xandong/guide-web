import React from "react";
import { CardSection } from "../../utils/model/CardSection";
import CardSingle from "./CardSingle";
import eventPic from "../../assets/event.png";
import tourismPic from "../../assets/tourism.png";
import servicePic from "../../assets/service.png";

const options: CardSection[] = [
  { label: "Eventos", photo: eventPic, path: "/events" },
  { label: "Turismo", photo: tourismPic, path: "/tourism" },
  { label: "Serviços", photo: servicePic, path: "/services" },
];
// Filter: Eventos, Turismo, Serviços

const CardsList: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-start mb-6">
        <h2 className="text-3xl font-bold text-blue-500">Recomendados</h2>
      </div>
      <section className="h-full grid grid-cols-3 justify-center items-center space-x-8 mb-6">
        {options.map((option: CardSection) => (
          <CardSingle key={option.label} option={option} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default CardsList;
