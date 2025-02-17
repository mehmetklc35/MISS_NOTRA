import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-3xl font-semibold">MISS_NOTRA</h3>
            <p className="text-sm mt-2">Gelinlik Modasında Zarafetin Adı</p>
          </div>
          <div className="space-x-6">
            <a
              href="https://facebook.com"
              className="text-white hover:text-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white hover:text-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white hover:text-gray-300 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-semibold">Hızlı Bağlantılar</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Kullanım Şartları
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Adres</h4>
            <p className="mt-4"> İzmir, Türkiye</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Bizi Takip Edin</h4>
            <p className="mt-4">
              Yeni koleksiyonlar, indirimler ve etkinlikler için bizi sosyal
              medyada takip edin.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">İletişim</h4>
            <p className="mt-4">E-posta: info@missnotra.com</p>
            <p>Telefon: 059595959595</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-sm">
            &copy; 2025 MISS_NOTRA. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
