import Image from "next/image";

export const cards = [
  {
    img: "/images/sura.jpg",
    title: "Web Development",
    description: "We build modern and responsive websites.",
    contact: "contact@company.com",
  },
  {
    img: "/images/sura1.jpg",
    title: "UI/UX Design",
    description: "Creative and user-friendly design solutions.",
    contact: "design@company.com",
  },
  {
    img: "/images/sura2.jpg",
    title: "SEO Optimization",
    description: "Improve your website ranking on Google.",
    contact: "seo@company.com",
  },
  {
    img: "/images/sura3.jpg",
    title: "Digital Marketing",
    description: "Grow your business with smart strategies.",
    contact: "marketing@company.com",
  },
];

const Card = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h1>

      {/* Grid Container */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {card.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>

              <p className="text-blue-600 text-sm font-medium">
                {card.contact}
              </p>

              <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Card;