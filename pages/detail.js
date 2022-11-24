import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Detail() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    const _data = JSON.parse(router.query.data).data;
    setTitle(`: ${_data.Coin}`);
    setData(_data);
  }, []);

  return (
    <div>
      <Meta title={`Crypto News${title}`} />

      <Header />

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={data ? data.Image : ""}
              width="400"
              height="400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest mb-2">
                {data ? data.Symbol : ""}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {data ? data.Coin : ""}
              </h1>
              <p className="leading-relaxed">{data ? data.Link : ""}</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={data ? data.Image : ""} width="720" height="600" />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{data ? data.Coin : ""}</h1>
            <p class="mb-8 leading-relaxed">{data ? data.Link : ""}</p>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}