import { motion } from "framer-motion";

const Hero = () => {
  const scrollToCollection = () => {
    const collectionSection = document.getElementById("collection");
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/images/hero-image.webp"
          alt="Hero"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <motion.div
        className="relative text-center text-white px-6 md:px-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          MISS-NOTRA'ya Hoş Geldiniz
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl mx-auto">
          Zarafetin ve şıklığın buluştuğu özel koleksiyonlarımızı keşfedin.
        </p>

        <motion.button
          onClick={scrollToCollection}
          className="mt-6 px-8 py-4 bg-white/80 text-black rounded-2xl text-lg font-semibold shadow-xl hover:bg-white transition backdrop-blur-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Koleksiyonu İncele
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
