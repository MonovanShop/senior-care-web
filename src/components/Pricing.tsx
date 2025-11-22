import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Básico",
      price: "350",
      period: "por día",
      description: "Ideal para necesidades de cuidado diurno",
      features: [
        "Turno de 8 horas diarias",
        "Acompañamiento y supervisión",
        "Administración de medicamentos",
        "Monitoreo de signos vitales",
        "Reporte diario",
      ],
      highlighted: false,
    },
    {
      name: "Profesional",
      price: "2,100",
      period: "por semana",
      description: "El más popular para cuidado continuo",
      features: [
        "Cobertura 24/7",
        "Enfermera titulada",
        "Todos los servicios básicos",
        "Atención especializada",
        "Coordinación con médicos",
        "Reportes detallados",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "7,500",
      period: "por mes",
      description: "Cuidado integral de largo plazo",
      features: [
        "Servicio 24/7 todo el mes",
        "Equipo rotativo de enfermeras",
        "Plan personalizado de cuidados",
        "Terapia y rehabilitación",
        "Visitas médicas incluidas",
        "Apoyo familiar y asesoría",
        "Descuento del 15%",
      ],
      highlighted: false,
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

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
            Ofrecemos opciones flexibles adaptadas a sus necesidades y presupuesto.
            Todos los precios incluyen materiales básicos de cuidado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={pkg.highlighted ? "lg:scale-105" : ""}
            >
              <Card
                className={`h-full relative overflow-hidden ${
                  pkg.highlighted
                    ? "border-primary border-2 shadow-xl"
                    : "border-2 hover:border-primary/20"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold">
                    POPULAR
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold text-primary">
                      ${pkg.price}
                    </div>
                    <div className="text-sm text-muted-foreground">{pkg.period}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className={`w-full ${
                      pkg.highlighted
                        ? "bg-primary hover:bg-primary-hover"
                        : "bg-secondary hover:bg-secondary-hover"
                    }`}
                  >
                    Solicitar Información
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto"
        >
          * Los precios varían según la zona donde se encuentre el paciente. Se cobra por hora, y el servicio nocturno tiene un costo adicional.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
