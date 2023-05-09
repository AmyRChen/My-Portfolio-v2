const SocialMediaIcons = () => {
  return (
    <>
      <div className="fixed bottom-0 right-0 flex flex-col gap-7 mt-5 mx-3 z-40">
        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://www.linkedin.com/in/amy-chen-6827531aa/"
          target="blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>

        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://github.com/AmyRChen"
          target="blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>

        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://www.instagram.com/chenpr/"
          target="blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" />
        </a>

        <div className="ml-2.5 bottom-0 h-[100px] border-l border-black justify-center items-center"></div>
      </div>
    </>
  );
};

export default SocialMediaIcons;
