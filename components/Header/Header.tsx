import Image from "next/image";
import CustBut from "../Utils/CustBut";
import SocialLinks from "../SocialLinks/SocialLinks";
const Header = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-4 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
            Sushil Udaya Kumar
          </h1>
          {/* <CustBut name={"Hire Me"} outline text="text-green-400" border="border-green-400"/> */}
        </div>
        <h3 className="text-sm sm:text-base text-black/70 dark:text-white/70 mt-1">
          <em>C++ developer by profession</em>
        </h3>
        {/* , building SAAS product as passion */}
        <ol>
          <li>Writing performance-optimized code for critical systems.</li>
          {/* <li>Building a product that makes campus placements seamless.</li> */}
        </ol>
        <SocialLinks />
      </div>
      <Image
        src="https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029"
        alt="profile image"
        width={50}
        height={50}
      />
      <div></div>
    </div>
  );
};

export default Header;
