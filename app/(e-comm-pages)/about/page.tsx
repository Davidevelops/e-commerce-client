"use client";

import Footer from "@/app/customComponents/Footer";
import Image from "next/image";
const team = [
  { name: "Nathan Cole", image: "/assets/m1.jpg", role: "CEO" },
  {
    name: "Elijah Brooks",
    image: "/assets/m2.jpg",
    role: "Co - Founder",
  },
  {
    name: "Camille Reyes",
    image: "/assets/m3.jpg",
    role: "VP of Marketing",
  },
  { name: "Adrian Park", image: "/assets/m4.jpg", role: "Lead Manager" },
];
export default function page() {
  return (
    <div>
      <div className="banner bg-blue-100 p-30">
        <h1 className="text-3xl md:text-5xl text-center">About Us</h1>
      </div>
      <div className="vm max-w-[1500px] mx-auto">
        <div className="mission my-40 flex items-center justify-center gap-16 flex-wrap">
          <Image
            src={"/assets/team-meeting.jpg"}
            alt="team-meeting"
            width={700}
            height={700}
          />
          <div className="details w-[400px] sm:w-[600px]">
            <span>
              <p className="text-sm border-l-2 border-black ps-1 md:ps-2">
                OUR MISSION
              </p>
              <h1 className=" text-3xl md:text-5xl my-3">Our Core Beliefs</h1>
            </span>
            <p className="text-wrap w-[300px] sm:w-[500px]">
              At Anyo, our mission is to create timeless furniture that blends
              comfort, craftsmanship, and character. We believe every piece
              should tell a story—crafted with care, inspired by culture, and
              built to last for generations. <br />
              <br /> Guided by our core values of quality, sustainability, and
              design integrity, we strive to transform living spaces into
              personal sanctuaries. From concept to creation, we aim to deliver
              furniture that not only complements your home but also reflects
              your unique style and way of life.
            </p>
          </div>
        </div>

        <div className="mission my-40 flex items-center justify-center gap-16 flex-wrap-reverse">
          <div className="details w-[400px] sm:w-[600px]">
            <span>
              <p className="text-sm border-l-2 border-black ps-1 md:ps-2">
                OUR VISION
              </p>
              <h1 className=" text-3xl md:text-5xl my-3">Long-term goal</h1>
            </span>
            <p className="text-wrap w-[300px] sm:w-[500px]">
              Our vision is to become a leading name in timeless, sustainable
              furniture—recognized for designs that honor heritage while
              embracing modern living. We aim to inspire homes around the world
              with pieces that carry both beauty and purpose, fostering a deeper
              appreciation for quality craftsmanship.
              <br />
              <br /> As we grow, we see Anyo as more than a furniture brand—it’s
              a bridge between tradition and innovation, shaping the way people
              experience comfort, style, and culture in their living spaces.
            </p>
          </div>
          <Image
            src={"/assets/team-planning.jpg"}
            alt="team-planning"
            width={700}
            height={700}
          />
        </div>
        <div className="team">
          <div className="ms-28">
            <span>
              <p className="text-sm">MEMBERS</p>
              <h1 className="text-5xl">
                Our <span className="border-b-2 border-black">Team</span>
              </h1>
            </span>
          </div>
        </div>
        <div className="team-wrapper flex gap-8 justify-center my-20 flex-wrap">
          {team.map((member, index) => (
            <div key={index}>
              <div className="image-container relative w-[300px] h-[400px]">
                <Image
                  src={member.image}
                  fill
                  alt={member.role}
                  className="object-cover"
                ></Image>
              </div>
              <div className="member-details p-2">
                <h1 className="text-2xl">{member.name}</h1>
                <p className="text-gray-600 ms-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
