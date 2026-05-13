import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const achievements = [
  { name: "Q2 2025 IMPACT Award", provider: "Zelis Healthcare", icon: FiAward },
  { name: "Q2 2024 IMPACT Award", provider: "Zelis Healthcare", icon: FiAward },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm tracking-widest uppercase font-body mb-2">Recognition</p>
          <h2 className="text-4xl md:text-8xl font-heading font-black text-foreground tracking-tighter">Achievements</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.name}
              className="flex items-center gap-6 rounded-[1.5rem] bg-card border border-border p-6 cursor-pointer card-3d-hover shadow-lg group overflow-hidden relative"
              initial={{ opacity: 0, y: 20, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 blur-3xl -z-10 rounded-full group-hover:bg-accent/20 transition-all duration-700" />
              <motion.div
                className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shrink-0 shadow-lg card-3d-content"
                whileHover={{ rotateY: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "anticipate" }}
              >
                <achievement.icon className="text-accent-foreground" size={24} />
              </motion.div>
              <div className="card-3d-content">
                <p className="text-foreground font-heading font-black text-xs uppercase tracking-wider leading-relaxed">{achievement.name}</p>
                <p className="text-accent font-heading font-bold text-[10px] uppercase tracking-[0.2em] mt-2 opacity-80">{achievement.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
