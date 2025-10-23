import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Связаться со <span className="text-gradient">мной</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Готов ответить на все ваши вопросы и обсудить детали сотрудничества
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-luxury p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-light mb-2">Телефон</h3>
              <a
                href="tel:+79991234567"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +7 (999) 123-45-67
              </a>
            </div>

            <div className="card-luxury p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-light mb-2">Email</h3>
              <a
                href="mailto:contact@luxestate.com"
                className="text-muted-foreground hover:text-primary transition-colors break-all"
              >
                contact@luxestate.com
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="card-luxury p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-background border-border"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 luxury-glow group"
              >
                Отправить сообщение
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
