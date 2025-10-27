import aboutImg from "../assets/about.svg";
import SectionTitle from "./SectionTItle";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutImg} alt="about" className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            dolorem voluptatem molestiae. Excepturi sequi saepe cumque corrupti
            tempore quas itaque. Deleniti odio dolor accusantium molestiae est
            eveniet nulla provident itaque!
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
