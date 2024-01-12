"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    id: "1",
    name: "Karim",
    avatar: "K",
    title: "Web Designer",
    description: `I've been using Brainy and it's been a game-changer for me.`,
  },
  {
    id: "2",
    name: "Jaden",
    avatar: "J",
    title: "Web Designer",
    description: `The intuitive interface and powerful AI features have significantly boosted my productivity.`,
  },
  {
    id: "3",
    name: "Sarah",
    avatar: "S",
    title: "Web Designer",
    description: `I highly recommend it to anyone looking for top-notch AI capabilities.`,
  },
  {
    id: "4",
    name: "Thomas",
    avatar: "T",
    title: "Web Designer",
    description: `Whether it's designing or coding, Brainy is a reliable and user-friendly solution.`,
  },
];
const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.id} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
