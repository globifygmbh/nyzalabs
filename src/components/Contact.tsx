"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-64 h-64 mb-8">
              <Image
                src="/uploads/paper-plane.png"
                alt="Send us a message"
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-benzin font-black uppercase leading-tight">
              Shoot us
              <br />
              <span className="text-purple">an Message</span>
            </h2>
            <p className="mt-3 text-gray-500 text-sm">
              Get in touch with us by sending us a message.
            </p>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
              <input
                type="text"
                placeholder="Surname"
                value={formData.surname}
                onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="E-Mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
              <input
                type="tel"
                placeholder="Number"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
              <input
                type="text"
                placeholder="Budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors"
              />
            </div>
            <textarea
              placeholder="Text Here"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-purple transition-colors resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 bg-purple text-white font-bold rounded-full hover:bg-purple-dark transition-colors text-sm uppercase tracking-wide"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
