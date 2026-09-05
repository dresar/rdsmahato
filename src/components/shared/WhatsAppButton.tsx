import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/data/mockData';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=Assalamu'alaikum, saya ingin bertanya tentang Pesantren Raudhatussalam`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full gradient-primary text-primary-foreground shadow-elevated hover:scale-105 transition-transform duration-200 animate-pulse-glow"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-semibold">Chat Kami</span>
    </button>
  );
};

export default WhatsAppButton;
