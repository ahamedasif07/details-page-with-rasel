import { useEffect, useState } from "react";
import AnimeCard from "./components/Extra/AnimeCard";
import { Outlet } from "react-router";

const Home = () => {
  const [allAnimes, setAllAnimes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("anime.json");
      const data = await res.json();
      setAllAnimes(data);
    };
    fetching();
  }, []);

  // Calculate the index of the first and last items for the current page
  const indexOfLastAnime = currentPage * itemsPerPage;
  const indexOfFirstAnime = indexOfLastAnime - itemsPerPage;
  const currentAnimes = allAnimes.slice(indexOfFirstAnime, indexOfLastAnime);

  // Calculate total pages
  const totalPages = Math.ceil(allAnimes.length / itemsPerPage);

  // Change page handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pb-5">
      <div className="grid md:grid-cols-3 gap-10 lg:grid-cols-3 py-8">
        {currentAnimes.map((anime, index) => (
          <AnimeCard anime={anime} key={index} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination h-[40px] w-[20%] mx-auto">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="p-3 bg-gray-500 text-white text-[12px]"
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`${
              currentPage === pageNumber + 1 ? "active" : ""
            } p-3 border-gray-500 border-[2px] text-black text-[12px]`}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className="p-3 bg-gray-500 text-white text-[12px]"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default Home;
