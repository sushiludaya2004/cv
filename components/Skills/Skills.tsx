import CustBut from "@/components/Utils/CustBut";

const techStack = [
  "C/C++",
  "Linux",
  "Networking",
  "Shell Scripting",
  "ReactJS",
  "TypeScript",
  "TailwindCSS",
  
];
// name,
//   bg = "bg-white",
//   text = "text-black",
//   border = "border-transparent",
//   outline = false,

const Skills = () => {
  return (
    <div className="max-w-3xl mx-auto mt-12 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
        Skills
      </h1>

      {/* Divider */}
      <div className="mt-2 h-px w-12 bg-black/20 dark:bg-white/20" />

      <div className="mt-6 flex flex-wrap gap-2 text-sm sm:text-base text-black/80 dark:text-white/80">
        {techStack.map((tech) => (
          <CustBut
            key={tech}
            name={tech}
            outline
            text="text-black/70 dark:text-white/70"
            border="border-black/20 dark:border-white/20"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
