import { Award, Heart, Shield, TrendingUp } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const features = [
  {
    icon: Award,
    title: "Экспертиза",
    description: "Более 10 лет опыта в сфере премиальной недвижимости и luxury-сегмента",
  },
  {
    icon: Shield,
    title: "Надежность",
    description: "Юридическое сопровождение и гарантия безопасности каждой сделки",
  },
  {
    icon: Heart,
    title: "Индивидуальный подход",
    description: "Персональное сопровождение и учет всех ваших пожеланий",
  },
  {
    icon: TrendingUp,
    title: "Инвестиции",
    description: "Профессиональная консультация по инвестиционным возможностям",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center">
            Обо <span className="text-gradient">мне</span>
          </h2>
          
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg luxury-glow">
                <img
                  src={profilePhoto}
                  alt="Чиков Артур Артурович"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-light mb-2">
                  Чиков Артур Артурович
                </h3>
                <p className="text-primary text-lg">
                  Риелтор премиум-класса
                </p>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Специализируюсь на работе с элитной недвижимостью, премиальными автомобилями и 
                  ювелирными изделиями класса люкс. Моя цель — не просто продать объект, а найти 
                  идеальное решение, которое превзойдет ваши ожидания.
                </p>
                <p>
                  За годы работы я построил репутацию надежного партнера, который ценит доверие клиентов 
                  и индивидуальный подход к каждой сделке. Работаю только с проверенными объектами высшего 
                  качества и предоставляю полное юридическое сопровождение.
                </p>
                <p>
                  Моя миссия — помогать людям находить не просто недвижимость, автомобили или драгоценности, 
                  а настоящие инвестиции в комфорт, статус и будущее.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-luxury p-6 text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-light mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
