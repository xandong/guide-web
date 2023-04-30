import React from "react";
import { CardSection } from "../../utils/model/CardSection";
import CardSingle from "./CardSingle";

const options: CardSection[] = [
 
];
// Filter: Eventos, Turismo, Serviços

const CardsList: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-start">
      <h2 className="text-3xl font-bold text-blue-500">Recomendados</h2>
      </div>
      <section className="grid grid-cols-3 justify-center justify-items-start space-x-8">
        {options.map((option: CardSection) => (
          <CardSingle label={option.label} photo={option.photo} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default CardsList;
