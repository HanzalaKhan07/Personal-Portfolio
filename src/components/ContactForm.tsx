import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 rounded-xl shadow-xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-semibold text-gray-800">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm font-semibold text-gray-800">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-300"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-semibold text-gray-800">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Enter your message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-300"
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 mt-4 rounded-lg font-semibold text-white bg-gradient-to-r from-emerald-300 to-sky-400 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
