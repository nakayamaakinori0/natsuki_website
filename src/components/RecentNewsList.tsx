import Link from "next/link";
import NewsList from "@/components/NewsList";

type RecentNewsListProps = {
  limit: number;
};

export default function RecentNewsList({ limit }: RecentNewsListProps) {
  return (
    <div>
      <NewsList limit={limit}></NewsList>
      <div className={"flex justify-end pr-5"}>
        <Link href={"/news"}>
          <div className={" text-2xl hover:text-accent"}>... more</div>
        </Link>
      </div>
    </div>
  );
}
