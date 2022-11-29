import Meta from "../components/Meta";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import BottomNavigation from "../components/BottomNavigation";

export default function Home() {
  return (
    <div>
      <Meta title="Crypto News: News" />

      <Header />

      <NewsList />

      <BottomNavigation />
    </div>
  );
}