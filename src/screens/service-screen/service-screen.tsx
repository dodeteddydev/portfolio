import { motion } from "framer-motion";
import { SectionEnum } from "../../enum";
import mobileApp from "../../assets/mobile-app.png";
import webApp from "../../assets/web-app.png";

type ServiceScreenProps = {
  setSelectedSection: (section: SectionEnum) => void;
};
export const ServiceScreen = ({ setSelectedSection }: ServiceScreenProps) => {
  return (
    <section id={SectionEnum.SERVICE} className="lg:pt-32 pt-24 px-16">
      <motion.div
        onViewportEnter={() => setSelectedSection(SectionEnum.SERVICE)}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="font-pirataone text-6xl underline text-center"
        >
          Service
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 1 },
          }}
          className="flex lg:flex-row flex-col items-center gap-5 lg:mb-0 md:mb-32 mb-16 mt-16 lg:mt-0"
        >
          <div className="lg:w-[300px] md:w-[400px] w-[250px]">
            <img src={mobileApp} alt="mobile-app" />
          </div>
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold">
            Mobile App Development
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 1 },
          }}
          className="flex lg:flex-row flex-col justify-end items-center gap-5"
        >
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold lg:order-1 order-2">
            Web App Development
          </h1>
          <div className="lg:w-[300px] md:w-[400px] w-[250px] lg:order-2 order-1">
            <img src={webApp} alt="web-app" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
