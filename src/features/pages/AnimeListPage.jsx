import { Grid, TitleBox, SearchBox, SearchInput } from "@/libs/shared/styles/layout";
import { TitlePage } from "@/libs/shared/styles/text";
import SkeletonCard from "@/libs/shared/components/SkeletonCard";
import Pagination from "@/libs/shared/components/Pagination";
import AnimeCard from "../components/AnimeCard";
import { PAGE_SIZE } from "@/libs/shared/constants/common";
import { useAnimeList } from "../hooks/useAnimeList";
import { useAnimePagination } from "../hooks/useAnimePagination";

export default function AnimeListPage() {
  const { data, total, loading, searchQuery, handleSearchChange } = useAnimeList();
  const { page, handleSetPage, skeletonItems } = useAnimePagination();

  return (
    <>
      <TitleBox>
        <TitlePage>KITSU ANIME</TitlePage>
      </TitleBox>

      <SearchBox>
        <SearchInput
          type="text"
          placeholder="Search anime..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </SearchBox>

      <Grid>
        {loading
          ? skeletonItems.map((_, idx) => <SkeletonCard key={`skeleton-${idx}`} />)
          : data.map((anime) => <AnimeCard key={anime.id} anime={anime} />)}
      </Grid>

      {!loading && total > 0 && (
        <Pagination
          total={total}
          currentPage={page}
          pageSize={PAGE_SIZE}
          onPageChange={handleSetPage}
        />
      )}
    </>
  );
}
