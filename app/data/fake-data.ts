// Datos del Menú de Café
export const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Espresso con leche vaporizada y espuma cremosa",
    price: 3.5,
    category: "caliente",
    popular: true,
  },
  {
    id: 2,
    name: "Latte Vainilla",
    description: "Café con leche y un toque de vainilla natural",
    price: 4.0,
    category: "caliente",
    popular: true,
  },
  {
    id: 3,
    name: "Espresso Doble",
    description: "Doble shot de nuestro mejor espresso italiano",
    price: 3.0,
    category: "caliente",
    popular: false,
  },
  {
    id: 4,
    name: "Americano",
    description: "Espresso suave con agua caliente",
    price: 2.5,
    category: "caliente",
    popular: false,
  },
  {
    id: 5,
    name: "Cold Brew",
    description: "Café infusionado en frío durante 12 horas",
    price: 3.0,
    category: "frio",
    popular: true,
  },
  {
    id: 6,
    name: "Mocha Helado",
    description: "Café con chocolate y hielo",
    price: 4.5,
    category: "frio",
    popular: true,
  },
  {
    id: 7,
    name: "Croissant de Mantequilla",
    description: "Recién horneado, crujiente y mantecoso",
    price: 2.0,
    category: "pasteleria",
    popular: true,
  },
  {
    id: 8,
    name: "Cheesecake",
    description: "Con frutos rojos del bosque",
    price: 4.5,
    category: "pasteleria",
    popular: true,
  },
];

// Libros Destacados
export const featuredBooks = [
  {
    id: 1,
    title: "El Bosque de las Sombras",
    author: "Ana R. Valdez",
    description:
      "Una historia de misterio y fantasía que te mantendrá atrapado hasta la última página.",
    price: 15.99,
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    genre: "Fantasía",
  },
  {
    id: 2,
    title: "Historias del Café",
    author: "Marco Díaz",
    description:
      "Relatos cortos sobre encuentros inesperados en cafeterías alrededor del mundo.",
    price: 12.5,
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    genre: "Cuentos",
  },
  {
    id: 3,
    title: "Sueños de Papel",
    author: "Elena Torres",
    description:
      "Una novela emotiva sobre el poder de las palabras y la literatura.",
    price: 14.0,
    cover:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop",
    genre: "Romance",
  },
  {
    id: 4,
    title: "Café y Contemplación",
    author: "Roberto Ferrer",
    description:
      "Ensayos filosóficos inspirados en momentos de reflexión con una taza de café.",
    price: 13.75,
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    genre: "Ensayo",
  },
];

// Testimonios
export const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Escritora",
    image: "https://i.pravatar.cc/150?img=1",
    comment:
      "Mi lugar favorito para escribir. El café es excelente y la selección de libros es inspiradora. ¡No puedo pedir más!",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "Profesor",
    image: "https://i.pravatar.cc/150?img=12",
    comment:
      "Vengo cada fin de semana. La combinación de buen café y literatura crea un ambiente perfecto para desconectar.",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Fernández",
    role: "Estudiante",
    image: "https://i.pravatar.cc/150?img=5",
    comment:
      "Descubrí este lugar hace un mes y ya se convirtió en mi segunda casa. Ideal para estudiar y relajarse.",
    rating: 5,
  },
];

// Equipo
export const teamMembers = [
  {
    id: 1,
    name: "Claudia Bodas",
    role: "Fundadora",
    bio: "Visionaria del proyecto y experta en gestión cultural. Creó este espacio para fusionar el arte del café con el amor por la literatura.",
  },
  {
    id: 2,
    name: "Yasmina Sahli",
    role: "Fundadora",
    bio: "Especialista en café de especialidad y barista certificada. Su pasión por el café artesanal define la calidad de cada taza que servimos.",
  },
  {
    id: 3,
    name: "Lucia Doñoro Retuerta",
    role: "Fundadora",
    bio: "Curadora literaria con maestría en Literatura Contemporánea. Selecciona cuidadosamente cada título para crear una experiencia de lectura única.",
  },
  {
    id: 4,
    name: "Iman El Farssioui",
    role: "Fundadora",
    bio: "Diseñadora de experiencias y coordinadora de eventos culturales. Organiza clubes de lectura y actividades que dan vida a nuestra comunidad.",
  },
];

// Servicios
export const services = [
  {
    id: 1,
    title: "Cafetería Artesanal",
    description:
      "Café de especialidad preparado por baristas expertos. Granos seleccionados de origen único y tostados localmente.",
    icon: "coffee",
  },
  {
    id: 2,
    title: "Librería Independiente",
    description:
      "Cuidadosa selección de literatura nacional e internacional. Desde clásicos hasta las últimas novedades editoriales.",
    icon: "book",
  },
  {
    id: 3,
    title: "Eventos Culturales",
    description:
      "Clubes de lectura, presentaciones de libros, recitales de poesía y charlas con autores cada semana.",
    icon: "calendar",
  },
  {
    id: 4,
    title: "Zona de Lectura",
    description:
      "Espacios acogedores con sillones cómodos, buena iluminación y ambiente tranquilo para disfrutar tu lectura.",
    icon: "armchair",
  },
];

// Valores
export const values = [
  {
    id: 1,
    title: "Calidad",
    description:
      "Compromiso con la excelencia en cada taza de café y en cada libro que recomendamos.",
    icon: "star",
  },
  {
    id: 2,
    title: "Comunidad",
    description:
      "Creamos un espacio donde los amantes del café y la lectura pueden conectar y compartir.",
    icon: "users",
  },
  {
    id: 3,
    title: "Cultura",
    description:
      "Promovemos la literatura y las artes a través de eventos y actividades culturales regulares.",
    icon: "palette",
  },
  {
    id: 4,
    title: "Creatividad",
    description:
      "Inspiramos la creatividad y el pensamiento a través de nuestro ambiente único y estimulante.",
    icon: "lightbulb",
  },
];
