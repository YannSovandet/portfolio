import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xtm5dks",
        "template_foorbuc",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "qfgRrweaWjj-x7CK_"
      )
      .then(
        () => {
          alert("Message sent successfully!");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 px-4 sm:px-6 bg-slate-950 text-white"
    >

      <div className="max-w-3xl mx-auto">

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl">

          {/* Title */}
          <div className="mb-10 text-center">

            <p className="text-cyan-400 uppercase tracking-widest mb-3 text-sm md:text-base">
              Contact
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Get In Touch
            </h2>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Name */}
            <div>

              <label className="block mb-3 font-medium">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-white outline-none focus:border-cyan-400"
                required
              />

            </div>

            {/* Email */}
            <div>

              <label className="block mb-3 font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-white outline-none focus:border-cyan-400"
                required
              />

            </div>

            {/* Message */}
            <div>

              <label className="block mb-3 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="I'm interested in your skills!"
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4 text-white outline-none resize-none focus:border-pink-400"
                required
              ></textarea>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-bold tracking-wider transition duration-300"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;