import { useEffect, useState } from "react";
import { useParams } from "react-router";

const AnimeDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [singleAnimes, setSingleAnimes] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const res = await fetch("/anime.json");
      const data = await res.json();
      const result = data.find((anime) => anime.id === Number(id));

      setSingleAnimes(result);
      setLoading(false);
    };
    fetching();
  }, [id]);

  return (
    <div>
      {loading && (
        <>
          <div className="w-[100%] bg-black h-[100vh] flex absolute">
            <div className="loader"></div>
          </div>
        </>
      )}
      <div className="   gap-5 mx-auto whitespace-nowrap">
        <div className="h-[300px]  w-[400px]">
          <img
            src={singleAnimes.image}
            className="shadow h-[100%]  w-[100%] rounded-lg  border"
          />
        </div>

        <div className="mt-8">
          <h4 className="font-bold text-xl">{singleAnimes.name}</h4>
          <p className="mt-2 text-gray-600">{singleAnimes.title}</p>
          <div className="mt-5">\</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
