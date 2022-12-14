import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import css from "../../public/css-3.png";
import js from "../../public/js.png";
import html from "../../public/html5.png";
import react from "../../public/react.png";
import github from "../../public/github.png";
import git from "../../public/git.png";
import tailwind from "../../public/Tailwind.png";
import npm from "../../public/npm.png";
import framer from "../../public/framer.png";
import next from "../../public/next.png";
import bootstrap from "../../public/bootstrap.png";
import vercel from "../../public/vercel.png";
import portafolio from "../../public/portafolio.png";
import watherapp from "../../public/screen.png";
import devops from "../../public/DevOps News 1.png";
import appproduct from "../../public/appproduct.png";

import Carrouselbrief from "../components/Carousel-brief";
import Navbar_responsive from "../components/Navbar-responsive";
import Footer from "../components/Footer";

function Briefcase(props) {
  // console.log(props)
  const { briefcase } = props;

  return (
    <>
      <Head>
        <title>Portafolio Web - Briefcase</title>
      </Head>
      <Navbar_responsive />
      <div className="w-full overflow-x-hidden bg-gradient-to-b from-obscure to-dark">
        <section>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            className="pb-20"
          >
            <section className="lg:grid lg:justify-items-center lg:p-20 lg:pb-10 lg:gap-5 lg:grid-cols-3 lg:w-full">
              {/*SLILLS*/}
              <motion.div
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                transition={{
                  delay: 1,
                  default: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="sm-m:w-full"
              >
                <div className="pt-32 text-center">
                  <h2 className="text-4xl font-extrabold lg:text-5xl franklin text-infor">
                    <span className="text-2xl text lg:hidden text-ligth">{`//`}</span>{" "}
                    {briefcase.title}{" "}
                  </h2>
                </div>

                <div className="w-11/12 pt-16 m-auto text-center">
                  <p className="font-thin leading-relaxed text-white text-md lg:text-lg franklin">
                    {briefcase.title1}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5 pt-10 gap-y-10 justify-items-center">
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="CSS"
                  >
                    <Image
                      width={65}
                      height={70}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="JavaScript"
                  >
                    <Image
                      width={65}
                      height={70}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="HTML"
                  >
                    <Image
                      width={65}
                      height={70}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="mt-32 sm-m:hidden">
                <span className="text-4xl font-medium text-dark">{`//`}</span>
              </div>

              {/*TOOLS*/}
              <motion.div
                initial={{
                  x: 200,
                  opacity: 0,
                }}
                transition={{
                  delay: 1,
                  default: {
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="sm-m:w-full"
              >
                <div className="lg:pt-32 pt-44">
                  <h2 className="text-4xl font-extrabold text-center inconsolata lg:text-5xl text-infor">
                    <span className="text-2xl text lg:hidden text-ligth">{`//`}</span>
                    {briefcase.title2}
                  </h2>
                </div>

                <div className="pt-16 m-auto text-center">
                  <div>
                    <p className="font-thin text-white text-md franklin">
                      {briefcase.title3}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-10 p-5 pt-10 lg:pb-20 justify-items-center">
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Git Hub"
                  >
                    <Image
                      width={120}
                      height={120}
                      priority
                      src={github}
                      alt="logo dise??ado por josefina ritter de github"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Git"
                  >
                    <Image
                      width={101}
                      height={101}
                      priority
                      src={git}
                      alt="logo dise??ado por josefina ritter de git"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Tailwind"
                  >
                    <Image
                      width={103}
                      height={103}
                      priority
                      src={tailwind}
                      alt="logo dise??ado por josefina ritter de tailwind"
                    />
                  </div>
                  <div
                    className="duration-75 mt-7 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="NPM"
                  >
                    <Image
                      width={126}
                      height={49}
                      priority
                      src={npm}
                      alt="logo dise??ado por josefina ritter de npm"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="React.js"
                  >
                    <Image
                      width={107}
                      height={97.74}
                      priority
                      src={react}
                      alt="logo dise??ado por josefina ritter de react"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Framer.Motion"
                  >
                    <Image
                      width={60}
                      height={90}
                      priority
                      src={framer}
                      alt="logo dise??ado por josefina ritter de framer"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Bootstrap"
                  >
                    <Image
                      width={101}
                      height={81}
                      priority
                      src={bootstrap}
                      alt="logo dise??ado por josefina ritter de bootstrap"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Vercel"
                  >
                    <Image
                      width={91}
                      height={71}
                      priority
                      src={vercel}
                      alt="logo dise??ado por josefina ritter de vercel"
                    />
                  </div>
                  <div
                    className="duration-75 active:scale-125 lg:hover:scale-125 tooltip"
                    data-tip="Next.js"
                  >
                    <Image
                      width={88}
                      height={88}
                      priority
                      src={next}
                      alt="logo dise??ado por josefina ritter de next"
                    />
                  </div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        </section>
        {/* PROYECTOS */}
        <section className="ont-black franklin">
          <div className="font-black">
            <h2 className="text-3xl text-white lg:pl-16 sm-m:text-center lg:text-5xl franklin">
              {briefcase.title4}
              <span className="text-infor">{briefcase.title5}</span>
            </h2>
            <p className="px-10 py-2 text-4xl font-extrabold">???</p>
          </div>

          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Carrouselbrief
            lenguajes= {briefcase}
            />
          </motion.div>
        </section>
      </div>
      {/* FOOTER */}

      <Footer />
    </>
  );
}

export default Briefcase;

export async function getStaticProps({ locale }) {
  const response = await import(`../lang/${locale}.json`);
  return {
    props: {
      briefcase: response.default.briefcase,
    },
  };
}
