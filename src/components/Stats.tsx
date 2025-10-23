const stats = [
  { value: "150+", label: "Успешных сделок" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "10+", label: "Лет опыта" },
  { value: "5 млрд+", label: "Оборот сделок" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-light text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
