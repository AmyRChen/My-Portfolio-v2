import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ num, page, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className="hover:text-olive duration-300"
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <span className="text-olive">{num}</span>
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-deep-white bg-opacity-80";

  return (
    <nav
      className={`${navbarBackground}  z-40 w-full fixed top-0`}
      style={{ margin: 0 }}
    >
      <div className="flex items-center justify-between mx-auto w-full max-h-[80px]">
        {isDesktop ? (
          <img src="../assets/logo.png" alt="logo" className="w-1/12 mr-9" />
        ) : (
          <img src="../assets/logo.png" alt="logo" className="w-2/12" />
        )}
        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="text-dark-grey flex justify-between items-center gap-12 font-roboto text-sm font-semibold mx-10 ">
            <Link num="01. " page="About" setSelectedPage={setSelectedPage} />
            <Link
              num="02. "
              page="Experience"
              setSelectedPage={setSelectedPage}
            />
            <Link
              num="03. "
              page="Side Projects"
              setSelectedPage={setSelectedPage}
            />
            <Link num="04. " page="Contact" setSelectedPage={setSelectedPage} />
            <a
              className=" text-olive font-roboto py-2 px-4 border border-olive hover:border-b-4  duration-300 rounded"
              href="https://drive.google.com/file/d/1EljSTRLHjyAZ-T4ecftZ1rdGLuwoq8MK/view?usp=sharing"
              target="blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        ) : (
          <button
            className="rounded-full bg-deep-white p-2"
            onClick={() => {
              setIsMenuToggled(!isMenuToggled);
            }}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" className="" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div
            className={`fixed right-0 bottom-0 h-full w-[250px] bg-deep-white z-50`}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[20%] text-dark-grey font-roboto font-semibold">
              <Link num="01. " page="About" setSelectedPage={setSelectedPage} />
              <Link
                num="02. "
                page="Experience"
                setSelectedPage={setSelectedPage}
              />
              <Link
                num="03. "
                page="Side Projects"
                setSelectedPage={setSelectedPage}
              />
              <Link
                num="04. "
                page="Contact"
                setSelectedPage={setSelectedPage}
              />
              <div className="border-olive hover:border-b-4 duration-300 rounded w-1/2 border flex justify-center">
                <a
                  className=" text-olive font-roboto py-2 px-4 items-center"
                  href="https://drive.google.com/file/d/1EljSTRLHjyAZ-T4ecftZ1rdGLuwoq8MK/view?usp=sharing"
                  target="blank"
                  rel="noreferrer"
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
