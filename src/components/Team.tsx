import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Clock } from "lucide-react";
import nurse1 from "@/assets/nurse-1.jpg";
import nurse2 from "@/assets/nurse-2.jpg";
import nurse3 from "@/assets/nurse-3.jpg";

const Team = () => {
  const team = [
    {
      name: "Lic. María González",
      role: "Enfermera Especialista",
      experience: "15 años de experiencia",
      specialties: ["Geriatría", "Cuidados Paliativos", "Postoperatorio"],
      image: nurse1,
    },
    {
      name: "Lic. Carmen Rodríguez",
      role: "Enfermera Certificada",
      experience: "12 años de experiencia",
      specialties: ["Rehabilitación", "Diabetes", "Hipertensión"],
      image: nurse2,
    },
    {
      name: "Lic. Ana Martínez",
      role: "Cuidadora Profesional",
      experience: "10 años de experiencia",
      specialties: ["Alzheimer", "Parkinson", "Acompañamiento"],
      image: nurse3,
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profesionales altamente capacitadas con vocación de servicio y años de experiencia
            en el cuidado de personas mayores.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{member.experience}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-sm font-medium">
                      <Award className="h-4 w-4 text-secondary" />
                      <span>Especialidades:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
