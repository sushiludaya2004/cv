const AboutMe = () => {
  return (
    <section className="max-w-3xl mx-auto mt-12 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black dark:text-white">
        About Me
      </h1>

      {/* Divider */}
      <div className="mt-2 h-px w-12 bg-black/20 dark:bg-white/20" />

      {/* Content */}
      <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-black/80 dark:text-white/80">
        <p>
          I&apos;m an engineer with a deep passion for computer science. I love
          learning from first principles—always asking{" "}
          <em className="font-medium text-black dark:text-white">
            “why does this happen this way?”
          </em>
          . I started in biology, switched to CS, and even failed C in my first
          semester. Today, I&apos;m a C/C++ developer, still learning every day
          and exploring how real systems and products work.
        </p>

        <p>
          Building SaaS products to understand{" "}
          <em className="font-medium text-black dark:text-white">
            how systems work, from backend architecture to user interactions
          </em>
          . I&apos;m not a perfect problem solver, but I improve every
          day—solving problems, reading blogs, and learning from experience. For
          me,{" "}
          <em className="font-medium text-black dark:text-white">
            building is learning, and learning is building
          </em>
          .
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
