const experiences = [
 {
    period: "Jul 2025 — Present",
    role: "Freelance Full Stack Developer & Data Solutions Provider",
    company: "AIBL (Remote)",
    description:
      "Providing freelance IT services in web development, Python, and data solutions for multiple clients. Developed scalable MERN applications, delivered Python-based automation and backend solutions, and worked on data analytics projects. Also handled API integration, performance optimization, and client-focused delivery, demonstrating versatility and adaptability.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],

    current: false,
  },
  {
    period: "Aug 2024 — Nov 2024",
    role: "Web Developer Intern",
    company: "AIBL (Remote)",
    description:
      "Built and deployed responsive MERN applications, developed admin dashboards, and delivered production-ready websites. Also contributed to Python tasks, documentation, and cross-functional support, showcasing versatility and adaptability.",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],

    current: false,
  },

  {
    period: "2024",
    role: "Full Stack Web Development Intern",
    company: "PNY Trainings (NAVTTC)",
    description:
      "Completed MERN Stack training with hands-on projects involving APIs, authentication, database management, debugging, and Git/GitHub workflows.",

    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Git",
      "GitHub"
    ],

    current: false,
  },

  {
    period: "2021 — 2025",
    role: "BS Computer Science",
    company: "University of Management and Technology",
    description:
      "Built strong foundations in software engineering, data structures, algorithms, and developed academic MERN stack projects including a smart home services web application.",

    technologies: [
      "C++",
    "Python",
    "JavaScript",
    "OOP",
    "Data Structures & Algorithms",
    "SQL",
     "Database Systems",
    "Software Engineering",
    "Operating Systems",
    "Computer Networks",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Python",
      "C++"
    ],

    current: false,
  },
];
  
  export const Experience = () => {
    return (
      <section id="experience" className="py-32 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96
         h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
  
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm
             font-medium tracking-wider uppercase animate-fade-in"
            >
              Career Journey
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold
             mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground"
            >
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                speaks volumes.
              </span>
            </h2>
  
            <p
              className="text-muted-foreground
             animate-fade-in animation-delay-200"
            >
              A journey of growth from a Computer Science student to a Full Stack Developer,
               building a strong foundation in software development through education
               and hands-on projects using the MERN stack.
            </p>
          </div>
  
          {/* Timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
  
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                    )}
                  </div>
  
                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };