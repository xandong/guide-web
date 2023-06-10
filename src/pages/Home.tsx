import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageWrapper from "../components/Layout";
import MapFloat from "../components/Layout/MapFloat";
import PlacesList from "../components/Home/PlacesList";
import TopicsList from "../components/Home/TopicsList";

type Coords = {
  lat: number;
  lng: number;
}

const Home: React.FC = () => {
  document.title = "Home";
  const { service } = useParams()
  const [coords, setCoords] = useState<Coords>()
  // TO-DO: fazer chamada com coords, guardar local do usuário para traçar rotas

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      setCoords({
        lat: e.coords.latitude,
        lng: e.coords.longitude,
      })
    });
  }, [])

  return (
    <React.Fragment>
      <PageWrapper>
        {
          service ? (
            <PlacesList service={service} />
          ) : (
            <TopicsList />
          )
        }
      </PageWrapper>

      {/* Google Maps */}
      <MapFloat />
    </React.Fragment>
  );
};

export default Home;