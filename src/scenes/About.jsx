import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const isLarger = useMediaQuery("(min-width: 1060px)");
  const isAboveLarge = useMediaQuery("(min-width: 1400px)");
  return (
    <section
      id="about"
      className={`md:flex md:justify-between md:items-center gap-16 md:h-full ${
        isAboveLarge ? "py-32" : "py-10"
      }`}
    >
      {/* MAIN TEXT */}
      <div className="z-30 basis-3/5 my-12 md:my-32">
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
          <div className="font-roboto text-olive mb-2 text-2xl">
            01. <span className="text-black">About Me</span>
            <div className="border-b-2 border-tea my-5"></div>
          </div>

          <div className="font-ubuntu text-grey mb-3 text-base ">
            Hello, my name is Ping-Ju Chen, but you can call me Amy. I am
            currently graduated from computer programming program at Seneca
            College and have gained extensive knowledge in{" "}
            <span className="text-olive font-semibold">object-oriented </span>
            programming and{" "}
            <span className="text-olive font-semibold">
              database design
            </span>{" "}
            during my academic career. My passion lies in{" "}
            <span className="text-olive font-semibold">web development</span>,
            which has led me to complete several side projects to strengthen my
            skills and expand my knowledge.
          </div>
          <div className="font-ubuntu text-grey mb-3 text-base ">
            Before moving to Toronto, I worked as a business analyst at Deloitte
            Taiwan. This experience has equipped me with strong{" "}
            <span className="text-olive font-semibold">
              problem-solving abilities{" "}
            </span>{" "}
            and the capacity to{" "}
            <span className="text-olive font-semibold">
              translate business requirements into technical solutions
            </span>
            .
          </div>
        </motion.div>
      </div>
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
        {isLarger ? (
          <div className="z-30 w-full max-w-[200px] md:max-w-[400px] rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300">
            <img src="../assets/idphoto.jpg" alt="myself" />
          </div>
        ) : (
          <div className="z-30 my-12 md:my-32  w-full max-w-[300px] md:max-w-[500px] rounded-lg overflow-hidden hover:translate-y-[-5px] duration-300">
            <img src="../assets/idphoto.jpg" alt="myself" />
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default About;
