import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Tiktok",
    href: "https://www.tiktok.com/@ur_hanzoo?_t=ZS-8ubLmhElB5e&_r=1",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/hanzala_khan07",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
  {
    title: "Github",
    href: "https://github.com/HanzalaKhan07",
  },
];
export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2
       -translate-x-1/2 bg-emerald-300/30
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
         -z-10"></div>

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40 md:whitespace-nowrap">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
             <a
             href={link.href}
             key={link.title}
             className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-all duration-200"
             target="_blank" // Opens the link in a new tab
             rel="noopener noreferrer" // Adds security for external links
           >
             <span className="font-semibold">{link.title}</span>
             <ArrowUpRightIcon className="size-4 group transform group-hover:scale-110 group-hover:rotate-45 transition-transform duration-200" />
           </a>
           
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
