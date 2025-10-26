import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-20 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Contact Us</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <form className="bg-white p-6 rounded-xl shadow space-y-4">
          <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3" />
          <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3" />
          <textarea placeholder="Your Message" rows="4" className="w-full border rounded-lg p-3"></textarea>
<button
  type="button"
  onClick={() => {
    const name = document.querySelector('input[placeholder="Your Name"]').value;
    const email = document.querySelector('input[placeholder="Your Email"]').value;
    const message = document.querySelector('textarea[placeholder="Your Message"]').value;

    const whatsappNumber = "254746495101"; 
    const text = encodeURIComponent(
      `Hello Le'Lesan Resort,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  }}
  className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
>
  Send Message
</button>
        </form>
        <div>
          <h3 className="font-semibold mb-2">Find Us:</h3>
          <p>Behind Chepkoiyo Primary School, Kesses</p>
          <p>📞 0746 495101 | 0704 088774 | 0727 553838</p>
          <iframe
            src="https://www.google.com/maps?q=Chepkoyva+Primary+School+Kesses&output=embed"
            className="w-full h-64 mt-4 rounded-xl"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
