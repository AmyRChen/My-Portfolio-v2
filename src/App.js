import Navbar from "./scenes/Navbar";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import SocialMediaIcons from "./componenets/SocialMediaIcons";
import { motion } from "framer-motion";
import Landing from "./scenes/Landing";
import About from "./scenes/About";
import Experience from "./scenes/Experience";
import SideProjects from "./scenes/SideProjects";
import Contact from "./scenes/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("landing");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isLarger = useMediaQuery("(min-width: 1400px)");
  const isNotMobile = useMediaQuery("(min-width: 480px)");

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

      <div
        className={`${
          isLarger ? "flex justify-center items-center" : "w-5/6"
        } mx-auto md:h-full`}
      >
        {isNotMobile && <SocialMediaIcons />}
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
          onViewportEnter={() => setSelectedPage("side projects")}
        >
          <SideProjects />
        </motion.div>
        <div className="flex justify-center items-center mx-auto md:h-full">
          <motion.div
            margin="0 0 -200px 0"
            amount="all"
            onViewportEnter={() => setSelectedPage("contact")}
          >
            <Contact />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
