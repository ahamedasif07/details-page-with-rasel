import { Outlet } from "react-router";


const LayOut = () => {
    return (
        <div>
            <h2 className="text-4xl text-center mt-3 font-bold">NAVBAR</h2>
            <Outlet></Outlet>

        </div>
    );
};

export default LayOut;