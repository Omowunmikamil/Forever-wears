import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-28 text-sm">
        <div>
          <img src={assets.logo} className="w-28 mb-5" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 md:line-clamp-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li className="hover:translate-x-2 ase-in-out duration-300">
              Home
            </li>
            <li className="hover:translate-x-2 ase-in-out duration-300">
              About us
            </li>
            <li className="hover:translate-x-2 ase-in-out duration-300">
              Delivery
            </li>
            <li className="hover:translate-x-2 ase-in-out duration-300">
              Privacy policy
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 text-sm">
            <li className="hover:translate-x-2 ase-in-out duration-300">
              +2348138777481
            </li>
            <li className="hover:translate-x-2 ase-in-out duration-300">
              balikiskamil@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center text-gray-500 text-sm py-5">
          Copyright 2024&copy; forever.com - All Rights Reserved. Designed by
          Omowunmi.
        </p>
      </div>
    </div>
  );
}

export default Footer;
