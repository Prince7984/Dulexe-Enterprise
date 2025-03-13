import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-black text-white text-center md:text-left">
      
      {/* Location and Email */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-2">
          <MapPin size={20} />
          <a
            href="https://maps.app.goo.gl/rJyebbK4Zhtyf48n6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Unjha, Gujarat, India
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <a href="mailto:info@dulexeenterprise.com" className="hover:underline">
                info@dulexeenterprise.com
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="https://www.facebook.com/share/1A2k641vLF/" target="_blank" rel="noopener noreferrer">
          <Facebook size={20} className="hover:text-blue-500 transition"/>
        </a>
        <a href="https://www.instagram.com/dulexe_enterprise?utm_source=qr&igsh=MXFyc3NwcDBrMmc3ZQ==" target="_blank" rel="noopener noreferrer">
          <Instagram size={20} className="hover:text-pink-500 transition"/>
        </a>
        <a href="https://www.linkedin.com/company/105642990/admin/dashboard/" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} className="hover:text-blue-700 transition" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
