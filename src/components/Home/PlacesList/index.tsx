import React from "react"

import { subTopicsHome } from "../../../utils/datas/subTopicsHome";

interface PlacesListProps {
  service: string;
}

const PlacesList: React.FC<PlacesListProps> = ({ service }: PlacesListProps) => {  
  const topic = subTopicsHome.find(topic => topic.path === `/${service}`)
  return (
    <React.Fragment>
      <div className="w-full flex justify-start">
        <h2 className="sm:text-4xl text-2xl font-bold text-blue-500">{ topic?.label }</h2>
      </div>
      <section className="h-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols justify-center items-center">
        {
        // options.map((option: CardSection) => (
        //   <CardSingle key={option.label} option={option} />
        // ))
        }
      </section>
    </React.Fragment>
  )
}

export default PlacesList;