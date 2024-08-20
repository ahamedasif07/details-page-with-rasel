import { Outlet } from "react-router";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const LayOut = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center mt-3 font-bold">NAVBAR</h2>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;
