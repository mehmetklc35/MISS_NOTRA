
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <motion.div 
        className="relative text-center text-white px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">MISS-NOTRA'ya hoşgeldiniz..</h1>
        <p className="mt-4 text-lg md:text-xl">Zarafetin ve şıklığın buluştuğu özel koleksiyonlarımızı keşfedin.</p>
        <motion.button 
          className="mt-6 px-6 py-3 bg-white text-black rounded-xl text-lg font-semibold shadow-lg hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Koleksiyonu İncele
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
