import Carousel from "@/components/Carousel";
import RecentNewsList from "@/components/RecentNewsList";
import PaintingSlider from "@/components/PaintingSlider";
import MovieSlider from "@/components/MovieSlider";
import Profile from "@/components/Profile";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  const pageOgImg: string = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  return (
    <>
      <SEOHead
        title={"Top"}
        titleTemplate={"Art Gallery"}
        description={
          "NATSUKI NAKAYAMA Art Gallery Home Page, 中山夏希の作品や最近の活動が閲覧できるウェブサイト"
        }
        ogType={"website"}
        imgUrl={`${pageOgImg}/while_painting.jpg`}
      ></SEOHead>
      <main className={"min-h-screen"}>
        <Carousel></Carousel>
        <RecentNewsList limit={3}></RecentNewsList>
        <PaintingSlider></PaintingSlider>
        <MovieSlider></MovieSlider>
        <Profile></Profile>
      </main>
    </>
  );
}
