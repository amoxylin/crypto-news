import Meta from "../components/Meta";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import Image from "next/image";
import icon from "../public/assets/cmc.png";
import icon2 from "../public/assets/rapid.png";
import icon3 from "../public/assets/nextjs.png";

export default function Reference() {
  return (
    <div>
      <Meta title="References in making Crypto News" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
              <Image src={icon} alt="foodref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Crypto Reference
              </h2>
              <p className="leading-relaxed text-base">
                The reference that I use to create this application is
                Coin MarketCap.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Application Reference
              </h2>
              <p className="leading-relaxed text-base">
                This Crypto News Application references that I use
                is Next.js and Vercel.
              </p>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
              <Image src={icon3} alt="appref" width="80" height="80" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 flex-shrink-0">
              <Image src={icon2} alt="apiref" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                API Reference
              </h2>
              <p className="leading-relaxed text-base">
                The reference for Application Progamming Interface on this
                Crypto News is RAPID API.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
}