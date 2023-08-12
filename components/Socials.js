import {
  RiArticleLine,
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTelegramLine,
} from "react-icons/ri";
import Link from "next/link";

const Socials = () => {
  return (
    <div className={`flex items-center gap-x-5 text-[32px]`}>
      <Link
        href={"/Dev_Zakharchuk_Vitalii.pdf"}
        className={`hover:text-accent transition-all duration-300`}
        target={`_blank`}
      >
        <RiArticleLine />
      </Link>
      <Link
        href={"https://github.com/zakharchuk42"}
        className={`hover:text-accent transition-all duration-300`}
        target={`_blank`}
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/vit-zakharchuk/"}
        className={`hover:text-accent transition-all duration-300`}
        target={`_blank`}
      >
        <RiLinkedinBoxLine />
      </Link>
      <Link
        href={"https://t.me/yl42yl"}
        className={`hover:text-accent transition-all duration-300`}
        target={`_blank`}
      >
        <RiTelegramLine />
      </Link>
    </div>
  );
};

export default Socials;
