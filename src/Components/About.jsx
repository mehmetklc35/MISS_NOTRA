import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hayallerinizi Gerçeğe Dönüştürüyoruz
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "Her gelin bir masalı hak eder..."  
          <br />
          Yılların verdiği deneyim ve tutku ile, özel tasarımlarımızla en güzel anınıza eşlik ediyoruz. El işçiliğiyle özenle hazırlanan gelinliklerimiz, zarafeti ve şıklığı bir araya getiriyor.
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

