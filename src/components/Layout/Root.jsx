import { Outlet } from "react-router-dom";

import "./Root.css";

const Root = () => {
  return (
    <div className="font-class ">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
