import { motion } from "framer-motion";

type PortfolioItemProps = {
  alt: string;
  src: string;
  portfolioName: string;
  portfolioDescription: string;
};
export const PortfolioItem = ({
  alt,
  src,
  portfolioName,
  portfolioDescription,
}: PortfolioItemProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
      className="flex flex-col min-[1480px]:flex-row gap-5"
    >
      <div className="bg-white drop-shadow-xl md:p-16 p-10 rounded-3xl md:w-[500px] lg:w-[300px] w-[270px]">
        <img alt={alt} src={src} />
      </div>
      <div>
        <h1 className="lg:text-3xl md:text-3xl text-lg font-bold">
          {portfolioName}
        </h1>
        <p className="lg:w-[300px] md:w-[500px] w-[250px] lg:text-lg md:text-lg text-sm">
          {portfolioDescription}
        </p>
      </div>
    </motion.div>
  );
};
