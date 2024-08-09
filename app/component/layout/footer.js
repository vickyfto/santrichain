import React from "react";

const FooterLayout = () => {
  return (
    <footer className="bg-[#15803d] h-16 flex items-center">
      <div className="text-center w-full text-white">
        Copyright Blabla {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default FooterLayout;
