import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
const ExperiencesCard = ({ experience }) => {
  const { image, location, price, rating, title } = experience;

  return (
    <div className="w-full shadow-md hover:shadow-xl transition-shadow duration-150 cursor-pointer">
      <Link
        to="/coming-exp"
        className="block relative h-32 rounded overflow-hidden"
      >
        <img
          alt="e-commerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </Link>
      <div className="p-2">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {location}
        </h3>
        <h2 className="text-gray-900 title-font text-sm font-medium">
          {title}
        </h2>
        <p className="mt-1 text-xs">${price} per person</p>
        <div className="flex mt-1">
          <StarIcon className="h3 w-3 text-primaryColor" />
          <StarIcon className="h3 w-3 text-primaryColor" />
          <StarIcon className="h3 w-3 text-primaryColor" />
          <StarIcon className="h3 w-3 text-primaryColor" />
          <StarIcon className="h3 w-3 text-primaryColor" />{" "}
          <span className="ml-1 text-xs">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
