import Socials from "./Socials";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]`}
    >
      <div className={`container mx-auto`}>
        <div
          className={`flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4`}
        >
          <Link href={`/`}>
            <div className={`text-[32px]`}>
              <span className={`font-semibold`}>Zakharchuk</span>
              <span className={`text-accent font-thin`}>dev</span>
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
