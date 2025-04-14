import { motion } from "framer-motion";
import dodePicture from "../../assets/dodeteddy.png";
import { SectionEnum } from "../../enum";
import { StackItem } from "../../components";

type AboutScreenProps = {
  setSelectedSection: (section: SectionEnum) => void;
};

export const AboutScreen = ({ setSelectedSection }: AboutScreenProps) => {
  return (
    <section id={SectionEnum.ABOUTME} className="lg:py-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedSection(SectionEnum.ABOUTME)}
      >
        <div className="flex flex-col lg:flex-row justify-center">
          {/* LEFT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex w-full justify-center lg:mb-5 md:text-start text-center md:px-0 px-5"
          >
            <div>
              <div className="md:text-8xl text-6xl">
                <h1>My Name</h1>
                <h1>
                  is <b className="font-pirataone">Dode Teddy</b>
                </h1>
              </div>
              <div className="lg:w-[400px] md:w-[300px] w-full">
                <p>
                  I am a Frontend Developer and Mobile App Developer with more
                  than 1 year experience.
                </p>
              </div>
              <div className="flex gap-3 md:w-[400px] w-full justify-center md:justify-start overflow-auto flex-wrap lg:mt-16 py-5 lg:py-0">
                <StackItem stack="Javascript" />
                <StackItem stack="TypeScript" />
                <StackItem stack="React" />
                <StackItem stack="Node JS" />
                <StackItem stack="MySQL" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex justify-center w-full"
          >
            <div className="relative md:w-[350px] sm:w-[350px] w-[300px]">
              <img
                className="rounded-tl-3xl rounded-br-3xl"
                src={dodePicture}
                alt="dodePicture"
              />

              <button className="absolute lg:top-[25%] top-5 right-5 bg-black text-white lg:py-5 py-1 lg:px-10 px-5 rounded-full hover:bg-gray hover:text-black">
                <a href="mailto:dodeteddy11@gmail.com">Hire Me</a>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
