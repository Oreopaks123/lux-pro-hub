export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-2xl font-light tracking-wider">
            <span className="text-gradient">LUX</span>
            <span className="text-foreground">ESTATE</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Премиальная недвижимость, автомобили и ювелирные изделия
          </p>
          
          <div className="text-xs text-muted-foreground pt-4">
            © {currentYear} LuxEstate. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  );
};
