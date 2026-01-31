import CustBut from "../Utils/CustBut";

interface WorkDetailsProps {
  companyName: string;
  role: string;
  from: string;
  to: string;
  description: string[];
  skills?: string[];
}

const WorkDetails = ({
  companyName,
  role,
  from,
  to,
  description,
  skills,
}: WorkDetailsProps) => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 border-b border-black/10 dark:border-white/10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-black dark:text-white">
          {companyName}
        </h3>

        <span className="text-xs text-black/60 dark:text-white/60">
          {from} — {to}
        </span>
      </div>

      <p className="mt-1 text-sm text-black/70 dark:text-white/70">
        {role}
      </p>

      {/* Description */}
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-black/80 dark:text-white/80">
        {description.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/60 dark:bg-white/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Skills */}
      {skills && skills.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <CustBut
              key={index}
              name={skill}
              outline
              text="text-black/70 dark:text-white/70"
              border="border-black/20 dark:border-white/20"
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default WorkDetails;
