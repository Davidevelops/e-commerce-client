import { Handbag, Truck, ClockFading, Package } from "lucide-react";
export default function Banner() {
  const items = [
    {
      icon: Handbag,
      heading: "Free Shipping",
      subheading: "Free Delivery",
    },
    {
      icon: Package,
      heading: "Free Shipping",
      subheading: "Quick Refunds",
    },
    {
      icon: ClockFading,
      heading: "24 Hours service",
      subheading: "24/7 Support",
    },
    {
      icon: Truck,
      heading: "Fast Delivery",
      subheading: "Quick Delivery",
    },
  ];
  return (
    <div className="flex justify-center items-center my-20 gap-8 flex-wrap max-w-[1500px] mx-auto">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center">
          {<item.icon size={50} strokeWidth={1} />}
          <span className="ms-4">
            <h1 className="font-semibold text-xl md:text-2xl">
              {item.heading}
            </h1>
            <p className="ms-1 text-sm">{item.subheading}</p>
          </span>
        </div>
      ))}
    </div>
  );
}
