import { motion } from "framer-motion";
import { FiLayers, FiCloud, FiUsers, FiCpu, FiExternalLink, FiZap, FiShield, FiBriefcase } from "react-icons/fi";

const projects = [
  {
    icon: FiBriefcase,
    title: "Healthcare Pricing Engine Validation",
    description: "Optimized regression scenario coverage by generating AI-assisted edge-case test variations using Claude-integrated workflows, strengthening pricing-rule validation accuracy across multi-service pipelines.",
    tags: ["Postman", "Claude AI", "SQL", "Healthcare IT", "API Testing"],
    highlights: [
      "Engineered structured API comparison checks using Postman collections to verify payer-provider rate calculation responses across staging environments.",
      "Strengthened PHI-safe workflow validation by executing controlled SQL-based dataset sampling across claims-pricing transformations."
    ],
    image: "/projects/healthcare.png",
  },
  {
    icon: FiZap,
    title: "Payment Gateway Transaction Workflow Validation",
    description: "Stabilized checkout transaction validation coverage by constructing reusable API request validation suites in Postman targeting payment authorization and settlement workflows.",
    tags: ["Postman", "SQL", "Azure DevOps", "Payment Gateway", "Regression Testing"],
    highlights: [
      "Investigated UI-to-database synchronization gaps using SQL-backed transaction verification queries, improving alignment between frontend and backend records.",
      "Expanded cross-browser execution reliability by designing structured workflow validation paths in Azure DevOps test repositories."
    ],
    image: "/projects/payment.png",
  },
  {
    icon: FiShield,
    title: "Enterprise Application Integration Testing",
    description: "Mapped acceptance-criteria dependencies into traceable functional validation paths within Azure DevOps, improving early-stage requirements coverage during feature onboarding.",
    tags: ["Azure DevOps", "JIRA", "Postman", "SDLC", "Agile"],
    highlights: [
      "Examined service-response structure integrity using Postman-based endpoint validation checks supporting early integration readiness.",
      "Organized defect reproduction evidence through structured JIRA documentation alignment with execution steps, improving troubleshooting efficiency."
    ],
    image: "/projects/enterprise.png",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring" }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-xl card-3d-content">
                  <project.icon className="text-accent-foreground" size={24} />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 card-3d-content">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <FiExternalLink className="text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
                </div>
                <p className="text-muted-foreground font-body text-base mb-6 leading-relaxed">{project.description}</p>

                <ul className="space-y-3 mb-8">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-sm font-heading font-semibold text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 text-xs font-heading font-bold rounded-xl bg-accent/5 text-accent border border-accent/10 hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
