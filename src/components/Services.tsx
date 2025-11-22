import { motion } from "framer-motion";
import { Home, Heart, Activity, Stethoscope, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Cuidado a Domicilio",
      description:
        "Atención personalizada en la comodidad del hogar, garantizando el bienestar y seguridad de sus seres queridos.",
    },
    {
      icon: Heart,
      title: "Acompañamiento",
      description:
        "Compañía constante y apoyo emocional para combatir la soledad y promover el bienestar mental.",
    },
    {
      icon: Activity,
      title: "Monitoreo de Salud",
      description:
        "Seguimiento continuo de signos vitales y condiciones de salud, con reportes detallados.",
    },
    {
      icon: Stethoscope,
      title: "Cuidados Postoperatorios",
      description:
        "Atención especializada durante la recuperación post-quirúrgica con seguimiento médico.",
    },
    {
      icon: Clock,
      title: "Servicio 24/7",
      description:
        "Disponibilidad completa cualquier día de la semana, turnos de día, noche o servicio continuo.",
    },
    {
      icon: Users,
      title: "Terapia y Rehabilitación",
      description:
        "Apoyo en ejercicios de fisioterapia y actividades que promuevan la movilidad y autonomía.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales adaptados a las necesidades
            específicas de cada paciente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
