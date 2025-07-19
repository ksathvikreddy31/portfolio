
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSuccess(""); // Clear previous messages when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      // 1. Get your EmailJS credentials (THESE ARE UNIQUE TO YOUR ACCOUNT)
      //    Replace these with your actual IDs from EmailJS dashboard:
      //    - Service ID: (from Email Services) e.g., 'service_xxxxxxxx'
      //    - Template ID: (from Email Templates) e.g., 'template_yyyyyyyy'
      //    - Public Key: (from Account -> API Keys) e.g., 'your_public_key_zzzzzzzz'
      const serviceId = 'service_23tndg6';
      const templateId = 'template_99zeud7';
      const publicKey = '0kaGwBk9lzdo8Q7hO';

      // 2. Prepare the data to send.
      //    The KEYS here (left side) MUST MATCH THE PLACEHOLDERS IN YOUR EMAILJS TEMPLATE.
      //    The VALUES here (right side) come from your React form's state or generated data.
      const templateParams = {
        name: form.name,          // Corresponds to {{name}} in your template
        email: form.email,        // Corresponds to {{email}} in your template
        message: form.message,    // Corresponds to {{message}} in your template
        title: "New Contact from Portfolio", // Corresponds to {{title}} in your subject line
        time: new Date().toLocaleString(),   // Corresponds to {{time}} in your content
      };

      // 3. Send the email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" }); // Clear form on success
    } catch (error) {
      console.error("Error sending message with EmailJS:", error);
      setSuccess("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact">
      <p className={`text-center ${success.includes("successfully") ? "text-green-500" : "text-red-500"} mb-4`}>
        {success}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-gray-700 text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-gray-700 text-white px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="7"
          cols="50"
          placeholder="Message"
          required
          className="rounded-lg bg-gray-700 text-white p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan resize-y"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;