import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-teal-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-teal-400 via-purple-400 to-red-400 bg-clip-text text-transparent mb-4">
              Novarael'25
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where Darkness Dances and the Cosmos Tremble
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Presented by Citizens Consumer Club
              <br />
              DG Vaishnav College
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-teal-400 font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/ccc_dgv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                <span>@ccc_dgv</span>
              </a>
              <a
                href="https://chat.whatsapp.com/EQ71lFh8k7xIGs48fWRZGN?mode=ems_copy_t"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-colors group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span>Join WhatsApp Group</span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-teal-400 font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a href="mailto:citizenconsumerclubdgvc@gmail.com" className="flex items-center space-x-3 hover:text-teal-400 transition-colors group">
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>citizenconsumerclubdgvc@gmail.com</span>
              </a>
              <a href="tel:+919600699091" className="flex items-center space-x-3 hover:text-teal-400 transition-colors group">
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span>+91 96006 99091</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-teal-500/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Citizens Consumer Club, DG Vaishnav College. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 via-purple-500/50 via-red-500/50 to-transparent"></div>
    </footer>
  );
}
