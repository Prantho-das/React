import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../common/Appbar";

const MainLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};

export default MainLayout;
