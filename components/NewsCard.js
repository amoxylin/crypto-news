import Link from "next/link";

export default function NewsCard(props) {
  try {
    return (
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{props.data.Title}</h2>
          <Link href={props.data.URL} target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:text-orange-600 inline-flex items-center mt-4">Read Detail
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}