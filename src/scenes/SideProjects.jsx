import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const SideProjects = () => {
  const isSmallerScreen = useMediaQuery("(min-width: 768px)");
  const [moreProject, setMoreProject] = useState(false);

  async function showProjectClick(e) {
    if (moreProject) {
      setMoreProject(false);
    } else {
      setMoreProject(true);
    }
  }

  return (
    <section
      id="side projects"
      className={`md:flex md:justify-between md:items-center gap-16 md:h-full py-10`}
    >
      {/* Feature Projects */}
      <div className="z-30 my-12 md:my-32">
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
            03. <span className="text-black">Some Things I've Build</span>
            <div className="border-b-2 border-tea my-5"></div>
          </div>

          {/* PROJECT 1 */}
          <div className="flex justify-center items-center mt-12 mb-24">
            {/* IMAGE */}
            {isSmallerScreen && (
              <div className="bg-deep-white rounded-lg overflow-hidden">
                <div className="opacity-tea opacity-40 hover:opacity-90 duration-300">
                  <img src="../assets/project1.jpg" alt="project1" />
                </div>
              </div>
            )}

            {/* WORDING */}
            <div
              className={`flex flex-col justify-center items-center font-ubuntu text-grey w-10/12 ${
                !isSmallerScreen ? "" : "ml-6"
              }`}
            >
              <div className="flex flex-row justify-between">
                <div className="text-2xl font-semibold ">MERN stack</div>
                {/* PRODUCTION LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-5 hover:bg-tea duration-300"
                  href="https://socailmedia-frontend.onrender.com/"
                  target="blank"
                >
                  <img src="../assets/open-link.svg" alt="open-link" />
                </a>
                {/* GITHUB LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-3 hover:bg-tea duration-300"
                  href="https://github.com/AmyRChen/MERN-SocialMedia"
                  target="blank"
                >
                  <img src="../assets/github.png" alt="open-link" />
                </a>
              </div>
              <div className="mb-3 text-2xl font-semibold">
                Socail Media Application
              </div>
              <div className="mb-3 ">
                This is a user-friendly, responsive social media application.
                For this side project, I have implemented various features such
                as authorization and authentication. Users can add other users
                to their friends list, post photos and ideas, and like other
                users' posts. It is designed to simulate a real-world social
                media platform.
              </div>
              <div className="bg-deep-white rounded-full overflow-hidden p-2 text-sm flex ">
                <p className="mx-2">MongoDB</p>
                <p className="mx-2">Express.js</p>
                <p className="mx-2">React</p>
                <p className="mx-2">Node.js</p>
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
          {/* PROJECT 2 */}
          <div className="flex justify-center items-center mt-12 mb-24">
            {/* WORDING */}
            <div
              className={`flex flex-col justify-center items-center font-ubuntu text-grey w-10/12 ${
                !isSmallerScreen ? "" : "mr-6"
              }`}
            >
              <div className="flex flex-row justify-between">
                <div className="mb-3 text-2xl font-semibold">
                  The MET Collection
                </div>
                {/* PRODUCTION LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-5 hover:bg-tea duration-300"
                  href="https://web-422-a6-client.vercel.app/"
                  target="blank"
                >
                  <img src="../assets/open-link.svg" alt="open-link" />
                </a>
                {/* GITHUB LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-3 hover:bg-tea duration-300"
                  href="https://github.com/AmyRChen/The-MET-client"
                  target="blank"
                >
                  <img src="../assets/github.png" alt="open-link" />
                </a>
              </div>
              <div>
                This is a full-stack application with authentication,
                authorization, browsing history, and favorites features. Users
                can sign up to view The Metropolitan Museum of Art's collection
                online. Account holders can review their browsing history and
                favorite collections.
              </div>
              <div className="mb-3 ">
                I built this application because during the pandemic, people
                have had limited opportunities to visit museums. By visiting
                this application, people can explore the MET online!
              </div>
              <div className="bg-deep-white rounded-full overflow-hidden p-2 text-sm flex">
                <p className="mx-2">Bootstrap</p>
                <p className="mx-2">Next.js</p>
                <p className="mx-2">Express.js</p>
                <p className="mx-2">MongoDB</p>
              </div>
            </div>
            {/* IMAGE */}
            {isSmallerScreen && (
              <div className="bg-deep-white rounded-lg overflow-hidden">
                <div className="opacity-tea opacity-40 hover:opacity-90 duration-300">
                  <img src="../assets/project3.jpg" alt="project2" />
                </div>
              </div>
            )}
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
          {/* PROJECT 3 */}
          <div className="flex justify-center items-center mt-12 mb-24">
            {/* IMAGE */}
            {isSmallerScreen && (
              <div className="bg-deep-white rounded-lg overflow-hidden">
                <div className="opacity-tea opacity-40 hover:opacity-90 duration-300">
                  <img src="../assets/project2.jpg" alt="project3" />
                </div>
              </div>
            )}

            {/* WORDING */}
            <div
              className={`flex flex-col justify-center items-center font-ubuntu text-grey w-10/12 ${
                !isSmallerScreen ? "" : "ml-6"
              }`}
            >
              <div className="flex flex-row justify-between">
                <div className="mb-3 text-2xl font-semibold ">My Chat</div>
                {/* PRODUCTION LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-5 hover:bg-tea duration-300"
                  href="https://chat-app-frontend-i0y4.onrender.com/"
                  target="blank"
                >
                  <img src="../assets/open-link.svg" alt="open-link" />
                </a>
                {/* GITHUB LINK*/}
                <a
                  className="bg-deep-white rounded-full w-8 h-8 p-1 ml-3 hover:bg-tea duration-300"
                  href="https://github.com/AmyRChen/Chat-App-withChatGPT"
                  target="blank"
                >
                  <img src="../assets/github.png" alt="open-link" />
                </a>
              </div>
              <div className="mb-3">
                This is a chat application that utilizes Chat Engine for
                real-time communication between users. It integrates with
                OpenAI's chatGPT API to enable intelligent and natural language
                conversations. Users can engage with an AI chatbot and connect
                with other users by adding them to chat groups. Within these
                groups, members can share photos and chat with their friends
                about their lives.
              </div>
              <div className="bg-deep-white rounded-full overflow-hidden p-2 text-sm flex">
                <p className="mx-2">React</p>
                <p className="mx-2">OpenAI API</p>
                <p className="mx-2">Node.js</p>
                <p className="mx-2">Express.js</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Other more - title and button*/}
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
          <div className="font-ubuntu font-semibold text-2xl text-olive flex justify-center my-5">
            Explore more side projects
          </div>
        </motion.div>
        {/* Other more - projects*/}
        <div className="flex flex-col items-center">
          {moreProject && (
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
              <div class="flex flex-wrap justify-center mt-10">
                {/* project1 */}
                <div class="p-4 max-w-xs hover:translate-y-[-5px] duration-300">
                  <div class="flex rounded-lg h-full bg-deep-white p-8 flex-col">
                    <div class="flex items-center mb-3 text-black text-lg font-medium font-ubuntu">
                      AC Dance Studio
                    </div>
                    <div class="flex flex-col justify-between flex-grow">
                      <p class="leading-relaxed text-base text-grey font-ubuntu">
                        This is a website for a dance studio that I built to
                        learn Tailwind CSS. As a dance enthusiast, I came up
                        with the idea of creating a static website to introduce
                        the dance studio to others.
                      </p>
                      <div className="flex flex-row justify-end mt-3">
                        {/* PRODUCTION LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 hover:bg-deep-tea duration-300"
                          href="https://react-dance-studio-app-amyrchen.vercel.app/"
                          target="blank"
                        >
                          <img src="../assets/open-link.svg" alt="open-link" />
                        </a>
                        {/* GITHUB LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 ml-3 hover:bg-deep-tea duration-300"
                          href="https://github.com/AmyRChen/React-Dance-Studio"
                          target="blank"
                        >
                          <img src="../assets/github.png" alt="open-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project2 */}
                <div class="p-4 max-w-xs hover:translate-y-[-5px] duration-300">
                  <div class="flex rounded-lg h-full bg-deep-white p-8 flex-col">
                    <div class="flex items-center mb-3 text-black text-lg font-medium font-ubuntu">
                      Today's Weather
                    </div>
                    <div class="flex flex-col justify-between flex-grow">
                      <p class="leading-relaxed text-base text-grey font-ubuntu">
                        This is a cute weather application that displays the
                        real-time weather for the location that the user
                        searches for.
                      </p>
                      <div className="flex flex-row justify-end mt-3">
                        {/* GITHUB LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 ml-3 hover:bg-deep-tea duration-300"
                          href="https://github.com/AmyRChen/Weather-App"
                          target="blank"
                        >
                          <img src="../assets/github.png" alt="open-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* project3 */}
                <div class="p-4 max-w-xs hover:translate-y-[-5px] duration-300">
                  <div class="flex rounded-lg h-full bg-deep-white p-8 flex-col">
                    <div class="flex items-center mb-3 text-black text-lg font-medium font-ubuntu">
                      My Blog
                    </div>
                    <div class="flex flex-col justify-between flex-grow">
                      <p class="leading-relaxed text-base text-grey font-ubuntu">
                        As someone who enjoys sharing my thoughts and
                        experiences, I built this application to learn how to
                        implement authentication and authorization features. The
                        blog allows users to create, read, update, and delete
                        posts and images.
                      </p>
                      <div className="flex flex-row justify-end mt-3">
                        {/* PRODUCTION LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 hover:bg-deep-tea duration-300"
                          href="https://tense-pink-top-coat.cyclic.app/blog"
                          target="blank"
                        >
                          <img src="../assets/open-link.svg" alt="open-link" />
                        </a>
                        {/* GITHUB LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 ml-3 hover:bg-deep-tea duration-300"
                          href="https://github.com/AmyRChen/WebApp-MyBlog"
                          target="blank"
                        >
                          <img src="../assets/github.png" alt="open-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* project4 */}
                <div class="p-4 max-w-xs hover:translate-y-[-5px] duration-300">
                  <div class="flex rounded-lg h-full bg-deep-white p-8 flex-col">
                    <div class="flex items-center mb-3 text-black text-lg font-medium font-ubuntu">
                      Movie API
                    </div>
                    <div class="flex flex-col justify-between flex-grow">
                      <p class="leading-relaxed text-base text-grey font-ubuntu">
                        During my web courses, I learned how to set up an API
                        for the front-end. This API retrieves sample movie data
                        from MongoDB, which programmers can use in their
                        projects.
                      </p>
                      <div className="flex flex-row justify-end mt-3">
                        {/* GITHUB LINK*/}
                        <a
                          className="bg-tea rounded-full w-8 h-8 p-1 ml-3 hover:bg-deep-tea duration-300"
                          href="https://github.com/AmyRChen/MovieAPI"
                          target="blank"
                        >
                          <img src="../assets/github.png" alt="open-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {moreProject ? (
            <button
              className="font-roboto py-2 px-4 border border-olive hover:border-b-4 duration-300 rounded text-base my-5"
              onClick={showProjectClick}
            >
              Show Less
            </button>
          ) : (
            <button
              className="font-roboto py-2 px-4 border border-olive hover:border-b-4 duration-300 rounded text-base my-5"
              onClick={showProjectClick}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
