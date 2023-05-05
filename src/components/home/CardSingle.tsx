import React from "react";
import { CardSection } from "../../utils/model/CardSection";
import { Link } from "react-router-dom";

interface CardSingleProps {
  option: CardSection;
}

const CardSingle: React.FC<CardSingleProps> = (props: CardSingleProps) => {
  const { option } = props;
  return (
    <React.Fragment>
      <Link
        to="/"
        className="relative w-fit h-fit rounded-lg overflow-hidden shadow-md hover:shadow-xl shadow-zinc-200 hover:shadow-zinc-300 transition-all duration-300 hover:scale-[1.025] ease-in-out group"
      >
        <img
          id={option.label}
          className="sm:w-60 shadow-inner"
          src={option.photo}
          alt={option.label}
        />
        <label
          htmlFor={option.label}
          className="font-bold text-2xl text-white bg-black/10 px-2 py-px rounded-full absolute bottom-3 right-3 group-hover:text-[1.7rem] shadow-xl transition-all duration-500"
        >
          {option.label}
        </label>
      </Link>
    </React.Fragment>
  );
};

export default CardSingle;
