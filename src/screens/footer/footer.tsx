import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import tiktokLogo from "../../assets/tiktok.svg";
import { FooterItem } from "../../components";

export const Footer = () => {
  return (
    <footer className="bg-white drop-shadow-2xl mt-32 px-3 py-5">
      <div className="flex justify-center gap-16 mb-10">
        <FooterItem
          alt="github"
          href="https://github.com/dodeteddydev"
          src={githubLogo}
          title="Github"
        />
        <FooterItem
          alt="linkedin"
          href="https://www.linkedin.com/in/dode-teddy-630a85239/"
          src={linkedinLogo}
          title="LinkedIn"
        />
        <FooterItem
          alt="tiktok"
          href="https://www.tiktok.com/@dodeteddy?_t=8pZxeJMdLpS&_r=1"
          src={tiktokLogo}
          title="Tik Tok"
        />
      </div>

      <div className="text-center text-sm">
        <p>© 2024 Dode Teddy</p>
      </div>
    </footer>
  );
};
