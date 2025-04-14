type FooterItemProps = {
  href: string;
  src: string;
  alt: string;
  title: string;
};
export const FooterItem = ({ href, src, alt, title }: FooterItemProps) => {
  return (
    <a href={href} target="_blank" className="flex items-center">
      <div className="w-[30px]">
        <img src={src} alt={alt} />
      </div>
      <p>{title}</p>
    </a>
  );
};
