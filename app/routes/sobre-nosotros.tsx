import type { Route } from "./+types/sobre-nosotros";
import { Navbar } from "../components/layout/navbar";
import { Footer } from "../components/layout/footer";
import { Container } from "../components/ui/container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { SpotlightCard } from "../components/ui/spotlight-card";
import { teamMembers, values } from "../data/fake-data";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components/animations/scroll-animations";
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre Nosotros - Moonlight Coffe" },
    {
      name: "description",
      content:
        "Conoce la historia de Moonlight Coffe, nuestro equipo y lo que nos hace especiales.",
    },
  ];
}

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section con Parallax */}
      <section className="relative h-[400px] bg-gradient-to-r from-green-900 to-green-700 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1920&h=1080&fit=crop')",
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <Container className="relative z-10">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Nuestra Historia
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4}>
            <p className="text-xl text-gray-100 max-w-2xl">
              Donde el café y los libros se encuentran para crear experiencias
              inolvidables
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  ¿Cómo Nació Moonlight Coffe?
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Todo comenzó hace unos años cuando soñábamos con crear un
                    espacio que uniera dos de nuestras grandes pasiones: café de
                    especialidad y la literatura.
                  </p>
                  <p>
                    En un pequeño local de la en un pequeño local del Ensanche,
                    en el corazón de Alcalá de Henares, abrimos nuestras puertas
                    por primera vez. La idea era simple pero poderosa: ofrecer
                    un refugio donde las personas pudieran desconectar del mundo
                    exterior, sumergirse en una buena lectura y disfrutar de un
                    café excepcional.
                  </p>
                  <p>
                    Con el tiempo, Moonlight Coffe se convirtió en mucho más que
                    una cafetería. Se transformó en un punto de encuentro para
                    escritores, estudiantes, profesores y amantes de la cultura.
                    Hoy, nos enorgullece ser un espacio donde nacen ideas, se
                    forman amistades y se viven historias.
                  </p>
                  <p>
                    Cada taza que servimos y cada libro que recomendamos llevan
                    nuestro compromiso con la calidad y la pasión por crear
                    experiencias memorables.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="relative">
                <SpotlightCard
                  mode="after"
                  from="rgba(217,119,6,0.15)"
                  size={500}
                  className="group rounded-2xl border border-amber-200/30 bg-white/5"
                >
                  <div className="relative">
                    {/* Imagen de fondo con blur (efecto glow) */}
                    <img
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop"
                      alt="Interior de Café & Letras - fondo"
                      className="absolute inset-0 h-full w-full scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-500 group-hover:blur-[32px] group-hover:grayscale-0"
                    />

                    {/* Imagen principal */}
                    <motion.img
                      src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop"
                      alt="Interior de Café & Letras"
                      className="relative rounded-xl shadow-2xl grayscale transition-all duration-500 group-hover:grayscale-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </SpotlightCard>

                {/* Badge fuera del SpotlightCard */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-xl shadow-2xl border-4 border-white z-10"
                  initial={{ opacity: 0, x: -50, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className="text-5xl font-bold">5+</div>
                  <div className="text-sm font-semibold">Años de Historia</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Misión y Visión Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <Container>
          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            staggerDelay={0.2}
          >
            <StaggerItem>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="elevated"
                  className="border-t-4 border-amber-600 h-full"
                >
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg
                        className="w-8 h-8 text-amber-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </motion.div>
                    <CardTitle className="text-3xl">Nuestra Misión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                      Crear un espacio acogedor donde el café de calidad
                      excepcional y la literatura se fusionen para inspirar,
                      conectar y enriquecer la vida de nuestra comunidad. Nos
                      comprometemos a ser un refugio cultural que fomente el
                      amor por la lectura y el aprecio por el buen café.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  variant="elevated"
                  className="border-t-4 border-green-600 h-full"
                >
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg
                        className="w-8 h-8 text-green-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </motion.div>
                    <CardTitle className="text-3xl">Nuestra Visión</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-700 leading-relaxed">
                      Ser el punto de referencia cultural en Alcala de Henares,
                      reconocido por nuestra excelencia en café de especialidad
                      y nuestra cuidadosa curaduría literaria. Aspiramos a
                      expandir nuestra familia a nuevas ubicaciones, llevando
                      nuestra filosofía de café y cultura a más personas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Equipo Section */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestro Equipo
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Las cuatro fundadoras apasionadas que hacen posible la magia de
                Café & Letras
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
            staggerDelay={0.2}
          >
            {teamMembers.map((member, index) => (
              <StaggerItem key={member.id}>
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="h-full"
                >
                  <SpotlightCard
                    mode="after"
                    from="rgba(217,119,6,0.25)"
                    size={400}
                    className="group h-full rounded-2xl border border-amber-200/50 bg-white shadow-lg p-6"
                  >
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        {member.name.charAt(0)}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <div className="text-amber-700 font-semibold mb-4">
                        {member.role}
                      </div>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Los principios que guían cada decisión y acción en Moonlight
                Coffe
              </p>
            </div>
          </FadeIn>

          <StaggerContainer
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.15}
          >
            {values.map((value, index) => (
              <StaggerItem key={value.id}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    variant="bordered"
                    className="text-center h-full hover:border-amber-600 transition-all duration-300"
                  >
                    <CardHeader>
                      <motion.div
                        className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                      >
                        {value.icon === "star" && (
                          <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )}
                        {value.icon === "users" && (
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        )}
                        {value.icon === "palette" && (
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                        )}
                        {value.icon === "lightbulb" && (
                          <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        )}
                      </motion.div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Stats Section con animaciones counter */}
      <motion.section
        className="py-20 bg-gradient-to-r from-amber-700 to-amber-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=400&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        ></motion.div>
        <Container className="relative z-10">
          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
            staggerDelay={0.15}
          >
            {[
              { value: "5000+", label: "Tazas Servidas/Mes" },
              { value: "2000+", label: "Libros en Colección" },
              { value: "50+", label: "Eventos Culturales/Año" },
              { value: "1000+", label: "Clientes Felices" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg text-amber-100">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </motion.section>

      <Footer />
    </div>
  );
}
