import type { Route } from "./+types/home";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Container } from "../components/ui/container";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import {
  menuItems,
  featuredBooks,
  testimonials,
  services,
} from "../data/fake-data";
import { Link } from "react-router";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/scroll-animations";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title:
        "Moonlight Coffe - Un lugar donde el café se encuentra con las historias",
    },
    {
      name: "description",
      content:
        "Cafetería artesanal y librería independiente. Disfruta de un excelente café mientras exploras nuestra colección de libros.",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section con Parallax */}
      <section className="relative h-[600px] bg-gradient-to-r from-amber-900 to-amber-700 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=1080&fit=crop')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <Container className="relative z-10">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              Moonlight Coffe
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Un lugar donde el aroma del café se mezcla con historias
              inolvidables
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary">
                Explorar Menú
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-amber-900"
              >
                Ver Libros
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Todo lo que necesitas para una experiencia perfecta entre el
                café y la lectura
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.15}
          >
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="elevated" className="text-center h-full">
                    <CardHeader>
                      <motion.div
                        className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {service.icon === "coffee" && (
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 2l6 6m0 0l6-6M12 8v13m-4-5h8"
                            />
                          </svg>
                        )}
                        {service.icon === "book" && (
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                        {service.icon === "calendar" && (
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        )}
                        {service.icon === "armchair" && (
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        )}
                      </motion.div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Menú de Café Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestro Menú
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Café de especialidad y delicias artesanales preparadas con amor
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {menuItems.map((item) => (
              <StaggerItem key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="bordered" className="relative h-full">
                    {item.popular && (
                      <motion.div
                        className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{
                          delay: 0.3,
                          type: "spring",
                          stiffness: 200,
                        }}
                      >
                        Popular
                      </motion.div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <div className="text-2xl font-bold text-amber-700 mt-2">
                        ${item.price.toFixed(2)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3}>
            <div className="text-center mt-12">
              <Button size="lg" variant="primary">
                Ver Menú Completo
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Libros Destacados Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Libros Destacados
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Nuestra selección especial para esta semana
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.15}
          >
            {featuredBooks.map((book) => (
              <StaggerItem key={book.id}>
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card variant="elevated" className="overflow-hidden h-full">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <CardHeader>
                      <div className="text-sm text-amber-700 font-semibold mb-1">
                        {book.genre}
                      </div>
                      <CardTitle className="text-lg">{book.title}</CardTitle>
                      <div className="text-sm text-gray-600 mb-2">
                        por {book.author}
                      </div>
                      <div className="text-xl font-bold text-green-700">
                        ${book.price.toFixed(2)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm line-clamp-3">
                        {book.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn direction="up" delay={0.3}>
            <div className="text-center mt-12">
              <Button size="lg" variant="secondary">
                Explorar Toda la Colección
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Lo que Dicen Nuestros Clientes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Historias reales de personas que encontraron su lugar favorito
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            staggerDelay={0.2}
          >
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="elevated" className="text-center h-full">
                    <CardHeader>
                      <motion.img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-amber-600"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      />
                      <CardTitle className="text-xl">
                        {testimonial.name}
                      </CardTitle>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="flex justify-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-5 h-5 text-amber-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                              delay: i * 0.1,
                              type: "spring",
                              stiffness: 200,
                            }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </motion.svg>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="italic">
                        "{testimonial.comment}"
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* CTA Section con efecto parallax */}
      <motion.section
        className="py-20 bg-gradient-to-r from-amber-700 to-amber-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1920&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <Container className="relative z-10">
          <FadeIn direction="up">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                ¿Listo para tu Próxima Aventura Literaria?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Visítanos y descubre por qué somos el lugar favorito de los
                amantes del café y la lectura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-amber-700 hover:bg-gray-100"
                >
                  Ver Ubicación
                </Button>
                <Link to="/sobre-nosotros">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-700"
                  >
                    Conocer Más
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </motion.section>

      <Footer />
    </div>
  );
}
