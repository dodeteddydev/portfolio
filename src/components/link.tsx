import AnchorLink from "react-anchor-link-smooth-scroll";
import { SectionEnum } from "../enum";

type LinkProps = {
  section: string;
  selectedSection: SectionEnum;
  setSelectedSection: (value: SectionEnum) => void;
};

export const Link = ({
  selectedSection,
  setSelectedSection,
  section,
}: LinkProps) => {
  const lowerCaseSection = section
    .toLowerCase()
    .replace(/ /g, "") as SectionEnum;
  const linkStyle = `hover:underline ${
    selectedSection === lowerCaseSection ? "underline" : ""
  }`;

  return (
    <AnchorLink
      href={`#${lowerCaseSection}`}
      className={linkStyle}
      onClick={() => setSelectedSection(lowerCaseSection)}
    >
      {section}
    </AnchorLink>
  );
};
