import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean and maintainable code while building scalable web applications using modern technologies.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Focusing on building efficient and optimized applications that provide smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with other developers, sharing ideas, and continuously learning from the developer community.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies like Cloud Computing, Docker, and DevOps to grow as a developer.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning and building,
              <span className="font-serif italic font-normal text-white">
                {" "}one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm Suraj, a third-year Information Technology student with a strong
                interest in software development and modern web technologies.
                I enjoy building practical projects that help me understand how
                real-world applications work.
              </p>

              <p>
                I am currently developing skills in the MERN stack and exploring
                technologies like Docker and Cloud Computing. Along with web
                development, I regularly practice Data Structures and Algorithms
                to improve my problem-solving and logical thinking skills.
              </p>

              <p>
                I am also learning C and C++ to strengthen my programming
                foundation. My goal is to build scalable web applications and
                gradually expand my expertise into DevOps and cloud-based
                technologies.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to continuously learn, build impactful projects,
                and grow as a developer while exploring modern technologies
                in web development, cloud computing, and DevOps."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};