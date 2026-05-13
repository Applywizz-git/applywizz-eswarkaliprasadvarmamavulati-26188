import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FiZap, FiSettings, FiCode, FiCloud, FiShield } from "react-icons/fi";

const highlights = [
  { icon: FiCode, label: "API Testing (Postman/Bruno)" },
  { icon: FiSettings, label: "SQL Backend Validation" },
  { icon: FiCloud, label: "Cloud (Azure/AWS)" },
  { icon: FiShield, label: "HIPAA Compliance" },
  { icon: FiZap, label: "Agile/SDLC Methodology" },
];

const counters = [
  { target: 5, suffix: "+", label: "Years Experience" },
  { target: 30, suffix: "%+", label: "Reduced Defect Leakage" },
  { target: 60, suffix: "%", label: "Efficiency Improvement" },
];

const Counter = ({ target, suffix, label }: { target: number; suffix: string; label: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target > 0 ? duration / target : 100;
    const timer = setInterval(() => {
      start++;
      setCount((prev) => (start <= target ? start : prev));
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 md:p-10 rounded-[2.5rem] bg-card border border-border card-3d-hover shadow-xl"
      initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
    >
      <p className="text-4xl md:text-7xl font-heading font-black text-accent drop-shadow-md card-3d-content">
        {count}{suffix}
      </p>
      <p className="text-muted-foreground font-heading font-bold text-sm mt-4 uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-[0.4em] uppercase font-heading font-black mb-4">About Me</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">
            Ensuring Healthcare Platform Quality
          </h2>
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed text-left space-y-6">
            <p>
              • Senior QA Analyst with 5+ years of experience testing healthcare payer platforms, specializing in functional, API, and SQL-based backend validation across 15+ services supporting claims and pricing workflows in HIPAA-regulated environments.
            </p>
            <p>
              • Performed REST API validation using Postman and Bruno and backend data verification with complex SQL queries while coordinating regression testing in Azure DevOps and JIRA, reducing production defect leakage by 30%+.
            </p>
            <p>
              • Supported Azure-to-AWS migration validation by reviewing 250+ regression executions and verifying cross-environment service readiness, contributing to 60-70% processing efficiency improvement post-release.
            </p>
            <p>
              • Improved regression coverage using AI-assisted test-design workflows in VS Code while collaborating with developers and product owners in Agile sprints to strengthen release readiness across healthcare integrations.
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <div className="h-1 w-20 bg-accent rounded-full" />
            <div className="h-1 w-4 bg-accent/30 rounded-full" />
            <div className="h-1 w-2 bg-accent/10 rounded-full" />
          </div>
        </motion.div>

        {/* Highlights with 3D hover */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-20">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center p-8 rounded-[2rem] bg-card border border-border cursor-pointer card-3d-hover group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500 card-3d-content shadow-inner"
              >
                <item.icon size={24} />
              </motion.div>
              <p className="text-foreground font-heading font-black text-xs text-center uppercase tracking-wider card-3d-content">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Counters with 3D */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {counters.map((c) => (
            <Counter key={c.label} target={c.target} suffix={c.suffix} label={c.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
