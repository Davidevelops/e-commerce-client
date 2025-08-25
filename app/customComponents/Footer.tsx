// components/Footer.tsx
import { Facebook, Twitter, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-[1500px] mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide">ANYO</h2>
        </div>

        {/* Store */}
        <div>
          <h3 className="mb-4 font-medium">Store</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>+63 123 456 7890</li>
            <li>hello@anyo.com</li>
            <li>2021 Gabihan, San Ildefonso, Bulacan</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-medium">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="mb-4 font-medium">Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Help & FAQ's</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Coming Soon</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1500px] mx-auto px-6 mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          <Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Youtube className="w-5 h-5 cursor-pointer hover:text-gray-400" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </footer>
  );
}
