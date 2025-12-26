import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Brain, Bone, Shield, Zap, Eye } from "lucide-react";

export default function Advantages() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const advantages = [
    {
      icon: Heart,
      title: "Heart Health",
      description:
        "Omega-3 fatty acids reduce inflammation and lower cardiovascular disease risk.",
      stats: "36% reduction in heart disease risk",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Brain Power",
      description:
        "Essential DHA supports cognitive function, memory, and brain development.",
      stats: "Improves memory by up to 25%",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Zap,
      title: "Energy Boost",
      description:
        "High-quality protein and B vitamins provide sustained energy throughout the day.",
      stats: "20g+ protein per serving",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Bone,
      title: "Strong Bones",
      description:
        "Rich in vitamin D and calcium for optimal bone health and density.",
      stats: "45% of daily vitamin D",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Immune Support",
      description:
        "Selenium, zinc, and antioxidants strengthen your immune system.",
      stats: "70% of daily selenium needs",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Eye,
      title: "Vision Health",
      description:
        "Omega-3s and vitamin A support eye health and reduce macular degeneration.",
      stats: "Reduces AMD risk by 30%",
      color: "from-teal-500 to-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-400/30 rounded-full text-orange-600 mb-4">
            Health Benefits
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Incredible Health{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Advantages
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the science-backed benefits of adding premium seafood to
            your diet.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition"
              >
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${advantage.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {advantage.description}
                </p>

                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm text-white bg-gradient-to-r ${advantage.color}`}
                >
                  {advantage.stats}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
        >
          <div className="px-8 py-16 grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2–3x", label: "Weekly servings recommended" },
              { value: "1000mg+", label: "Omega-3 per serving" },
              { value: "25g", label: "Lean protein per meal" },
              { value: "100%", label: "Natural & sustainable" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
