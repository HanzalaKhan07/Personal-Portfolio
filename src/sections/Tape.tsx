import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const words = [
  "performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
  "performance",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 bg-clip-border bg-transparent overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
          {[...new Array(2)].fill(0).map((_, idx) => (
              <div key={idx}> {/* Use unique key here */}
                {words.map((word, wordIndex) => (
                  <div key={`${word}-${wordIndex}`} className="inline-flex gap-4 items-center"> {/* Unique key for each word */}
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
