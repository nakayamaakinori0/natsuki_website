import React from "react";
import NewsList from "@/components/NewsList";

function News() {
  return (
    <div>
      <NewsList limit={1000}></NewsList>
    </div>
  );
}

export default News;
