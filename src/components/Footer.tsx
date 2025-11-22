import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <span className="text-2xl font-bold">Jáalil Care</span>
            </div>
            <p className="text-muted-foreground">
              Brindamos servicios especializados de enfermería y cuidado para personas mayores en la comodidad de su hogar. Experiencia, dedicación y empatía en cada servicio. También contamos con aplicación de sueros a domicilio.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Cuidado a Domicilio</li>
              <li>Acompañamiento</li>
              <li>Monitoreo de Salud</li>
              <li>Cuidados Postoperatorios</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#servicios" className="hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-primary transition-colors">
                  Nuestro Equipo
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-primary transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:5575210273" className="hover:text-primary transition-colors">
                  55 7521 0273
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>Pendiente</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Servicio a domicilio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Jáalil Care. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
