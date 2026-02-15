import { Star } from "@/assets/icons/star";
import { Card, Content, Image } from "@/libs/shared/styles/card";
import { DetailText } from "@/libs/shared/styles/text";
import React from "react";
import { useNavigate } from "react-router-dom";
import { truncate } from "@/libs/shared/utils/truncate";

const AnimeCard = React.memo(({ anime }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/anime/${anime.id}`);
  };
  const { attributes } = anime;

  return (

    <Card onClick={handleClick}>
      <Image
        src={attributes?.posterImage?.medium}
        alt={attributes?.titles?.en || "anime"}
      />
      <Content>
        <DetailText>
          {truncate(attributes?.titles?.en || attributes?.titles?.en_jp, 20) || "No English Title"}
        </DetailText>
        <p>
          {truncate(attributes?.titles?.ja_jp, 10) || "No Japanese Title"}
        </p>
        <DetailText style={{ color: "yellow" }}> Rating <Star /> {attributes.averageRating || "N/A"}  </DetailText>
      </Content>
    </Card>
  );
});


export default AnimeCard;
