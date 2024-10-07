import React from 'react';
import { motion } from 'framer-motion';
import Human from '../../assets/img/human.png';
import Hum from '../../assets/img/human-2.png';

const Content = () => {
  return (
    <>
      {/* Desktop View */}
      <section className="bg-white py-2 hidden lg:block">
        <div className="ml-20 px-4 flex items-center">
        
          <motion.div
            className="w-[60%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-pink-600 text-2xl text-poppins mb-4">
              Transformez votre vision en réalité numérique !
            </h2>
            <h1 className="text-7xl font-semibold text-gray-900 max-w-[800px] text-poppins mb-14">
              L’agence digital dédié aux entreprises
            </h1>
            <p className="text-lg text-black-600 mb-8 max-w-[700px] text-poppins font-medium text-justify">
              AGENCIFY est une agence française spécialisée dans le Développement Web, qui identifie vos besoins pour vous accompagner dans la création de votre site sur-mesure et dans vos projets digitaux.
            </p>
            <div className="space-x-4">
              <motion.button
                className="bg-pink-600 text-white px-6 py-3 w-[35%] rounded-full text-poppins hover:bg-pink-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Recevoir nos offres
              </motion.button>
              <motion.button
                className="border border-pink-600 text-pink-600 px-6 py-3 w-[35%] rounded-full text-poppins hover:bg-pink-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prendre un rendez-vous
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="relative w-[60%] flex justify-center items-center mr-36"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={Human} alt="Digital Agency Professional" className="image-mask" />

            <motion.div
              className="absolute right-0 top-1/4 bg-white shadow-lg rounded-xl p-4 w-[250px] mt-20 mr-28"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute rounded-lg bottom-0 left-0 transform translate-y-1/2 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-l-[20px] border-l-white "></div>
              <p className="text-black-600 italic text-xs font-poppins">
                "Une expérience parfaite pour obtenir mon site internet. Le processus a été rapide et efficace."
              </p>

              <div className="flex space-x-1">
                {[...Array(4)].map((_, index) => (
                  <svg key={index} className="w-4 h-4 mt-2 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.928 8.636h9.072l-7.343 5.336 2.928 8.636L12 18.272l-7.585 5.336 2.928-8.636L0 10.636h9.072L12 2z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 mt-2" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
                      <stop offset="50%" style={{ stopColor: '#D0006B', stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: '#A0A0A0', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path d="M12 2l2.928 8.636h9.072l-7.343 5.336 2.928 8.636L12 18.272l-7.585 5.336 2.928-8.636L0 10.636h9.072L12 2z" fill="url(#gradient)" />
                </svg>
              </div>
              <div className="flex items-center mt-4">
                <img src={Hum} alt="Testimonial User" className="h-8 w-8 rounded-full mr-2" />
                <div>
                  <p className="font-semibold text-sm">Thibault Ernout</p>
                  <p className="text-xs text-gray-500">Client du 9 Juin 2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mobile View */}
      <section className="bg-white py-6 block lg:hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-pink-600 text-xl text-poppins mb-2"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformez votre vision en réalité numérique !
          </motion.h2>
          <motion.h1
            className="text-4xl font-semibold text-gray-900 text-poppins mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            L’agence digital dédié aux entreprises
          </motion.h1>

          <motion.div className="mt-10"
            initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img src={Human} alt="Digital Agency Professional" className="image--m-mask" />

            <div className="space-y-4">
            <button className="bg-pink-600 text-white w-[80%] px-6 py-3 rounded-full text-poppins hover:bg-pink-700">
              Recevoir nos offres
            </button>
            <button className="border border-pink-600 text-pink-600 w-[80%] px-6 py-3 rounded-full text-poppins hover:bg-pink-100">
              Prendre un rendez-vous
            </button>
          </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Content;
