const EmailLink = () => {
  return (
    <>
      <div className="fixed bottom-0 right-0 flex flex-col gap-7 mt-5 mx-10 z-40 ">
        <a
          className="hover:opacity-50 hover:translate-y-[-5px] duration-300 text-center"
          href="mailto:pingjuchen423@gmail.com"
          rel="noreferrer"
          style={{ writingMode: "vertical-rl", lineHeight: "80px" }}
        >
          pingjuchen423@gmail.com
        </a>
        <div className="mr-2.5 bottom-0 h-[100px] border-l border-black justify-center items-center"></div>
      </div>
    </>
  );
};

export default EmailLink;
