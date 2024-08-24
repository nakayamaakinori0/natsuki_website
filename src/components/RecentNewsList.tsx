import Link from "next/link";
import NewsList from "@/components/NewsList";
export default function RecentNewsList({ limit }) {
  return (
    <div>
      <NewsList limit={3}></NewsList>
      <div className={"flex justify-end pr-5"}>
        <Link href={"/news"}>
          <div className={" text-2xl hover:text-accent"}>... more</div>
        </Link>
      </div>
    </div>
  );
}
