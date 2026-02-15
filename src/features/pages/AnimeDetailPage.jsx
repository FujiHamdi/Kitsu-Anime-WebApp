import { useParams, useNavigate } from "react-router-dom";
import { useAnimeDetail } from "../hooks/useAnimeDetail";
import PageStatus from "@/libs/shared/components/PageStatus";
import { NavigationButton } from "@/libs/shared/styles/button";
import { DetailTextSecondary, Divider, RankLabel, RankNumber, SubTitleAnime, Synopsis, TitleAnime } from "@/libs/shared/styles/text";
import { Container, ContentWrapper, FlexWrapper, InfoColumn, Poster, RankItem, RankWrapper } from "@/libs/shared/styles/layout";
import { Star } from "@/assets/icons/star";

export default function AnimeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error, refetch } = useAnimeDetail(id);

  if (loading) return <PageStatus loading={loading} />;
  if (error) return <PageStatus error={error} onRetry={refetch} />;
  if (!data?.attributes) return <PageStatus loading={loading} />;

  const { attributes } = data;

  return (
  <>
    <NavigationButton onClick={() => navigate(-1)}><span style={{ fontWeight:'bold' }}>← </span> <span style={{marginLeft:'14px'}}>Back</span></NavigationButton>
    <Container>
      <TitleAnime>{attributes?.titles?.en || attributes?.titles?.en_jp}</TitleAnime>
      {attributes?.titles?.ja_jp && attributes?.titles?.ja_jp !== attributes?.titles?.en && (
        <SubTitleAnime>{attributes.titles.ja_jp}</SubTitleAnime>
      )}
      <ContentWrapper>
        <Poster src={attributes?.posterImage?.large} alt={attributes?.titles?.en} />
        <InfoColumn>
          <Synopsis>{attributes?.synopsis}</Synopsis>
            <Divider />
            <FlexWrapper> 
               <DetailTextSecondary>
              {attributes?.userCount || "N/A"}  Viewers 
              </DetailTextSecondary>
              <DetailTextSecondary>
                Rating <Star /> {attributes?.averageRating || "N/A"} 
              </DetailTextSecondary>
          </FlexWrapper>
           <Divider />
           <RankWrapper>
            <RankItem>
              <RankNumber>
                {attributes?.popularityRank
                  ? `#${attributes.popularityRank}`
                  : "N/A"}
              </RankNumber>
              <RankLabel>Popularity</RankLabel>
            </RankItem>

            <RankItem>
              <RankNumber>
                {attributes?.ratingRank
                  ? `#${attributes.ratingRank}`
                  : "N/A"}
              </RankNumber>
              <RankLabel>Ranked</RankLabel>
            </RankItem>
          </RankWrapper>
          <Divider />
          <DetailTextSecondary>Age Rating: {attributes?.ageRatingGuide || "N/A"}</DetailTextSecondary>
          <DetailTextSecondary>Duration: {attributes?.episodeLength ? `${attributes?.episodeLength} minutes` : "N/A"}</DetailTextSecondary>
          <DetailTextSecondary>Status: {attributes?.status === 'finished' ? "Completed" : attributes?.status === "current" ? "Ongoing" : "Unknown"}</DetailTextSecondary>
          <DetailTextSecondary> {attributes?.subtype === 'movie' ? "Movie" : "TV Series"}</DetailTextSecondary>
        </InfoColumn>
      </ContentWrapper>
    </Container>
  </>
  );
}
