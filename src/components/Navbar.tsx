import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IndianRupee as GovIndia, Menu, X, User, Globe } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store/languageSlice';
import { RootState } from '../store/store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootState) => state.language.selectedLanguage);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/officer-dashboard', label: 'Login' },
  ];

  const handleLanguageChange = (language: 'en' | 'hi' | 'gu') => {
    dispatch(setLanguage(language));
    setIsLanguageMenuOpen(false); // Close the dropdown after selection
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const siteTitles = {
    en: {
      portal: "Grievance Portal",
    },
    hi: {
      portal: "शिकायत पोर्टल",
    },
    gu: {
      portal: "ફરિયાદ પોર્ટલ",
    },
  };

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 text-blue-700 hover:text-blue-800">
              <GovIndia className="h-8 w-8" />
              <span className="text-2xl font-bold tracking-tight">{siteTitles[selectedLanguage].portal}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors duration-150 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400`}
                >
                  {link.label === 'Login' ? <User className="mr-1 h-4 w-4" /> : null}
                  {link.label}
                </Link>
              ))}
              <div className="relative inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    id="menu-button"
                    aria-expanded={isLanguageMenuOpen}
                    aria-haspopup="true"
                    onClick={toggleLanguageMenu}
                  >
                    <Globe className="h-5 w-5 mr-2" />
                    {selectedLanguage === 'en' ? 'English' : selectedLanguage === 'hi' ? 'Hindi' : 'Gujarati'}
                  </button>
                </div>

                {isLanguageMenuOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex={-1}
                  >
                    <div className="py-1 w-full" role="none">
                      <button
                        onClick={() => handleLanguageChange('en')}
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageChange('hi')}
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Hindi
                      </button>
                      <button
                        onClick={() => handleLanguageChange('gu')}
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                      >
                        Gujarati
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-blue-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => handleLanguageChange('en')}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('hi')}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Hindi
              </button>
              <button
                onClick={() => handleLanguageChange('gu')}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Gujarati
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
