import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll } from "framer-motion";

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
import net from "../../public/net.png";
import watherapp from "../../public/screen.png";
import devops from "../../public/DevOps News 1.png";
import appproduct from "../../public/appproduct.png";
import commerce from "../../public/commerce.jpeg";

export default function Carrouselbrief(props) {
  const { lenguajes } = props;
  // console.log(lenguajes.carrouselM1);
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });
  return (
    // agregando animacion al carrousel, no terminado
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      ref={carouselRef}
    >
      <div className="w-full p-4 py-10 m-5 space-x-7 carousel carousel-center rounded-box">
        {/* MODAL-1 */}
        <div className="carousel-item">
          <div className="mx-5">
            <label htmlFor="my-modal" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6 ">
                <Image
                  width={370}
                  height={200}
                  src={appproduct}
                  alt="Imagen de appProduct creada por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="text-white modal">
              <div className=" modal-box bg-gradient-to-b from-dark to-obscure">
                <label
                  htmlFor="my-modal"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  App Product {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM1}
                  <br />
                  <br />
                  <span>
                    <span className="text-xl text-infor">|</span>{" "}
                    {lenguajes.carrouselSubtitle}
                  </span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 gap-5 py-5 justify-items-center">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={bootstrap}
                      alt="logo dise??ado por josefina ritter de bootstrap"
                    />
                  </div>
                </div>

                <div className="border-2 rounded-md border-infor">
                  <Image
                    src={appproduct}
                    alt="Imagen de appProduct creada por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a href="https://app-product.vercel.app/" target="blank">
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL-2 */}
        <div className="carousel-item">
          <div>
            {/* OPEN MODAL-2 */}
            <label htmlFor="my-modal-2" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6">
                <Image
                  width={370}
                  height={200}
                  src={devops}
                  alt="Imagen de pagina de noticias de desarrollo DevOps News creado por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL-2 */}
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="text-white modal">
              <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                <label
                  htmlFor="my-modal-2"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  DevOp NEWS {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM2}
                  <br />
                  <br />
                  <span className="text-xl text-infor">|</span>{" "}
                  <span>{lenguajes.carrouselSubtitle}</span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 gap-5 py-5 justify-items-center">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                </div>
                <div className="border-2 rounded-md border-infor">
                  <Image
                    src={devops}
                    alt="Imagen de pagina de noticias de desarrollo DevOps News creado por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a href="https://dev-opnews.vercel.app/" target="blank">
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL-3 */}
        <div className="carousel-item">
          <div className="">
            {/* OPEN MODAL-3 */}
            <label htmlFor="my-modal-3" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6">
                <Image
                  width={370}
                  height={200}
                  src={portafolio}
                  alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL-3 */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="text-white modal">
              <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                <label
                  htmlFor="my-modal-3"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  Portafolio Web {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM3}
                  <br />
                  <br />
                  <span className="text-xl text-infor">|</span>{" "}
                  <span>{lenguajes.carrouselSubtitle}</span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 py-5 justify-items-center gap-y-5">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={framer}
                      alt="logo dise??ado por josefina ritter de framer"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={tailwind}
                      alt="logo dise??ado por josefina ritter de tailwind"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={next}
                      alt="logo dise??ado por josefina ritter de next"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={vercel}
                      alt="logo dise??ado por josefina ritter de verecel"
                    />
                  </div>
                </div>
                <div className="border-2 rounded-md border-infor">
                  <Image
                    src={portafolio}
                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a href="https://portafolio-nextjs-hamipluf.vercel.app/">
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 py-10 mx-10 space-x-9 carousel carousel-center rounded-box">
        {/* MODAl-4 */}
        <div className="carousel-item">
          <div className="">
            {/* OPEN MODAL-4 */}
            <label htmlFor="my-modal-4" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6">
                <Image
                  width={370}
                  height={200}
                  src={watherapp}
                  alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL-4 */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <div className="text-white modal">
              <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                <label
                  htmlFor="my-modal-4"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  Weather App {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM4}
                  <br />
                  <br />
                  <span className="text-xl text-infor">|</span>{" "}
                  <span>{lenguajes.carrouselSubtitle}</span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 py-5 justify-items-center gap-y-5">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={react}
                      alt="logo dise??ado por josefina ritter de react"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={tailwind}
                      alt="logo dise??ado por josefina ritter de tailwind"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={vercel}
                      alt="logo dise??ado por josefina ritter de verecel"
                    />
                  </div>
                </div>
                <div className="border-2 rounded-md border-infor">
                  <Image
                    responive
                    src={watherapp}
                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a
                      href="https://weatherapp-hamipluf.vercel.app/"
                      target="BLANK"
                    >
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAl-5 */}
        <div className="carousel-item">
          <div className="">
            {/* OPEN MODAL-5 */}
            <label htmlFor="my-modal-5" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6">
                <Image
                  width={370}
                  height={200}
                  src={net}
                  alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL-5 */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="text-white modal">
              <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                <label
                  htmlFor="my-modal-5"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  Netflix Clone {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM5}
                  <br />
                  <br />
                  <span className="text-xl text-infor">|</span>{" "}
                  <span>{lenguajes.carrouselSubtitle}</span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 py-5 justify-items-center gap-y-5">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={react}
                      alt="logo dise??ado por josefina ritter de react"
                    />
                  </div>
                </div>
                <div className="border-2 rounded-md border-infor">
                  <Image
                    responsive
                    src={net}
                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a href="https://netflix-clone-rg.web.app/" target="BLANK">
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAl-6 */}
        <div className="carousel-item">
          <div className="">
            {/* OPEN MODAL-6 */}
            <label htmlFor="my-modal-6" className="cursor-pointer modal-button">
              <div className="hover:shadow-xl rounded-box hover:shadow-infor hover:translate-x-6 hover:transition-all hover:origin-top-left hover:translate-y-6">
                <Image
                  width={370}
                  height={200}
                  src={commerce}
                  alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  className="rounded-box"
                />
              </div>
            </label>
            {/* BODY MODAL-6 */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="text-white modal">
              <div className="modal-box bg-gradient-to-b from-dark to-obscure ">
                <label
                  htmlFor="my-modal-6"
                  className="absolute btn btn-sm btn-circle right-2 top-2 bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                >
                  ???
                </label>
                <h3 className="text-lg font-bold text-infor ">
                  E-Commerce {`/>`}
                </h3>
                <p className="py-4">
                  {lenguajes.carrouselM6}
                  <br />
                  <br />
                  <span className="text-xl text-infor">|</span>{" "}
                  <span>{lenguajes.carrouselSubtitle}</span>
                  <br />
                  <br />
                  {lenguajes.development}:
                </p>
                <hr />
                <div className="grid grid-cols-3 py-5 justify-items-center gap-y-5">
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={html}
                      alt="logo dise??ado por josefina ritter de html"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={css}
                      alt="logo dise??ado por josefina ritter de css"
                    />
                  </div>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      priority
                      src={js}
                      alt="logo dise??ado por josefina ritter de javascript"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={react}
                      alt="logo dise??ado por josefina ritter de react"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={next}
                      alt="logo dise??ado por josefina ritter de next"
                    />
                  </div>
                  <div>
                    <Image
                      width={40}
                      height={50}
                      priority
                      src={vercel}
                      alt="logo dise??ado por josefina ritter de react"
                    />
                  </div>
                </div>
                <div className="border-2 rounded-md border-infor">
                  <Image
                    responsive
                    src={commerce}
                    alt="Imagen de portafolio web creado Por Ramiro Gumma"
                  />
                </div>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal"
                    className="btn bg-infor text-dark hover:scale-125 hover:bg-dark hover:text-infor"
                  >
                    <a
                      href="https://e-commerce-rsn-hamipluf.vercel.app/"
                      target="BLANK"
                    >
                      {lenguajes.go}
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
