import Image from "next/image";
import Header from "./components/header";
import RecipeList from "./components/recipe-list";

export default function Home() {
  return (
    <div>
      <Header />
      <RecipeList />
    </div>
  );
}
