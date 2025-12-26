import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Info } from "lucide-react";

export default function Products() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: "Atlantic Salmon",
      image:
        "https://images.unsplash.com/photo-1766232563961-323612b37a6d?auto=format&fit=crop&w=900&q=80",
      uses: "Grilling, Baking, Pan-searing, Poaching",
      ingredients: "Omega-3, Protein, Vitamin D, B Vitamins",
      description:
        "Rich, buttery salmon with a firm texture perfect for any cooking method.",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Tiger Prawns",
      image:
        "https://images.unsplash.com/photo-1674066621842-8c830e392618?auto=format&fit=crop&w=900&q=80",
      uses: "Stir-frying, Grilling, Steaming, BBQ",
      ingredients: "Protein, Selenium, Vitamin B12, Zinc",
      description:
        "Large, succulent prawns with sweet, delicate meat.",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Fresh Lobster",
      image:
        "https://images.unsplash.com/photo-1585546247643-14e9deb7c998?auto=format&fit=crop&w=900&q=80",
      uses: "Boiling, Grilling, Steaming, Broiling",
      ingredients: "Vitamin B12, Zinc, Copper",
      description:
        "Premium lobster with sweet, tender meat.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Yellowfin Tuna",
      image:
        "https://images.unsplash.com/photo-1562053923-52d3ebb09d31?auto=format&fit=crop&w=900&q=80",
      uses: "Sashimi, Grilling, Searing, Tataki",
      ingredients: "Omega-3, Lean Protein, Selenium",
      description:
        "Firm, meaty tuna ideal for steaks and sushi-grade dishes.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Dungeness Crab",
      image:
        "https://images.unsplash.com/photo-1650081486942-818b77296bde?auto=format&fit=crop&w=900&q=80",
      uses: "Boiling, Steaming, Crab cakes",
      ingredients: "Protein, Vitamin B12, Copper",
      description:
        "Sweet, delicate crab meat with rich flavor.",
      color: "from-amber-500 to-yellow-500",
    },
    {
      name: "Fresh Oysters",
      image:
        "https://images.unsplash.com/photo-1661505748265-e8e7f2fc6f8e?auto=format&fit=crop&w=900&q=80",
      uses: "Raw, Grilled, Baked, Fried",
      ingredients: "Zinc, Iron, Omega-3",
      description:
        "Briny oysters harvested fresh from sustainable farms.",
      color: "from-teal-500 to-green-500",
    },
  ];

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 bg-orange-500/10 border border-orange-400/30 rounded-full text-orange-600">
            Our Products
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Premium Seafood Selection
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Handpicked seafood varieties chosen for exceptional flavor and
            nutritional value.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />

                <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold">
                  {product.name}
                </h3>

                <button
                  onClick={() =>
                    setSelectedProduct(
                      selectedProduct === index ? null : index
                    )
                  }
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center"
                >
                  <Info className="text-white w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                <button
                  onClick={() =>
                    setSelectedProduct(
                      selectedProduct === index ? null : index
                    )
                  }
                  className={`w-full py-3 rounded-xl transition ${
                    selectedProduct === index
                      ? `bg-gradient-to-r ${product.color} text-white`
                      : "bg-slate-100 hover:bg-slate-200"
                  }`}
                >
                  {selectedProduct === index
                    ? "Hide Details"
                    : "View Details"}
                </button>
              </div>

              {/* Expand */}
              <AnimatePresence>
                {selectedProduct === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-slate-50 border-t p-6 space-y-4"
                  >
                    <div>
                      <span
                        className={`inline-block px-3 py-1 mb-2 rounded-full text-sm bg-gradient-to-r ${product.color} text-white`}
                      >
                        Cooking Methods
                      </span>
                      <p className="text-gray-700">{product.uses}</p>
                    </div>
                    <div>
                      <span
                        className={`inline-block px-3 py-1 mb-2 rounded-full text-sm bg-gradient-to-r ${product.color} text-white`}
                      >
                        Key Nutrients
                      </span>
                      <p className="text-gray-700">
                        {product.ingredients}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
