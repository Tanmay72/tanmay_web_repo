
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Developer working on laptop",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop with code",
    },
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Circuit board",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Programming screen",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Hello, I'm Tanmay Sharma
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A passionate software developer focused on creating impactful digital solutions.
          </p>
          
          <div className="mb-8 relative">
            <Carousel className="w-full max-w-3xl mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <Link to="/projects" className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition-colors">
            View My Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
