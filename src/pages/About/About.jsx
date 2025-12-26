import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Anchor, Timer, ThumbsUp } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Anchor,
      title: "Ocean to Table",
      description:
        "Direct partnerships with trusted fishermen ensure the freshest catch every single day.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "Rigorous quality control and sustainable practices for premium seafood you can trust.",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: Timer,
      title: "Fast Delivery",
      description:
        "Same-day processing with temperature-controlled shipping to preserve peak freshness.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ThumbsUp,
      title: "100% Satisfaction",
      description:
        "Your happiness is guaranteed. We stand behind every product with our promise.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Top content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-400">
              About Seaformer
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Bringing Ocean&apos;s Bounty <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                To Your Table
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              For over 20 years, Seaformer has been the premier destination for
              seafood lovers seeking exceptional quality and sustainable
              choices.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              Every product is carefully inspected, responsibly sourced, and
              delivered fresh with pride.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1710442995783-3640c50c4ab3?auto=format&fit=crop&w=900&q=80"
              alt="Fishing boat"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent rounded-2xl" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-3xl opacity-20"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition"
              >
                <div
                  className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
