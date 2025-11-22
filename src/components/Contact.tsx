import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
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
      info: "Pendiente",
      link: "#",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      info: "Servicio a domicilio – nuestras cuidadoras y enfermeras van directamente al hogar del paciente.",
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

        <div className="max-w-4xl mx-auto">
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
                  onClick={() => window.open("https://wa.me/525575210273?text=Hola%2C%20estoy%20interesado(a)%20en%20los%20servicios%20de%20cuidado%20de%20Jáalil%20Care.%20¿Me%20pueden%20dar%20más%20información%2C%20por%20favor%3F", "_blank")}
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
