
import React from 'react';
import { Phone, Mail, Linkedin } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const contactInfo = {
    phone: "+91-9752103275",
    email: "21tanmaysharma@gmail.com",
    linkedin: "https://www.linkedin.com/in/tanmaysharma4/"
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${type} copied to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-sky-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
              alt="Contact"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Right side - Contact Info */}
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Let's Connect</h3>
              <p className="text-gray-600">
                Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="space-y-8">
              <div 
                className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300"
                onClick={() => copyToClipboard(contactInfo.phone, "Phone number")}
              >
                <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-gray-800 font-medium">{contactInfo.phone}</div>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300"
                onClick={() => copyToClipboard(contactInfo.email, "Email")}
              >
                <div className="p-3 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-gray-800 font-medium">{contactInfo.email}</div>
                </div>
              </div>

              <div 
                className="flex items-center gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300"
                onClick={() => window.open(contactInfo.linkedin, '_blank')}
              >
                <div className="p-3 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors">
                  <Linkedin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <div className="text-gray-800 font-medium">View Profile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
