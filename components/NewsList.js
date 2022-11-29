import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
  },
};

export default function NewsList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://api.jsonbin.io/v3/b/6385fd26003d6444ce5df218?meta=false",
        options
      )
        .then((response) => response.json())
        .then((response) => setData(response))
        .catch((err) => console.error(err));
    }, 250);
  });

  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-2 mb-28 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          {data === null ? (
            <p className="mx-auto text-center font-bold mt-4">Loading...</p>
          ) : (
            data.map((item, index) => <NewsCard key={index} data={item} />)
          )}
        </div>
      </div>
    </section>
  );
}