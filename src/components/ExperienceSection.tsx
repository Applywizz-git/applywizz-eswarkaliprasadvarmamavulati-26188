import { motion } from "framer-motion";
import { useState } from "react";
import { FiBriefcase, FiChevronDown, FiChevronUp, FiMapPin, FiCalendar, FiTrendingUp } from "react-icons/fi";

const experiences = [
  {
    title: "Senior QA Analyst",
    company: "Zelis Healthcare",
    location: "Atlanta, GA",
    period: "Mar 2021 - Present",
    highlights: [
      "Validated payer-platform functional requirements designing structured regression and integration test scenarios in JIRA and ADO, improving requirement traceability across 15+ services",
      "Simulated REST endpoint workflows using Postman and Bruno to verify authentication logic and schema compliance, reducing production defect leakage by 32%",
      "Reconciled provider and claims transformation logic through complex SQL-based backend validations, ensuring end-to-end data integrity across enterprise pricing optimization pipelines",
      "Coordinated regression execution during Azure-to-AWS migration testing by reviewing 250+ automated test outcomes, contributing to a 60-70% improvement in platform processing efficiency",
      "Protected healthcare release outcomes by driving defect triage in JIRA, safeguarding ~$5-6M in revenue and improving resolution turnaround by 28%",
      "Ensured HIPAA-compliant validation of PHI-sensitive workflows across environments, maintaining regulatory alignment across enterprise delivery pipelines",
      "Verified cross-environment deployment consistency across Azure and AWS infrastructure layers by validating service connectivity and configuration readiness",
      "Accelerated regression readiness by leveraging AI-assisted scenario generation with Claude in VS Code to expand API edge-case validation coverage",
    ],
  },
  {
    title: "QA Analyst",
    company: "Cloud Mellow",
    location: "Houston, TX (Remote)",
    period: "Dec 2020 - Feb 2021",
    highlights: [
      "Executed end-to-end functional validation across e-commerce checkout and payment workflows, reducing customer-reported failures by approximately 22%",
      "Verified REST service request and response payload accuracy using Postman across payment gateway integrations, improving transaction reliability",
      "Examined cross-browser purchasing workflows to identify UI inconsistencies affecting order-completion success rates across production-bound release candidates",
      "Tracked sprint-level defects within JIRA workflows while collaborating with developers to reproduce issues, improving resolution turnaround",
      "Reconciled backend order-processing datasets using SQL validation queries to confirm synchronization between application and database layers",
      "Aligned acceptance-criteria coverage with functional test execution during Agile sprint ceremonies, improving release predictability",
      "Strengthened regression repeatability by expanding reusable functional test libraries within Azure DevOps repositories",
      "Documented structured execution evidence and reproducible defect steps within Confluence to support cross-team troubleshooting",
    ],
  },
  {
    title: "QA Analyst Intern",
    company: "Colsh Consultants",
    location: "Monmouth Junction, NJ",
    period: "Jul 2020 - Dec 2020",
    highlights: [
      "Interpreted application requirements and converted acceptance criteria into structured functional validation scenarios supporting early sprint-level testing",
      "Constructed manual test cases aligned with UI workflow validation using Azure DevOps repositories, improving requirement coverage consistency",
      "Cross-validated transactional workflows using SQL queries to confirm backend persistence accuracy across relational database layers",
      "Parsed REST API responses through Postman-based validation activities to verify schema compliance across early integration environments",
      "Collaborated with QA engineers and developers during JIRA-based defect triage sessions, improving issue reproduction clarity",
      "Supported regression execution readiness by confirming acceptance-criteria alignment with structured functional coverage",
    ],
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      className="rounded-[2rem] bg-card border border-border overflow-hidden card-3d-hover shadow-xl relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? 15 : -15 }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, type: "spring" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 md:gap-6">
          <motion.div
            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
            whileHover={{ rotateY: 180, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <FiBriefcase className="text-accent-foreground" size={24} />
          </motion.div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-heading font-black text-foreground group-hover:text-accent transition-colors leading-tight">{exp.title}</h3>
            <p className="text-accent font-heading font-bold text-sm md:text-base mt-2 tracking-wide uppercase">{exp.company}</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-3 text-muted-foreground text-[10px] md:text-xs font-heading font-bold uppercase tracking-widest justify-center sm:justify-start">
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiCalendar size={12} className="text-accent" />{exp.period}</span>
              <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-full"><FiMapPin size={12} className="text-accent" />{exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-border flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 shrink-0"
          animate={{ rotate: expanded ? 180 : 0, scale: expanded ? 1.1 : 1 }}
        >
          <FiChevronDown size={20} />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-10 pt-2 card-3d-content">
          <div className="h-px w-full bg-border mb-8" />
          <ul className="grid md:grid-cols-2 gap-4">
            {exp.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-muted-foreground font-body text-base group/item"
                initial={{ opacity: 0, y: 10 }}
                animate={expanded ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-8 h-8 rounded-lg bg-accent/5 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-accent group-hover/item:text-accent-foreground transition-all">
                  <FiTrendingUp size={16} />
                </div>
                <span className="group-hover/item:text-foreground transition-colors">{h}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] -z-10 rounded-full" />
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">Journey</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
