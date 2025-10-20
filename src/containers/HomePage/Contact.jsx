import { motion } from "framer-motion";

export const Contact = () => {

  const handleEmailClick = () => {
    const email = "vaibhavsaraf.2007@gmail.com";
    const subject = "Hello"; // optional
    const body = "I wanted to get in touch with you."; // optional

    // Opens the default mail client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-gray-800 text-white">
      <motion.div
        className="max-w-3xl mx-auto flex flex-col gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold underline">Contact Me</h2>
        <p className="text-gray-300">
          Feel free to reach out via email or connect on LinkedIn.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            // href="mailto:vaibhavsaraf.2007@gmail.com"
            onClick={handleEmailClick}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            <span className="text-white">Email Me</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-prakash-saraf-548358a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};
