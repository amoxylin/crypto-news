import Meta from "../components/Meta";
import Header from "../components/Header";
import List from "../components/List";
import BottomNavigation from "../components/BottomNavigation";

export default function Home() {
  return (
    <div>
      <Meta title="Crypto News: Coins" />

      <Header />

      <List />

      <BottomNavigation />
    </div>
  );
}