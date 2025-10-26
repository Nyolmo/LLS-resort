import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/254746495101"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition z-50"
    >
      <MessageCircle color="white" size={28} />
    </a>
  );
};

export default WhatsAppButton;
