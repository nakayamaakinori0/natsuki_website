import Carousel from "@/components/Carousel";
import NewsList from "@/components/NewsList";
import PaintingSlider from "@/components/PaintingSlider";
import MovieSlider from "@/components/MovieSlider";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className={"min-h-screen"}>
      <Carousel></Carousel>
      <NewsList limit={3}></NewsList>
      <PaintingSlider></PaintingSlider>
      <MovieSlider></MovieSlider>
      <Profile></Profile>
    </main>
  );
}
