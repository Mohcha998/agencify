import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import magentoLogo from '../../assets/img/magento-logo.png';
import laravelLogo from '../../assets/img/laravel-logo.png';
import wocomLogo from '../../assets/img/woocom-logo.png';
import wordLogo from '../../assets/img/wordpress-logo.png';
import agencifyLogo from '../../assets/img/logo-agencify.png';
import couchLogo from '../../assets/img/couch.png';
import competeLogo from '../../assets/img/compete.png';
import apprLogo from '../../assets/img/appr.png';
import namLogo from '../../assets/img/360.png';
import verified from '../../assets/img/verified.png';
import panah from '../../assets/img/vector.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpertiseOpen, setIsExpertiseOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleExpertise = () => {
    setIsExpertiseOpen(!isExpertiseOpen);
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isExpertiseOpen) setIsExpertiseOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsExpertiseOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="w-full mx-auto pl-4 pr-4 sm:pr-6 lg:pr-8 flex justify-between items-center py-4">
        <Link to="/" className="flex items-center">
          <img src={agencifyLogo} alt="Agencify" className="h-6 w-auto ml-6" />
        </Link>
        {/* Menu burger */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>

        {/* Desktop Navbar */}
        <nav className="hidden lg:flex space-x-8 relative font-poppins font-medium">
            <a href="#" className="text-gray-900 hover:text-pink-600">Accueil</a>
            
            <div className="relative inline-block">
                <button 
                    onClick={toggleExpertise} 
                    className="text-gray-900 hover:text-pink-600 focus:outline-none font-medium flex items-center">
                    Notre expertise
                    <span className="ml-2 relative flex items-center justify-center">
                        <span className={`arrow-icon ${isExpertiseOpen ? 'open' : ''}`}></span>
                    </span>
                </button>
                {isExpertiseOpen && (
                    <div className="absolute left-[-30px] mt-1 w-[250px] bg-white border border-gray-200 rounded-2xl shadow-lg z-10 mx-8">
                        <ul className="py-2 space-y-2 px-2">
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={magentoLogo} alt="Magento" className="h-8 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <span className="font-medium text-gray-900 text-xs">Magento</span>
                                    <p className="text-xxs text-gray-500">Le CMS incontournable</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={wordLogo} alt="WordPress" className="h-8 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <span className="font-medium text-gray-900 text-xs">WordPress</span>
                                    <p className="text-xxs text-gray-500">Le CMS le plus connu</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={laravelLogo} alt="Laravel" className="h-8 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <span className="font-medium text-gray-900 text-xs">Laravel</span>
                                    <p className="text-xxs text-gray-500">Le Framework compétant</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={wocomLogo} alt="WooCommerce" className="h-7 mr-2 w-8" />
                                <div className="min-w-[150px]">
                                    <span className="font-medium text-gray-900 text-xs">WooCommerce</span>
                                    <p className="text-xxs text-gray-500">Création de commerce</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="relative inline-block">
                <button
                    onClick={toggleServices}
                    className="text-gray-900 hover:text-pink-600 focus:outline-none font-medium flex items-center">
                    Nos services
                    <span className={`arrow-icon ml-2 ${isServicesOpen ? 'open' : ''}`}></span>
                </button>
                {isServicesOpen && (
                    <div className="absolute left-[-30px] mt-1 w-[250px] bg-white border border-gray-200 rounded-2xl shadow-lg z-10 mx-8">
                        <ul className="py-2 space-y-2 px-2">
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={apprLogo} alt="Optimisation" className="h-7 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <div className="flex items-center">
                                        <h3 className="font-medium text-gray-900 text-xs">Optimisation</h3>
                                        <div className="flex items-center ml-2 px-2 py-1 bg-green-100 text-green-600 text-xxxs rounded-full">
                                            <img src={verified} alt="Icon" className="h-2 w-2 mr-1" />
                                            <span className='font-medium'>La plus populaire</span>
                                        </div>
                                    </div>
                                    <p className="text-xxs text-gray-500">Web</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={couchLogo} alt="Design graphique" className="h-7 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <h3 className="font-medium text-gray-900 text-xs">Design graphique</h3>
                                    <p className="text-xxs text-gray-500">Web & print</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={namLogo} alt="Développement web" className="h-7 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <h3 className="font-medium text-gray-900 text-xs">Développement web</h3>
                                    <p className="text-xxs text-gray-500">Desktop & Mobile</p>
                                </div>
                            </li>
                            <li className="flex justify-center items-center px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                                <img src={competeLogo} alt="Suivi & support" className="h-7 mr-2 min-w-[30px]" />
                                <div className="min-w-[150px]">
                                    <h3 className="font-medium text-gray-900 text-xs">Suivi & support</h3>
                                    <p className="text-xxs text-gray-500">Dans votre projet</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <a href="#" className="text-gray-900 hover:text-pink-600">A propos</a>
            <a href="#" className="text-gray-900 hover:text-pink-600">Contact</a>
        </nav>
            <button className="hidden lg:flex bg-pink-600 text-white w-56 justify-center px-4 py-2 rounded-full hover:bg-pink-800 font-sans text-sm flex items-center">
                <img src={panah} alt="Icon" className="h-3 w-6 mr-2" />
                Demander un devis
            </button>
        </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-20 px-4 pt-4">
            <div className="flex justify-between items-center">
                <img src={agencifyLogo} alt="Agencify" className="h-6 w-auto" />
                <button onClick={toggleMenu} className="text-3xl text-gray-900">
                &times;
                </button>
            </div>

            <nav className="mt-8 space-y-4">
                <a href="#" className="text-gray-900 hover:text-pink-600 block text-lg border-b border-gray-200 pb-2">Accueil</a>
                <div className="border-b border-gray-200 pb-2">
                    <button onClick={toggleExpertise} className="text-gray-900 hover:text-pink-600 w-full flex justify-between items-center">
                        <span>Notre expertise</span>
                        <span className="ml-2 relative flex items-center justify-center">
                            <span className={`arrow-m-icon ${isExpertiseOpen ? 'open' : ''}`}></span>
                        </span>
                </button>

                {isExpertiseOpen && (
                    <ul className="ml-auto space-y-2 mt-2">
                    <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                        <img src={magentoLogo} alt="Magento" className="h-8 mr-2 min-w-[30px]" />
                        <div className="min-w-[150px]">
                        <span className="font-medium text-gray-900 text-xs">Magento</span>
                        <p className="text-xxs text-gray-500">Le CMS incontournable</p>
                        </div>
                    </li>
                    <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                        <img src={wordLogo} alt="WordPress" className="h-8 mr-2 min-w-[30px]" />
                        <div className="min-w-[150px]">
                        <span className="font-medium text-gray-900 text-xs">WordPress</span>
                        <p className="text-xxs text-gray-500">Le CMS le plus connu</p>
                        </div>
                    </li>
                    <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                        <img src={laravelLogo} alt="Laravel" className="h-8 mr-2 min-w-[30px]" />
                        <div className="min-w-[150px]">
                        <span className="font-medium text-gray-900 text-xs">Laravel</span>
                        <p className="text-xxs text-gray-500">Le Framework compétant</p>
                        </div>
                    </li>
                    <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg">
                        <img src={wocomLogo} alt="WooCommerce" className="h-7 mr-2 w-8" />
                        <div className="min-w-[150px]">
                        <span className="font-medium text-gray-900 text-xs">WooCommerce</span>
                        <p className="text-xxs text-gray-500">Création de commerce</p>
                        </div>
                    </li>
                    </ul>
                )}
                </div>

                <div className="border-b border-gray-200 pb-2">
                    <button onClick={toggleServices} className="text-gray-900 hover:text-pink-600 w-full flex justify-between items-center">
                        <span>Notre expertise</span>
                        <span className="ml-2 relative flex items-center justify-center">
                            <span className={`arrow-m-icon ${isServicesOpen ? 'open' : ''}`}></span>
                        </span>
                     </button>
                {isServicesOpen && (
                    <ul className="ml-auto space-y-2 mt-2">
                        <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                            <img src={apprLogo} alt="Optimisation" className="h-7 mr-2 min-w-[30px]" />
                            <div className="min-w-[150px]">
                                <div className="flex items-center">
                                    <h3 className="font-medium text-gray-900 text-xs">Optimisation</h3>
                                    <div className="flex items-center ml-2 px-2 py-1 bg-green-100 text-green-600 text-xxxs rounded-full">
                                        <img src={verified} alt="Icon" className="h-2 w-2 mr-1" />
                                        <span className='font-medium'>La plus populaire</span>
                                    </div>
                                </div>
                                <p className="text-xxs text-gray-500">Web</p>
                            </div>
                        </li>
                        <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                            <img src={couchLogo} alt="Design graphique" className="h-7 mr-2 min-w-[30px]" />
                            <div className="min-w-[150px]">
                                <h3 className="font-medium text-gray-900 text-xs">Design graphique</h3>
                                <p className="text-xxs text-gray-500">Web & print</p>
                            </div>
                        </li>
                        <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                            <img src={namLogo} alt="Développement web" className="h-7 mr-2 min-w-[30px]" />
                            <div className="min-w-[150px]">
                                <h3 className="font-medium text-gray-900 text-xs">Développement web</h3>
                                <p className="text-xxs text-gray-500">Desktop & Mobile</p>
                            </div>
                        </li>
                        <li className="flex px-2 py-1 hover:bg-gray-100 transition duration-200 ease-in-out rounded-lg border-b border-gray-200">
                            <img src={competeLogo} alt="Suivi & support" className="h-7 mr-2 min-w-[30px]" />
                            <div className="min-w-[150px]">
                                <h3 className="font-medium text-gray-900 text-xs">Suivi & support</h3>
                                <p className="text-xxs text-gray-500">Dans votre projet</p>
                            </div>
                        </li>
                    </ul>
                )}
                </div>
                
                <a href="#" className="text-gray-900 hover:text-pink-600 block text-lg border-b border-gray-200 pb-2">A propos</a>
                <a href="#" className="text-gray-900 hover:text-pink-600 block text-lg border-b border-gray-200 pb-2">Contact</a>
                
                <button className="mt-6 bg-pink-600 text-white w-full py-2 rounded-full hover:bg-pink-800">
                    Demander un devis
                </button>
            </nav>
        </div>

      )}
    </header>
  );
};

export default Navbar;
