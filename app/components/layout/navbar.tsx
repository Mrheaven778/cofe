import { Link } from "react-router";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg py-2" : "shadow-md py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              height={50}
              width={100}
              src="/logo.jpeg"
              alt="Moonlight Coffee Logo"
            />
            {/* <span className="text-2xl font-bold text-gray-900"> */}
            {/*   Moonlight Coffe */}
            {/* </span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                Inicio
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/sobre-nosotros"
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                Sobre Nosotros
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                to="/contacto"
                className="text-gray-700 hover:text-amber-700 font-medium transition-colors"
              >
                Contacto
              </Link>
            </motion.div>
            <Button size="sm">Reservar Mesa</Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-amber-700 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-3 mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  to="/"
                  className="block text-gray-700 hover:text-amber-700 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                <Link
                  to="/sobre-nosotros"
                  className="block text-gray-700 hover:text-amber-700 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nosotros
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  to="/contacto"
                  className="block text-gray-700 hover:text-amber-700 font-medium transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                <Button size="sm" className="w-full">
                  Reservar Mesa
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
}
