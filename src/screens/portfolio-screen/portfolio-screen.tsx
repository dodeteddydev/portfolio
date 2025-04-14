import { motion } from "framer-motion";
import { SectionEnum } from "../../enum";
import portfolioOne from "../../assets/portfolio-one.png";
import portfolioTwo from "../../assets/portfolio-two.png";
import { PortfolioItem } from "../../components";

type PortfolioScreenProps = {
  setSelectedSection: (section: SectionEnum) => void;
};

export const PortfolioScreen = ({
  setSelectedSection,
}: PortfolioScreenProps) => {
  return (
    <section id={SectionEnum.PORTOFOLIO} className="lg:pb-64 lg:pt-36 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedSection(SectionEnum.PORTOFOLIO)}
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
          Portfolio
        </motion.h1>

        <div className="flex flex-col justify-center lg:gap-28 lg:items-start items-center lg:flex-row mt-10">
          <PortfolioItem
            alt="portfolio-two"
            src={portfolioTwo}
            portfolioName="Pendispros App"
            portfolioDescription="Pendispros App is an application for registering people with
          disabilities and prosthetic workshops specifically for the provinces
          of Bali and East Java. I created this application for my final
          assignment, and this application made me get an award as the best
          final assignment."
          />
          <div className="mt-10 lg:mt-0">
            <PortfolioItem
              alt="portfolio-one"
              src={portfolioOne}
              portfolioName="Arcturus App"
              portfolioDescription="Arcturus App is an application designed to help travel agents gain access to dynamic hotel rates and other special offers provided by travel service providers."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
