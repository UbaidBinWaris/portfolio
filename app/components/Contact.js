"use client";
import React, { useState } from "react";
import contactLinks from "@/app/data/contactLinks";
import { motion } from "framer-motion";
import { Terminal, Send, Cpu, Shield, Globe, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Simulate API call for now (replace with actual API if you have one)
       const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: ">> PACKET_SENT: Message transmitted successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: `>> ERROR: ${data.error || "Transmission failed."}`,
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: ">> CRITICAL_FAILURE: Connection lost.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-[#0A1930] py-24 px-6 md:px-10 flex flex-col items-center justify-center relative overflow-hidden font-mono"
    >
        {/* Background Grid - Consistent with ReviewSection */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1793d1_1px,transparent_1px),linear-gradient(to_bottom,#1793d1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none"></div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-7xl"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-[#63B8B2] flex items-center justify-center gap-4"
          >
             <Terminal className="w-8 h-8 md:w-12 md:h-12" />
             <span>INITIALIZE_CONNECTION</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            // Establishing secure channel for communication...
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT: Transmission Interface (Form) */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="w-full"
          >
            <div className="bg-[#0f213c]/80 backdrop-blur-md border border-[#233554] p-1 rounded-lg shadow-2xl relative overflow-hidden group">
                 {/* Top Tech Border */}
                 <div className="h-1 w-full bg-[#233554] absolute top-0 left-0 flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                 </div>

                <div className="p-8 pt-10 relative">
                     {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#63B8B2] opacity-50"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#63B8B2] opacity-50"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#63B8B2] opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#63B8B2] opacity-50"></div>

                    <h3 className="text-xl text-white font-bold mb-6 flex items-center gap-2">
                         <Cpu className="text-[#63B8B2]" size={20} />
                         <span>TRANSMISSION_PROTOCOL</span>
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div className="group relative">
                             <label className="text-xs text-[#63B8B2] mb-1 block opacity-70">
                                 &gt; source_name
                             </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full bg-[#0A1930] border border-[#233554] text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#63B8B2] focus:ring-1 focus:ring-[#63B8B2]/50 transition-all font-mono placeholder-gray-700"
                                placeholder="ENTER_NAME..."
                            />
                        </div>

                         {/* Email Input */}
                         <div className="group relative">
                             <label className="text-xs text-[#63B8B2] mb-1 block opacity-70">
                                 &gt; return_address
                             </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                required
                                className="w-full bg-[#0A1930] border border-[#233554] text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#63B8B2] focus:ring-1 focus:ring-[#63B8B2]/50 transition-all font-mono placeholder-gray-700"
                                placeholder="ENTER_EMAIL..."
                            />
                        </div>

                        {/* Message Input */}
                        <div className="group relative">
                             <label className="text-xs text-[#63B8B2] mb-1 block opacity-70">
                                 &gt; payload_data
                             </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                                required
                                rows="5"
                                className="w-full bg-[#0A1930] border border-[#233554] text-white px-4 py-3 rounded-none focus:outline-none focus:border-[#63B8B2] focus:ring-1 focus:ring-[#63B8B2]/50 transition-all font-mono resize-none placeholder-gray-700"
                                placeholder="ENTER_MESSAGE_DATA..."
                            />
                        </div>
                        
                        {/* Status Message */}
                        {status.message && (
                            <div className={`text-xs p-2 border-l-2 ${status.type === 'success' ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-red-500 text-red-400 bg-red-500/10'}`}>
                                {status.message}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-[#63B8B2]/10 border border-[#63B8B2] text-[#63B8B2] hover:bg-[#63B8B2] hover:text-[#0A1930] font-bold py-3 uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                        >
                            {isSubmitting ? (
                                <span className="animate-pulse">TRANSMITTING...</span>
                            ) : (
                                <>
                                    <span>EXECUTE_SEND</span>
                                    <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </>
                            )}
                             {/* Scanline Effect */}
                             <div className="absolute inset-0 bg-white/20 translate-y-[-100%] group-hover/btn:translate-y-[100%] transition-transform duration-500"></div>
                        </button>
                    </form>
                </div>
            </div>
          </motion.div>


          {/* RIGHT: Active Nodes (Socials) */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex flex-col justify-center"
           >
              <h3 className="text-xl text-white font-bold mb-8 flex items-center gap-2">
                 <Globe className="text-[#63B8B2]" size={20} />
                 <span>ACTIVE_NODES</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                  {contactLinks.map((link, index) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 bg-[#0f213c]/60 border border-[#233554] hover:border-[#63B8B2] transition-all duration-300 relative overflow-hidden"
                      >
                         <div className="flex items-center gap-4 relative z-10">
                            <span className="text-2xl text-gray-400 group-hover:text-[#63B8B2] transition-colors">
                                {link.icon}
                            </span>
                             <div>
                                 <span className="block text-white font-bold text-sm tracking-wider uppercase">
                                     {link.name}
                                 </span>
                                 <span className="text-xs text-green-500 flex items-center gap-1">
                                     <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                     ONLINE
                                 </span>
                             </div>
                         </div>

                         <div className="relative z-10 text-[#63B8B2] opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300 font-mono text-xs">
                             &lt;CONNECT /&gt;
                         </div>

                         {/* Hover Background Accent */}
                         <div className="absolute inset-0 bg-[#63B8B2]/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 z-0"></div>
                      </a>
                  ))}
              </div>

               <div className="mt-12 p-6 bg-[#0f213c]/40 border border-[#233554] rounded-sm text-xs text-gray-500 font-mono leading-relaxed">
                   <p>&gt; SYSTEM_NOTE: ALL CHANNELS ARE MONITORED.</p>
                   <p>&gt; RESPONSE_TIME: ~24 HOURS.</p>
                   <p>&gt; ENCRYPTION: TLS 1.3 ENABLED.</p>
               </div>
           </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
