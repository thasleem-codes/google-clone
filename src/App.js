import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Router } from "./components/Router";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-50 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Router />
        <Footer />
      </div>
    </div>
  );
}

export default App;
