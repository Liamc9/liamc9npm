import React from "react";

// The Footer component definition
const Footer = ({ email, phone, address, copyright, socialLinks }) => {
  return (
    <footer className="w-full bg-gray-900 py-10 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold text-white">Contact Information</h2>
            <p>Email: <a href={`mailto:${email}`} className="text-blue-400 hover:underline">{email}</a></p>
            <p>Phone: <a href={`tel:${phone}`} className="text-blue-400 hover:underline">{phone}</a></p>
            <p>Address: {address}</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ href, label, icon }) => (
              <a href={href} key={label} className="text-gray-400 hover:text-white">
                <i className={icon}>{label}</i>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between mt-8 border-t border-gray-700 pt-6">
          <div className="text-center md:text-left">
            <p>© {copyright}. All rights reserved.</p>
          </div>
          <div>
            <p>
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
              <a href="/terms" className="hover:underline">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer

