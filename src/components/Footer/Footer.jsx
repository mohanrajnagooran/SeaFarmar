import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Waves,
} from "lucide-react";
import logo from "../../assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
    shop: [
      { name: "All Products", href: "#products" },
      { name: "Fresh Fish", href: "#shop" },
      { name: "Shellfish", href: "#shop" },
      { name: "Gift Cards", href: "#" },
      { name: "Subscriptions", href: "#" },
    ],
    resources: [
      { name: "Cooking Guide", href: "#cooking" },
      { name: "Recipes", href: "#" },
      { name: "Health Benefits", href: "#" },
      { name: "Storage Tips", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#" },
      { name: "Shipping Info", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Track Order", href: "#" },
      { name: "Help Center", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, color: "hover:text-blue-400" },
    { icon: Instagram, color: "hover:text-pink-400" },
    { icon: Twitter, color: "hover:text-sky-400" },
    { icon: Youtube, color: "hover:text-red-400" },
  ];

  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Newsletter */}
      <div className="relative border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-2">
              Join Our{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Ocean Family
              </span>
            </h3>
            <p className="text-gray-400 text-lg">
              Get exclusive recipes, fresh catch updates, and special offers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full bg-slate-800 border border-slate-700 focus:border-orange-500 outline-none text-white placeholder-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg hover:shadow-orange-500/40"
            >
              Subscribe
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="SeaFarmer Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-semibold">
                Sea<span className="text-orange-400">Farmer</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Premium, sustainable seafood delivered fresh from ocean to table.
            </p>

            <div className="space-y-3">
              <a className="flex items-center gap-3 text-gray-400 hover:text-orange-400">
                <Phone className="w-5 h-5" /> 994167555
              </a>
              <a className="flex items-center gap-3 text-gray-400 hover:text-orange-400">
                <Mail className="w-5 h-5" /> Seafarmer.in@gmail.com
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5" /> No 2/55 Perumal Kovil street
                Agraharam Korattur Chennai 600076
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-orange-400 mb-4 capitalize">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + Payments */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, color }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 ${color}`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="flex gap-3 text-xs text-gray-400">
            {["VISA", "MC", "AMEX", "PayPal"].map((p) => (
              <span
                key={p}
                className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 mt-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© {currentYear} Seaformer. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-orange-400">Privacy Policy</a>
            <a className="hover:text-orange-400">Terms</a>
            <a className="hover:text-orange-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
