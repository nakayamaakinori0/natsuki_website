import Carousel from "@/components/Carousel";
import RecentNewsList from "@/components/RecentNewsList";
import PaintingSlider from "@/components/PaintingSlider";
import MovieSlider from "@/components/MovieSlider";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <main className={"min-h-screen"}>
      <Carousel></Carousel>
      <RecentNewsList limit={3}></RecentNewsList>
      <PaintingSlider></PaintingSlider>
      <MovieSlider></MovieSlider>
      <Profile></Profile>
    </main>
  );
}
