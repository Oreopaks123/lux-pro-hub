import { useState } from "react";
import { Building2, Car, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = "all" | "realty" | "auto" | "jewelry";

const categories = [
  { id: "all" as Category, name: "Все", icon: null },
  { id: "realty" as Category, name: "Недвижимость", icon: Building2 },
  { id: "auto" as Category, name: "Автомобили", icon: Car },
  { id: "jewelry" as Category, name: "Ювелирные изделия", icon: Gem },
];

const listings = [
  {
    id: 1,
    category: "realty" as Category,
    title: "Пентхаус в центре города",
    price: "150 млн ₽",
    description: "300 м², панорамные окна, терраса",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 2,
    category: "auto" as Category,
    title: "Mercedes-Benz S-Class 2024",
    price: "12 млн ₽",
    description: "Полная комплектация, 0 км",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
  },
  {
    id: 3,
    category: "jewelry" as Category,
    title: "Эксклюзивное колье с бриллиантами",
    price: "8 млн ₽",
    description: "Белое золото 750, бриллианты 15 карат",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
  },
  {
    id: 4,
    category: "realty" as Category,
    title: "Загородный особняк",
    price: "280 млн ₽",
    description: "800 м², собственный участок 30 соток",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    id: 5,
    category: "auto" as Category,
    title: "Porsche 911 Turbo S",
    price: "18 млн ₽",
    description: "2023 год, расширенная комплектация",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
  },
  {
    id: 6,
    category: "jewelry" as Category,
    title: "Швейцарские часы Patek Philippe",
    price: "25 млн ₽",
    description: "Лимитированная серия, сертификат подлинности",
    image: "https://images.unsplash.com/photo-1587836374058-4ec0b7c1fc57?w=800&q=80",
  },
];

export const Listings = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredListings =
    activeCategory === "all"
      ? listings
      : listings.filter((listing) => listing.category === activeCategory);

  return (
    <section id="listings" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Текущие <span className="text-gradient">объявления</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Эксклюзивная подборка премиальных объектов
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary/50"
                }
              >
                {Icon && <Icon className="w-4 h-4 mr-2" />}
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, index) => (
            <div
              key={listing.id}
              className="card-luxury overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-2xl font-light text-primary mb-2">
                    {listing.price}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light mb-2">{listing.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {listing.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-primary/50 hover:bg-primary/10"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
