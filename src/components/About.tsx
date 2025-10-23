import { Award, Heart, Shield, TrendingUp } from "lucide-react";

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
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Обо <span className="text-gradient">мне</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Специализируюсь на работе с элитной недвижимостью, премиальными автомобилями и 
            ювелирными изделиями класса люкс. Моя цель — не просто продать объект, а найти 
            идеальное решение, которое превзойдет ваши ожидания.
          </p>
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
