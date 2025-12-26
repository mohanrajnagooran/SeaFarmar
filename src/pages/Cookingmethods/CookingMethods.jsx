import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flame, Wind, Droplets, ChefHat } from "lucide-react";

export default function CookingMethods() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredMethod, setHoveredMethod] = useState(null);

  const methods = [
    {
      icon: Flame,
      title: "Grilling",
      description:
        "High-heat cooking creates a delicious smoky char and caramelized exterior.",
      tips: [
        "Preheat grill to medium-high (375–450°F)",
        "Brush grates with oil to prevent sticking",
        "Cook 4–5 minutes per side for 1-inch thickness",
        "Let fish rest 3 minutes before serving",
      ],
      bestFor: "Salmon, Tuna, Shrimp, Lobster",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ChefHat,
      title: "Pan-Searing",
      description:
        "Quick cooking that creates a golden crust while keeping the inside tender.",
      tips: [
        "Pat seafood completely dry",
        "Heat pan until oil shimmers",
        "Do not move seafood until crust forms",
        "Cook 2–3 minutes per side",
      ],
      bestFor: "Scallops, White Fish, Salmon",
      color: "from-amber-500 to-yellow-500",
    },
    {
      icon: Wind,
      title: "Baking",
      description:
        "Gentle, even cooking that maintains moisture and infused flavors.",
      tips: [
        "Preheat oven to 400°F (200°C)",
        "Season with herbs and lemon",
        "Bake 10–15 minutes",
        "Fish flakes easily when done",
      ],
      bestFor: "Whole Fish, Fillets",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Droplets,
      title: "Steaming",
      description:
        "Healthy method that preserves nutrients and delicate flavors.",
      tips: [
        "Bring water to a rolling boil",
        "Place seafood in steamer basket",
        "Cover tightly and steam 5–8 minutes",
        "Add aromatics like ginger",
      ],
      bestFor: "Mussels, Clams, Delicate Fish",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section id="cooking" className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-400 mb-4">
            Expert Guidance
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Master Cooking{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Techniques
            </span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Learn professional cooking methods to bring out the best flavors and
            textures in your seafood.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                onMouseEnter={() => setHoveredMethod(index)}
                onMouseLeave={() => setHoveredMethod(null)}
                className="relative bg-slate-800/80 border border-slate-700/50 rounded-3xl overflow-hidden"
              >
                {/* Header */}
                <div
                  className={`p-8 bg-gradient-to-br ${method.color}`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: hoveredMethod === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-white text-2xl font-semibold">
                        {method.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        Best for: {method.bestFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-300 mb-6">
                    {method.description}
                  </p>

                  <div>
                    <p className="text-orange-400 mb-3 font-medium">
                      Expert Tips
                    </p>
                    <ul className="space-y-3">
                      {method.tips.map((tip, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-400 text-sm"
                        >
                          <span
                            className={`w-6 h-6 mr-3 rounded-lg bg-gradient-to-br ${method.color} text-white flex items-center justify-center text-xs`}
                          >
                            {idx + 1}
                          </span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1552058091-1a614f470415?auto=format&fit=crop&w=1400&q=80"
            alt="Chef cooking seafood"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-3xl font-semibold mb-2">
              Professional Techniques
            </h3>
            <p className="text-gray-300">
              Learn from expert chefs and master seafood preparation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
