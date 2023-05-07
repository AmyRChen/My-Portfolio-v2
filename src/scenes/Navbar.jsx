import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ num, page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-olive" : ""
      } hover:text-olive duration-300 `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <span className="text-olive">{num}</span>
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  //CHECK
  const navbarBackground = isTopOfPage ? "" : "bg-deep-white opacity-50";

  return (
    <nav className={`${navbarBackground}  z-40 w-full fixed top-0 my-2`}>
      <div className="flex items-center justify-between mx-auto w-full px-10">
        {isDesktop ? (
          <img src="../assets/logo.png" alt="logo" className="w-1/12 mr-9" />
        ) : (
          <img src="../assets/logo.png" alt="logo" className="w-3/12" />
        )}
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="text-dark-grey flex justify-between items-center gap-12 font-roboto text-sm font-semibold mx-6">
            <Link
              num="01. "
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              num="02. "
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              num="03. "
              page="Side Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              num="04. "
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <a
              className=" text-olive font-roboto py-2 px-4 border border-olive hover:border-b-4  duration-300 rounded"
              href="https://google.com"
              target="blank"
            >
              Resume
            </a>
          </div>
        ) : (
          <button
            className="rounded-full bg-deep-white p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" className="" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-deep-white w-[250px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[20%] text-dark-grey font-roboto font-semibold">
              <Link
                num="01. "
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                num="02. "
                page="Experience"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                num="03. "
                page="Side Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                num="04. "
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <div className="border-olive hover:border-b-4 duration-300 rounded w-1/2 border flex justify-center">
                <a
                  className=" text-olive font-roboto py-2 px-4 items-center"
                  href="https://google.com"
                  target="blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;