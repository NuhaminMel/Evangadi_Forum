import React from "react";
import logo from "../assets/evangadi-logo-footer.png";
import { Link } from "react-router-dom";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  return (
    <div className=" bg-slate-800 w-full flex justify-evenly w-500 pt-6 pb-4">
      <div className="flex flex-col  justify-center mt-2">
        <div className="w-200 mb-2">
          <img src={logo} alt="evangadiLogo" />
        </div>
        <div className="flex justify-evenly">
          <Link to={"https://www.facebook.com/evangaditech/"}>
            <LuFacebook />
          </Link>
          <Link to={"https://www.instagram.com/evangaditech/?hl=en"}>
            <FaInstagram />
          </Link>
          <Link to={"https://www.youtube.com/@EvangadiTech"}>
            <AiOutlineYoutube />
          </Link>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-white text-lg">Useful Link</h1>
        <div className="text-gray-500 flex flex-col">
          <a
            href="https://www.evangadi.com/explained/"
            className="hover:text-white hover:underline"
          >
            How it works
          </a>
          <a
            href="https://www.evangadi.com/legal/terms/"
            className="hover:text-white hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="https://www.evangadi.com/legal/privacy/"
            className="hover:text-white hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-white text-lg">Contact Info</h1>
        <div className="flex flex-col text-gray-500">
          <a href="/" className=" hover:text-white hover:underline">
            Evangadi Networks
          </a>
          <p className=" hover:text-white hover:underline">
            support@evangadi.com
          </p>
          <p className=" hover:text-white hover:underline">+1 202 386 2702</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
