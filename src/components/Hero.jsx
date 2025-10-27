import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 gap-8 items-center">
        <article>
          <h1 className="text-5xl font-bold tracking-wider">I'm Andramouli</h1>
          <p className="mt-4 text-3xl text-gray-700 tracking-wide">
            Backend Developer
          </p>
          <p className="mt-2 text-lg text-gray-700 tracking-wide">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-200" />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-200" />
            </a>
            <a href="#">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-200" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
