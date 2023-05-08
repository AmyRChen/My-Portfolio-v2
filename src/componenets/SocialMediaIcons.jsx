const SocialMediaIcons = () => {
  return (
    <>
      <div className="absolute bottom-0 left-0 flex flex-col gap-7 justify-end mt-5 mx-10">
        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://google.com" //TODO
          target="blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>

        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://" //TODO
          target="blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>

        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 w-1/2"
          href="https://" //TODO
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
