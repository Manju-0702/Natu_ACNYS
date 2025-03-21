import AnnouncementBar from "./AnnouncementBar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <AnnouncementBar />
      <Navbar/>
      <div className="pt-10"> {/* Adjust padding to prevent overlap */}
        <Outlet />
      </div>
    </>
  );
}
