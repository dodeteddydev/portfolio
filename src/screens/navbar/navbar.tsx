import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "../../components";
import { SectionEnum } from "../../enum";
import { useMediaQuery } from "../../hooks";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

type NavbarProps = {
  isInTopScreen: boolean;
  selectedSection: SectionEnum;
  setSelectedSection: (selectedSection: SectionEnum) => void;
};

export const Navbar = ({
  isInTopScreen,
  selectedSection,
  setSelectedSection,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const bgNavbar = isInTopScreen ? "bg-transparent" : "bg-white drop-shadow-xl";

  return (
    <nav>
      <div className={`fixed z-30 w-full py-2 ${bgNavbar}`}>
        <div className="flex justify-between items-center w-5/6 mx-auto">
          {isAboveMediumScreen ? (
            <div className="flex justify-between w-[300px]">
              <Link
                section="About Me"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
              <Link
                section="Portfolio"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
              <Link
                section="Service"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
              />
            </div>
          ) : (
            <button className="w-[105px]" onClick={() => setIsMenuOpen(true)}>
              <RxHamburgerMenu size={30} className="text-black" />
            </button>
          )}
          <h1 className="font-pirataone lg:text-[50px] md:text-[50px] text-[35px] text-black">
            TED
          </h1>
          {isAboveSmallScreen && (
            <div className="flex justify-end lg:w-[300px] w-[105px]">
              <button className="rounded-full bg-gray py-2 px-5 hover:bg-black hover:text-white text-xs">
                <a href="mailto:dodeteddy11@gmail.com">Contact Me</a>
              </button>
            </div>
          )}
        </div>
      </div>

      {!isAboveMediumScreen && isMenuOpen && (
        <div className="fixed z-40 w-[300px] h-screen bg-white drop-shadow-2xl">
          <div className="flex justify-end p-10">
            <button onClick={() => setIsMenuOpen(false)}>
              <CgClose size={30} className="text-black" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-8 text-xl">
            <Link
              section="About Me"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              section="Portfolio"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
            <Link
              section="Service"
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
            />
          </div>
        </div>
      )}
    </nav>
  );
};
