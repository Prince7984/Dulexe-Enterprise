import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex  justify-between items-center p-4 bg-black text-white">
      {/* Location and Email */}
      <div className="flex items-center space-x-4">
        <MapPin size={20} />
        <a
          href="https://maps.app.goo.gl/rJyebbK4Zhtyf48n6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Unjha, Gujarat, India
        </a>
        <Mail size={20} />
        <a href="mailto:info.dulexeenterprise@gmail.com" className="hover:underline">
        info.dulexeenterprise@gmail.com
        </a>
      </div>
      
      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={20} className="hover:text-blue-500 transition"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} className="hover:text-pink-500 transition"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} className="hover:text-blue-700 transition" />
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;