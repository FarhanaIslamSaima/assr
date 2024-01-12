import Link from "next/link";
import React from "react";

interface blogProps {
  id: String;
  title: String;
  desc: String;
  img: String;
  tagId: String;
  author: String;

  userId: String;

  comments: Comment[];
}
interface props {
  item: blogProps;
}

const AchCards = ({ item }: props) => {
  return (
    <div className="w-full min-h-[500px] ">
      <div>
        <img
          src={`/uploads/${item.img}`}
          className="w-full rounded-lg"
          alt=""
        />
        <p className="text-white text-lg md:text-md lg:text-xl my-2 md:my-5 font-sans">
          {item.title}
        </p>
        <p className="text-slate-400 text-sm md:text-xs lg:text-sm font-serif">
          {item.desc.substring(0, 300)}...
          <Link
            href={{
              pathname: "/detailedAchievement",
              query: { id: `${item.id}` },
            }}
          >
            <span
              className="text-cyan-400 opacity-80 text-md md:text-sm
              lg:text-md hover:cursor-pointer m-3
              hover:opacity-100"
            >
              See more
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AchCards;
