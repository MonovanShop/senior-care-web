import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola! Me gustaría solicitar información sobre sus servicios.%0A%0ANombre: ${formData.name}%0AEmail: ${formData.email}%0ATeléfono: ${formData.phone}%0AMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/525575210273?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    toast.success("Redirigiendo a WhatsApp...");
    
    // Limpiar formulario
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "55 7521 0273",
      link: "tel:5575210273",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@cuidarte.com",
      link: "mailto:contacto@cuidarte.com",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Ciudad de México",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      info: "Disponibles 24/7",
      link: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para atender tus necesidades. Contáctanos hoy mismo para una
            evaluación gratuita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2">
              <CardHeader>
                <h3 className="text-2xl font-bold">Envíanos un Mensaje</h3>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Nombre completo *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Teléfono *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Cuéntanos sobre tus necesidades *"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border-2 hover:border-primary/20 transition-colors">
                      <CardContent className="p-6 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-1">{item.title}</h4>
                          <a
                            href={item.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.info}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-secondary/5">
              <CardContent className="p-6 text-center space-y-4">
                <h4 className="text-xl font-bold">¿Necesitas atención inmediata?</h4>
                <p className="text-muted-foreground">
                  Llámanos o envíanos un WhatsApp y te responderemos de inmediato.
                </p>
                <Button
                  onClick={() => window.open("https://wa.me/525575210273", "_blank")}
                  className="w-full bg-secondary hover:bg-secondary-hover"
                >
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
