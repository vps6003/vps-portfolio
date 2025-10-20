// src/containers/ContactPage.jsx
import { useState } from "react";
import { AnimatedContent } from "../components/animations/AnimatedContent";
import { FaGithub, FaCodepen, FaHackerrank, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Trigger mailto
  window.location.href = `mailto:vaibhavsaraf.2007@gmail.com?subject=From%20Portfolio&body=${encodeURIComponent(
    formData.message
  )}`;

  // Delay the toast slightly to simulate "after mail client opens"
  setTimeout(() => {
    toast.success("Message triggered! Please check your email client.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }, 300); // 300ms delay

  setFormData({ name: "", email: "", message: "" });
};

  // Dynamic social links array
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/vps6003", icon: <FaGithub />, color: "text-blue-500" },
    { name: "CodeChef", url: "https://www.codechef.com/users/vps_2511", icon: <FaCodepen />, color: "text-yellow-500" },
    { name: "HackerRank", url: "https://www.hackerrank.com/profile/vpsam_1999", icon: <FaHackerrank />, color: "text-green-500" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vaibhav-prakash-saraf-548358a5/", icon: <FaLinkedin />, color: "text-blue-700" },
    { name: "Instagram", url: "https://www.instagram.com/vps_505/", icon: <FaInstagram />, color: "text-pink-500" },
  ];

  return (
    <AnimatedContent>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 py-16 bg-gray-900 text-white">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 text-center mb-10 max-w-2xl">
          Whether you have a project in mind or just want to say hi, feel free to
          reach out. I’ll get back to you as soon as possible.
        </p>

        {/* Social / Profile Links dynamically */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-10 text-2xl">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform transform hover:scale-125 ${social.color}`}
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full max-w-2xl">
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-between mb-10">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:vaibhavsaraf.2007@gmail.com"
                className="text-blue-400 hover:underline"
              >
                vaibhavsaraf.2007@gmail.com
              </a>
            </div>
            <div className="mb-4 sm:mb-0">
              <h3 className="font-semibold text-lg">Phone</h3>
              <a href="tel:+917004574262" className="text-blue-400 hover:underline">
                +91 - 7004574262
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-300">India</p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-transform transform hover:scale-[1.02]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-transform transform hover:scale-[1.02]"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 
                           transition-transform transform hover:scale-[1.02]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full !bg-green-500 hover:!bg-green-700 transition 
                         font-semibold py-3 rounded-lg mt-2 transform hover:scale-105 text-white"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Toast Container */}
        <ToastContainer />
      </section>
    </AnimatedContent>
  );
};
