import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Landing = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1400px)");
  const largerMargin = isAboveLarge ? "py-28" : "";
  return (
    <section
      id="landing"
      className={`md:flex gap-16 md:h-full md:w-full py-8 flex justify-center items-center md:justify-center md:items-center ${largerMargin}`}
    >
      {/* MAIN TEXT */}
      <div className="z-30 basis-4/5 my-12 md:my-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="font-roboto text-olive mb-2 text-lg">
            Hi, my name is
          </div>
          <div className="font-ubuntu text-black mb-6 text-7xl font-semibold">
            Amy Chen.
          </div>
          <div className="font-ubuntu text-grey mb-6 text-5xl font-semibold">
            Software Engineer / Web Developer
          </div>
          <div className="font-ubuntu text-grey mb-2 text-base w-2/3">
            I am a software engineer with a strong business and financial
            background, specializing in building web applications.
          </div>
          <div className="font-ubuntu text-grey text-base w-2/3">
            Currently, I'm seeking a full-time job as a software engineer or web
            developer.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
