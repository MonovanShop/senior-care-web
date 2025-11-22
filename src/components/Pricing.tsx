import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Moon, Sun } from "lucide-react";

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const priceFactors = [
    {
      icon: MapPin,
      title: "Zona",
      description: "El precio varía según la ubicación del paciente",
    },
    {
      icon: Clock,
      title: "Horas de servicio",
      description: "Se cobra por hora según las necesidades del paciente",
    },
    {
      icon: Moon,
      title: "Servicio nocturno",
      description: "El servicio nocturno tiene un costo adicional",
    },
    {
      icon: Sun,
      title: "Servicio diurno",
      description: "Tarifa estándar para horario diurno",
    },
  ];

  return (
    <section id="precios" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Planes y Precios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos tarifas flexibles adaptadas a sus necesidades específicas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h3 className="text-3xl font-bold">Precios por Hora</h3>
              <p className="text-lg text-muted-foreground">
                Los precios varían según la zona donde se encuentre el paciente y las horas contratadas. 
                Se cobra por hora, y el servicio nocturno tiene un costo adicional.
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary-hover"
              >
                Solicitar Cotización
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {priceFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg">{factor.title}</h4>
                    <p className="text-sm text-muted-foreground">{factor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto"
        >
          * Ofrecemos evaluación gratuita para crear un plan personalizado según sus necesidades 
          específicas. Contáctanos para obtener una cotización exacta.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
