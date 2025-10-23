import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Александр Волков",
    role: "Предприниматель",
    content: "Профессиональный подход на всех этапах сделки. Нашли идеальный пентхаус именно с теми характеристиками, которые я искал. Рекомендую!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Елена Соколова",
    role: "Владелица бизнеса",
    content: "Великолепный сервис! Помогли продать автомобиль по лучшей цене и нашли замену в кратчайшие сроки. Очень довольна сотрудничеством.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Дмитрий Петров",
    role: "Инвестор",
    content: "Экспертиза в области элитной недвижимости на высшем уровне. Грамотные консультации по инвестициям и полное юридическое сопровождение.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Что говорят <span className="text-gradient">клиенты</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Доверие и репутация — основа моей работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-luxury p-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-light">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
