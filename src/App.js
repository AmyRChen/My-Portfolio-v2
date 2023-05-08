import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import SocialMediaIcons from "./componenets/SocialMediaIcons";
import { motion } from "framer-motion";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Experience from "./scenes/Experience";
import SideProjects from "./scenes/SideProjects";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  const isLargerScreen = useMediaQuery("(min-width: 480px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <div className="w-5/6 mx-auto md:h-full">
        {isLargerScreen && <SocialMediaIcons />}
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          // onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("about")}
        >
          <About />
        </motion.div>
      </div>
      {/* {isLargerScreen && <SocialMediaIcons />} */}
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("experience")}
        >
          <Experience />
        </motion.div>
      </div>
      <div className="w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("sideProjects")}
        >
          <SideProjects />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
