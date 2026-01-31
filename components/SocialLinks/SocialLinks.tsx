import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import MediumIcon from "@/components/icons/MediumIcon";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";
import GeeksForGeeksIcon from "../icons/GeeksForGeeksIcon";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Geeks for Geeks",
    href: "https://www.geeksforgeeks.org/#",
    icon: GeeksForGeeksIcon,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/#",
    icon: LeetCodeIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/#",
    icon: GitHubIcon,
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/#",
    icon: LinkedInIcon,
  },
  {
    name: "Medium",
    href: "https://medium.com/#",
    icon: MediumIcon,
  },
];

const SocialLinks = () => {
  return (
    <div className="mt-2 flex items-center gap-4">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="
    group relative
    p-2.5 rounded-full
    bg-white dark:bg-white/5
    text-black/70 dark:text-white/70

    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
    dark:shadow-none

    hover:text-black dark:hover:text-white
    hover:-translate-y-1
    hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]

    dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.18)]

    transition-all duration-300 ease-out
  "
        >
          {/* Subtle glow layer (dark mode only) */}
          <span
            className="
      pointer-events-none absolute inset-0 rounded-full
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300

      /* faint inner background lift */
      bg-white/5

      /* border-only glow */
      ring-1 ring-white/25

      dark:block hidden
    "
          />

          <Icon size={20} className="relative z-10" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
