import React, { useState } from "react";
// inside the {} cos I used export const not export default
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { NavSearch } from "./components/NavSearch";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <NavSearch />
        <Footer />
      </div>
    </div>
  );
};

export default App;
