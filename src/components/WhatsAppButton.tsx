import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/525575210273", "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-secondary hover:bg-secondary-hover rounded-full shadow-lg flex items-center justify-center group transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-7 w-7 text-secondary-foreground" />
      <span className="absolute right-full mr-3 bg-foreground text-background px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chatea con nosotros
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
