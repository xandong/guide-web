import React from "react";

import { CardSection } from "../../../utils/model/CardSection";
import { subTopicsHome } from "../../../utils/datas/subTopicsHome";
import TopicSingle from "./TopicSingle";

const options: CardSection[] = subTopicsHome;

const TopicsList: React.FC = () => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-start">
        <h2 className="sm:text-4xl text-2xl font-bold text-blue-500">Recomendados</h2>
      </div>
      <section className="h-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols justify-center items-center">
        {options.map((option: CardSection) => (
          <TopicSingle key={option.label} option={option} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default TopicsList;
