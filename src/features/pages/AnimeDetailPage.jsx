import { useParams, useNavigate } from "react-router-dom";
import { useAnimeDetail } from "../hooks/useAnimeDetail";
import PageStatus from "@/libs/shared/components/PageStatus";
import { NavigationButton } from "@/libs/shared/styles/button";
import { DetailText, DetailTextSecondary, Divider, SubTitleAnime, Synopsis, TitleAnime } from "@/libs/shared/styles/text";
import { Container, ContentWrapper, FlexWrapper, InfoColumn, Poster } from "@/libs/shared/styles/layout";
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

          <FlexWrapper> 
            <DetailTextSecondary>{attributes?.userCount || "0"} views</ DetailTextSecondary>
            <DetailTextSecondary>
              Rating <Star /> {attributes?.averageRating || "N/A"} 
            </DetailTextSecondary>
          </FlexWrapper>
          <Divider />

          <DetailText>Age Rating: {attributes?.ageRatingGuide || "N/A"}</DetailText>
          <Divider />

          <DetailText>Episode Length: {attributes?.episodeLength ? `${attributes?.episodeLength} minutes` : "N/A"}</DetailText>
          <DetailText>Total Episode: {attributes?.episodeCount || "N/A"}</DetailText>
          <DetailText>Next Release: {attributes?.nextRelease || "N/A"}</DetailText>
          <DetailText>Status: {attributes?.status === 'finished' ? "Completed" : attributes?.status || "Unknown"}</DetailText>
          <Divider />

          <DetailText>Popularity rank: {attributes?.popularityRank|| "N/A"}</DetailText>
          <DetailText>Rating rank: {attributes?.ratingRank|| "N/A"}</DetailText>

        </InfoColumn>
      </ContentWrapper>
    </Container>
  </>
  );
}
