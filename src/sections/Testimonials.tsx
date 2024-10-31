import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Antoine Dupont",
    position: "Director of Sustainable Initiatives @ EcoFriendly Products",
    text: "Hanzala's attention to detail and creative approach truly transformed our online presence. His dedication was evident and I would definitely recommend his services to others.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emilia Koch",
    position: "Owner & Creative Lead @ Creative Solutions",
    text: "Working with Hanzala was a fantastic experience! He not only delivered our project on time but also surprised us by finishing ahead of schedule. The results exceeded all our expectations!",
    avatar: memojiAvatar2,
  },
  {
    name: "George Taylor",
    position: "Co-Founder @ Startup Hub",
    text: "Teaming up with Hanzala was a game changer for us. His full-stack development skills played a crucial role in launching our platform, and we couldn't be happier with the outcome!",
    avatar: memojiAvatar1,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="HAPPY CLIENTS"
          title="What Clients Say about ME"
          description="Don't just take my word for it. See what my clients have to say about my work"
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
