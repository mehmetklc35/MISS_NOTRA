import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Biz Kimiz?
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Gelinlik sektöründe yılların tecrübesiyle, en özel gününüzde hayallerinizi gerçeğe dönüştürmek için buradayız. Özel tasarımlarımız ve kaliteli işçiliğimizle size en iyi hizmeti sunuyoruz.
        </motion.p>
        <motion.img 
          src="/about-image.jpg"
          alt="Hakkımızda"
          className="mt-8 mx-auto rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          width={600}
        />
      </div>
    </section>
  );
};

export default About;
