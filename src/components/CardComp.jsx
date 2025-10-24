import React from "react";
import { HeartIcon } from "../assets/HeartIcon";

export const CardComp = (props) => {
  const { image, title, likes, content, onClick } = props;
  const [liked, setLiked] = React.useState(false);

  const onClickLike = (e) => {
    e.stopPropagation(); // prevent triggering card click
    setLiked(!liked);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-md overflow-hidden border w-[300px] cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg capitalize">{title}</h3>
          <div className="flex items-center space-x-1 text-gray-900">
            <span className="text-sm">{likes}</span>
            <div onClick={onClickLike}>
              <HeartIcon
                size={16}
                className="cursor-pointer hover:fill-red-500 hover:border-red-500"
                isliked={liked}
              />
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-900 mt-2 line-clamp-3">
          {content}
        </p>
      </div>
    </div>
  );
};
