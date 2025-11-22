import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Tratamos a cada paciente con el cariño y respeto que merece.",
    },
    {
      icon: Award,
      title: "Profesionalismo",
      description: "Personal altamente capacitado y con certificaciones vigentes.",
    },
    {
      icon: Target,
      title: "Dedicación",
      description: "Comprometidos con el bienestar integral de nuestros pacientes.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Una agencia comprometida con brindar el mejor cuidado para sus seres queridos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-3xl font-bold">Nuestra Misión</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Proporcionar servicios de enfermería y cuidado de la más alta calidad,
                garantizando el bienestar físico y emocional de las personas mayores.
                Nos esforzamos por crear un ambiente de confianza, calidez y profesionalismo
                que permita a nuestros pacientes vivir con dignidad y comodidad en su propio hogar.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="h-8 w-8 text-secondary" />
                <h3 className="text-3xl font-bold">Nuestra Visión</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser la agencia de cuidado de personas mayores más confiable y respetada,
                reconocida por nuestro compromiso con la excelencia, la innovación en cuidados
                y la atención humanizada. Aspiramos a expandir nuestros servicios para llegar
                a más familias que necesitan apoyo profesional y compasivo.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
