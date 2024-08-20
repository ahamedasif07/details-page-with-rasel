import { useEffect, useState } from "react";
import AnimeCard from "./components/Extra/AnimeCard";
import { Outlet } from "react-router";

const Home = () => {
  const [allAnimes, setAllAnimes] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("anime.json");

      const data = await res.json();
      setAllAnimes(data);
    };
    fetching();
  }, []);

  return (
    <div>
      <h2>this is home page</h2>

      <div className="grid md:grid-cols-3 gap-10  lg:grid-cols-3">
        {allAnimes?.map((anime, index) => (
          <AnimeCard anime={anime} key={index}></AnimeCard>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
