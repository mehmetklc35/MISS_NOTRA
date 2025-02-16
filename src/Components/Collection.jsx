import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dresses = [
  { id: 1, name: "A Kesim", image: "/images/a-kesim.jpg", category: "A Kesim" },
  {
    id: 2,
    name: "Prenses Kesim",
    image: "/images/prenses-kesim.jpg",
    category: "Prenses Kesim",
  },
  {
    id: 3,
    name: "Balık Kesim",
    image: "/images/balik-kesim.jpg",
    category: "Balık Kesim",
  },
  {
    id: 4,
    name: "Helen Kesim",
    image: "/images/helen-kesim.jpg",
    category: "Helen Kesim",
  },
];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredDresses =
    selectedCategory === "Tümü"
      ? dresses
      : dresses.filter((dress) => dress.category === selectedCategory);

  return (
    <section id="collection" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Gelinlik Koleksiyonumuz
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            "Tümü",
            "A Kesim",
            "Prenses Kesim",
            "Balık Kesim",
            "Helen Kesim",
          ].map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gray-800 text-white shadow-md scale-105"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence>
            {filteredDresses.map((dress) => (
              <motion.div
                key={dress.id}
                className="shadow-lg rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={dress.image}
                  alt={dress.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold">{dress.name}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Collection;

