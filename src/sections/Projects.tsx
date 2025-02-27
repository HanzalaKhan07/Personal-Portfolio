import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import portfolioImage from "@/assets/images/portfolioo.png";
import nikeLandingPage from "@/assets/images/nike.jpg";
import ecommerce from "@/assets/images/ecommercee.png";
import weatherWebImage from "@/assets/images/weather.jpg";
import schoolDashboard from "@/assets/images/schoolDashboard.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Self project",
    year: "2023",
    title: "3D Portfolio Website",
    results: [
      { title: "Tech: React, Tailwind CSS, Three.js" },
      { title: "Interactive 3D models to showcase skills." },
      { title: "Smooth navigation and immersive experience." },
      { title: "Responsive across all devices." },
    ],
    link: "https://3d-portfolio-app-omega.vercel.app/",
    image: portfolioImage,
  },
  {
    company: "Self project",
    year: "ongoing",
    title: "Full-Stack School Management Dashboard",
    results: [
      {
        title: "Tech: Next.js, Tailwind CSS, Prisma, PostgreSQL, Clerk, Docker",
      },
      { title: "Role-based dashboard for admin, teachers, students." },
      { title: "Dynamic data with filtering and pagination." },
      { title: "Prisma for data fetching and Clerk for authentication." },
    ],
    link: "https://github.com/HanzalaKhan07",
    image: schoolDashboard,
  },
  {
    company: "Self project",
    year: "2022",
    title: "Weather Web App",
    results: [
      { title: "Tech Stack: React, OpenWeatherMap API, CSS" },
      { title: "Developed a weather app with real-time data display." },
      { title: "Displays current temperature, humidity, and wind speed." },
      { title: "Easy navigation and clear layout." },
    ],
    link: "https://weather-6x0uxdl1s-hanzalas-projects-5658efaa.vercel.app/",
    image: weatherWebImage,
  },
  {
    company: "Self project",
    year: "2024",
    title: "E-Commerce Web App",
    results: [
      { title: "Tech: React, Next.js, Tailwind CSS, Wix Headless CMS" },
      { title: "Features: Categories, filters, pagination, and search." },
      { title: "Cart management with quantity updates." },
      { title: "User profiles with order tracking." },
    ],
    link: "",
    image: ecommerce,
  },
  {
    company: "Self project",
    year: "2023",
    title: "Nike Landing Page",
    results: [
      { title: "Tech: React, Tailwind CSS" },
      { title: "Built a stunning Nike web app." },
      { title: "Mastered Tailwind best practices and techniques." },
      { title: "Key sections: Navbar, Hero, Product Cards, and Reviews." },
    ],
    link: "https://github.com/HanzalaKhan07",
    image: nikeLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section  className="pb-16 lg:py-24">
      <div className="container" >
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description=" See how we transformed concepts into engaging digital experiences."
        />
        <div id="projects" className="mt-10 flex flex-col gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8
                md:px-10 md:pt-12 lg:pt-16 lg:px-20 pb-0 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:font-bold px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative flex items-end justify-end h-full w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
