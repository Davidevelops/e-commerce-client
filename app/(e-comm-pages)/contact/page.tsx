"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/app/customComponents/Footer";
export default function page() {
  return (
    <div>
      <div className="banner p-30 bg-blue-100">
        <h1 className="text-center text-3xl md:text-5xl">Connect With Us</h1>
      </div>
      <div className="form-container flex items-center justify-center  max-w-[1500px] mx-auto my-28s gap-22 flex-wrap">
        <div className="get-in-touchh mt-8">
          <div>
            <p className="text-sm border-l-2 ps-2 border-black">GET IN TOUCH</p>
            <h1 className="text-3xl">Customer Support</h1>
          </div>
          <div className="contacts">
            <div className="contact flex items-center gap-3 my-6">
              <Mail
                size={60}
                strokeWidth={1}
                className="border rounded-full p-2 bg-blue-100"
              />{" "}
              <p className="text-xl">hello@anyo.com</p>
            </div>
            <div className="contact flex items-center gap-3 my-6">
              <Phone
                size={60}
                strokeWidth={1}
                className="border rounded-full p-2 bg-blue-100"
              />{" "}
              <p className="text-xl">+63 123 456 7890</p>
            </div>
            <div className="contact flex items-center gap-3 my-6">
              <MapPin
                size={60}
                strokeWidth={1}
                className="border rounded-full p-2 bg-blue-100"
              />{" "}
              <p className="text-xl">2021 Gabihan, San Ildefonso, Bulacan</p>
            </div>
          </div>
        </div>
        <div className="form w-[80%] md:w-[40%] mt-18">
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-black border-l-0 w-full my-10"
            />
          </div>
          <div className="input-group flex gap-8 my-14">
            <input
              type="text"
              placeholder="Phone"
              className="border-b border-black border-l-0 w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="border-b border-black border-l-0 w-full"
            />
          </div>
          <div className="input-group">
            <textarea
              name=""
              id=""
              placeholder="Message"
              rows={6}
              className="border-b border-black w-full"
            ></textarea>
          </div>
          <div className="button text-end my-10">
            <button className="border border-black hover:bg-black hover:text-white transition-colors duration-300 rounded-4xl px-8 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="faqs max-w-[1500px] mx-auto flex items-center justify-center gap-12 my-28 flex-wrap">
        <div className="image-container relative w-[500px] h-[600px]">
          <Image
            src={"/assets/faq.jpg"}
            alt="product"
            className="object-cover"
            fill
          ></Image>
        </div>
        <Accordion type="single" collapsible className="w-[50%]">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl hover:border-b-0">
              How long does shipping take?
            </AccordionTrigger>
            <AccordionContent className="mt-2">
              Orders are usually processed within 1–2 business days and
              delivered within 5–7 business days, depending on your location.
            </AccordionContent>
            <div className="border-b border-black"></div>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl hover:border-b-0">
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent className="mt-2">
              We accept major credit/debit cards, PayPal, and select digital
              wallets for secure checkout.
            </AccordionContent>
            <div className="border-b border-black"></div>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl hover:border-b-0">
              Can I return or exchange an item?
            </AccordionTrigger>
            <AccordionContent className="mt-2">
              Yes, you can return or exchange unused items within 14 days of
              delivery. Please check our Return Policy for more details.
            </AccordionContent>
            <div className="border-b border-black"></div>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl hover:border-b-0">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="mt-2">
              Yes, we offer international shipping to select countries. Shipping
              rates and times vary by destination.
            </AccordionContent>
            <div className="border-b border-black"></div>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl hover:border-b-0">
              How can I track my order?
            </AccordionTrigger>
            <AccordionContent className="mt-2">
              Once your order ships, you’ll receive a tracking link via email so
              you can monitor your package’s progress.
            </AccordionContent>
            <div className="border-b border-black"></div>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
    </div>
  );
}
