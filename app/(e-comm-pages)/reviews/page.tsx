"use client";

import Footer from "@/app/customComponents/Footer";
import Image from "next/image";

export default function Page() {
  const reviews = [
    {
      name: "Maria Santos",
      testimony: `"Anyo turned my empty condo into a warm, inviting space. Every piece I purchased—from the handcrafted dining table to the cozy accent chairs—feels like it was made with heart. The craftsmanship is exceptional, and you can tell the makers truly care about their work. My friends always ask where I got my furniture, and I’m proud to say it’s from Anyo."`,
      image: "/assets/r1.avif",
    },
    {
      name: "David Lim",
      testimony: `"I’ve bought furniture from many stores before, but nothing compares to the quality and attention to detail I’ve seen from Anyo. Their designs strike the perfect balance between modern comfort and the timeless charm of Filipino heritage. Every time I walk into my living room, I’m reminded of how much their pieces have elevated my home."`,
      image: "/assets/r2.jpg",
    },
    {
      name: "Mark Dela Cruz",
      testimony: `"Anyo isn’t just selling furniture—they’re creating stories. The coffee table in my living room has already been the centerpiece for countless family gatherings, and the dining set feels like it will be with us for decades. Every detail, from the wood grain to the finishing, speaks of craftsmanship and passion."`,
      image: "/assets/r3.jpg",
    },
    {
      name: "Clark Lee",
      testimony: `"From the moment I stepped into Anyo’s showroom, I knew I’d found my style. The staff took the time to understand my vision and helped me choose pieces that not only matched my home but also felt like an extension of my personality. The delivery process was smooth, and the furniture was even more stunning in person."`,
      image: "/assets/r4.jpg",
    },
  ];

  return (
    <div>
      <div className="banner bg-blue-100 p-30">
        <h1 className="text-center text-5xl">Customer Reviews</h1>
      </div>
      <div className="review max-w-[1500px] mx-auto my-20">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-20 flex-wrap"
          >
            <div className="image-container w-[400px] h-[600px] relative my-15">
              <Image
                src={review.image}
                alt="review"
                fill
                className="object-cover"
              />
            </div>
            <div className="details text-wrap wrap-break-word">
              <h1 className="text-3xl w-[400px] md:w-3xl p-2">
                <i>{review.testimony}</i>
              </h1>
              <p className="text-2xl text-gray-600 mt-6">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
