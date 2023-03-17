import React, { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-poppins z-0 w-full h-screen flex flex-col overflow-auto bg-white">
      <Navbar />
      <div className="h-full ">{children}</div>
    </div>
  );
};

export default Layout;
