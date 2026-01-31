import WorkDetails from "./WorkLayout";
const CompanyDetails = [
  {
    companyName: "Service Based Company",
    role: "C++ Developer - Low Latency Systems",
    from: "July 2025",
    to: "Present",
    description: [
      "Working on high-performance, low-latency trading systems.",
      "Studying and understanding complex legacy codebases, including code written over a decade ago.",
      "Inspired by the architecture and design decisions made in past systems, learning how they influence modern high-performance code.",
      "Exploring best practices in system design and performance optimization.",
    ],
    skills: ["C++", "Linux", "Networking"],
  },
  //  {
  //     companyName: "Example Company",
  //     role: "Software Engineer",
  //     from: "2020",
  //     to: "2023",
  //     description: [
  //         "Developed web applications using React and TypeScript",
  //         "Collaborated with cross-functional teams to deliver high-quality software solutions"
  //     ]
  // },
];
const WorkExp = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
        Work Experience
      </h1>
      <div className="mt-2 h-px w-12 bg-black/20 dark:bg-white/20" />
      {CompanyDetails.map((company, index) => (
        <WorkDetails key={index} {...company} />
      ))}
    </div>
  );
};

export default WorkExp;
