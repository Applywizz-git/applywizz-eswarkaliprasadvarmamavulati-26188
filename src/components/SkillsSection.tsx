import { motion } from "framer-motion";
import {
  FiPieChart, FiCode, FiCloud, FiShield, FiServer, FiZap, FiDatabase, FiActivity, FiBarChart2, FiCheckCircle, FiBriefcase
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCheckCircle,
    title: "Quality Engineering",
    skills: ["Functional Testing", "Manual Testing", "API Testing", "Backend Data Validation", "Regression Testing", "Integration Testing", "System Testing", "End-to-End Testing", "Risk-Based Testing", "Smoke Testing", "Sanity Testing", "User Acceptance Testing (UAT)"],
  },
  {
    icon: FiActivity,
    title: "API Validation & Service Testing",
    skills: ["REST API Testing", "Postman", "Bruno", "JSON Validation", "XML Validation", "HTTP Protocol Testing", "Authentication Flow Validation", "Request/Response Schema Verification"],
  },
  {
    icon: FiDatabase,
    title: "Data Layer & Database Verification",
    skills: ["SQL Querying", "Complex Data Validation", "Data Integrity Testing", "Relational Database Testing", "MySQL", "Oracle", "SQL Server"],
  },
  {
    icon: FiShield,
    title: "Defect Tracking & Test Governance",
    skills: ["JIRA", "Azure DevOps (ADO)", "Requirements Traceability Matrix (RTM)", "Test Case Design", "Defect Lifecycle Management", "Test Execution Tracking", "Confluence Documentation"],
  },
  {
    icon: FiCloud,
    title: "Cloud Environments",
    skills: ["Microsoft Azure", "Amazon Web Services (AWS)", "Cloud Migration Validation", "Multi-Environment Testing Support"],
  },
  {
    icon: FiBriefcase,
    title: "Healthcare Systems",
    skills: ["Healthcare Payer Platforms", "Claims Processing Validation", "Provider-Payer Workflow Testing", "HIPAA Compliance Validation", "PHI Data Handling Assurance", "Healthcare EDI Exposure"],
  },
  {
    icon: FiZap,
    title: "Automation Collaboration & AI-Assisted QA",
    skills: ["Playwright Framework Support (C#)", "AI-Assisted Test Case Generation", "AI-Augmented QA Workflows", "Intelligent Test Authoring Support"],
  },
  {
    icon: FiCode,
    title: "Engineering Collaboration",
    skills: ["Git", "GitHub", "Visual Studio", "VS Code"],
  },
  {
    icon: FiPieChart,
    title: "Delivery Methodologies & Release Support",
    skills: ["Agile Scrum", "SDLC", "STLC", "Sprint Testing Support", "Test Strategy Contribution", "Release Validation Coordination"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Expertise</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="rounded-3xl bg-card border border-border p-8 card-3d-hover group"
              initial={{ opacity: 0, y: 40, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-lg card-3d-content"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <cat.icon className="text-accent-foreground" size={28} />
                </motion.div>
                <h3 className="text-xl font-heading font-black text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 card-3d-content">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-heading font-bold rounded-lg bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                    whileHover={{ scale: 1.1, translateZ: 10 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
