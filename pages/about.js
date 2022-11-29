import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import Image from "next/image";
import icon from "../public/assets/ega.png";

export default function About() {
  return (
    <div>
      <Meta title="Crypto News: About" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={icon}
                    alt="profile"
                    className="rounded-full"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Ega Fawwaz Khansa
                  </h2>
                  <div className="w-12 h-1 bg-orange-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Currently studying Computer Engineering
                    in Diponegoro University.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-400 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Hello! My name is Ega Fawwaz Khansa. I am currently studying
                  Computer Engineering in Diponegoro University. I am someone that
                  likes to do outdoor activity, excercising, and talking to various
                  kind of people. I have got quite interest in developing mobile apps
                  and some interest in web progamming.
                </p>

                <p className="leading-relaxed text-lg mb-4">
                  Crypto News is an progessive web application that provides
                  latest crypto prices, website, total stock, and etc. This
                  application was build using Next.js and using Vercel to deploy
                  this application so that it can be accessible through smartphone
                  and web link.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}