import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className={`md:flex md:justify-between md:items-center gap-16 md:h-full py-10`}
    >
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 z-30">
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
            02. <span className="text-black">My Experience</span>
            <div className="border-b-2 border-tea my-5"></div>
          </div>
        </motion.div>
        <div className="w-full mx-auto lg:max-w-3xl">
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
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div className="flex items-center justify-center w-8 h-8 bg-tea rounded-full ">
                  <img
                    src="../assets/academic-experience.svg"
                    alt="academic-experience"
                    className="w-2/3"
                  />
                </div>

                <div className="w-px h-full bg-deep-tea "></div>
              </div>

              <div className="w-full">
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium font-ubuntu text-black bg-tea rounded-full">
                  Jan. 2022 - Apr. 2023
                </h2>

                <div className="relative flex-1 mb-10 hover:translate-y-[-5px] duration-300 bg-tea hover:shadow-md rounded-3xl">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold font-ubuntu text-black">
                      Computer Programming
                    </p>
                    <p className="mb-2 text-base font-bold font-ubuntu text-dark-grey">
                      Seneca College
                    </p>
                    <p className="text-dark-grey font-ubuntu">
                      The program equipped me with practical programming skills
                      and prepared me well for a career in the technology
                      fields. I worked on real-world projects, collaborated with
                      peers, and received mentorship from experienced faculty
                      members.
                    </p>
                    <ul className="text-dark-grey font-ubuntu list-disc ml-4 mt-3">
                      <li className="my-1">GPA: 4.0/4.0</li>
                      <li>Named to President's Honor List</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div className="flex items-center justify-center w-8 h-8 bg-light-tea rounded-full ">
                  <img
                    src="../assets/work-experience.svg"
                    alt="work-experience"
                    className="w-2/3"
                  />
                </div>

                <div className="w-px h-full bg-deep-tea "></div>
              </div>

              <div className="w-full">
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium font-ubuntu text-black bg-light-tea rounded-full">
                  Stp. 2019 - Oct. 2021
                </h2>

                <div className="relative flex-1 mb-10 hover:translate-y-[-5px] duration-300 bg-light-tea hover:shadow-md rounded-3xl">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold font-ubuntu text-black">
                      Business Analyst
                    </p>
                    <p className="mb-2 text-base font-bold font-ubuntu text-dark-grey">
                      Deloitte, Taiwan
                    </p>
                    <ul className="text-dark-grey font-ubuntu list-disc ml-4 mt-3">
                      <li className="my-2">
                        Consulted with audit team, developed a financial
                        reporting system that automated processes and improved
                        efficiency by 83% during digital transformation.
                      </li>
                      <li className="my-2">
                        Coordinated with A&A department during digital
                        transformation, developed more than 8 projects using
                        SDLC and Agile models, executed System Integration
                        Testing (SIT), and provided system support and training.
                      </li>
                      <li className="my-2">
                        Launched and planned Workload Management System for QRM
                        department reducing budget control process time by 120%.
                      </li>
                      <li>
                        Executed data migration for 7 scopes and ensured data
                        integrity for Deloitte globalized system.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div className="flex items-center justify-center w-8 h-8 bg-light-tea rounded-full ">
                  <img
                    src="../assets/work-experience.svg"
                    alt="work-experience"
                    className="w-2/3"
                  />
                </div>

                <div className="w-px h-full bg-deep-tea "></div>
              </div>

              <div className="w-full">
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium font-ubuntu text-black bg-light-tea rounded-full">
                  Stp. 2018 - Stp. 2019
                </h2>

                <div className="relative flex-1 mb-10 hover:translate-y-[-5px] duration-300 bg-light-tea hover:shadow-md rounded-3xl">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold font-ubuntu text-black">
                      Auditor
                    </p>
                    <p className=" text-base font-bold font-ubuntu text-dark-grey">
                      Deloitte, Taiwan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                <div className="flex items-center justify-center w-8 h-8 bg-tea rounded-full ">
                  <img
                    src="../assets/academic-experience.svg"
                    alt="academic-experience"
                    className="w-2/3"
                  />
                </div>

                <div className="w-px h-full bg-deep-tea "></div>
              </div>

              <div className="w-full">
                <h2 className="inline-block px-4 py-2 mb-4 text-xs font-medium font-ubuntu text-black bg-tea rounded-full">
                  Spt. 2014 - Jun. 2018
                </h2>

                <div className="relative flex-1 mb-10 bg-tea hover:translate-y-[-5px] duration-300 hover:shadow-md rounded-3xl">
                  <div className="relative z-20 p-6">
                    <p className="mb-2 text-xl font-bold font-ubuntu text-black">
                      Honours Bachelor of Accounting
                    </p>
                    <p className="text-base font-bold font-ubuntu text-dark-grey">
                      Ming Chuan University, Taiwan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
