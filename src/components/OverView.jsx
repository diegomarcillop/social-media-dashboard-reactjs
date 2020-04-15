import React from "react";
import Social from "./social";
import styled from "styled-components";

function OverView() {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  return (
    <Container>
      <Social
        count="87"
        numbers="3"
        title="Page Views"
        icon="/img/icon-facebook.svg"
      />
      <Social
        count="52"
        numbers="-2"
        title="Likes"
        icon="/img/icon-facebook.svg"
      />
      <Social
        count="5462"
        numbers="2257"
        title="Likes"
        icon="/img/icon-instagram.svg"
      />
      <Social
        count="52K"
        title="Profile Views"
        icon="/img/icon-instagram.svg"
        numbers="1375"
      />

      <Social
        count="117"
        numbers="303"
        title="Retweets"
        icon="/img/icon-twitter.svg"
      />
      <Social
        count="507"
        numbers="553"
        title="Likes"
        icon="/img/icon-twitter.svg"
      />
      <Social
        count="107"
        numbers="-19"
        title="Likes"
        icon="/img/icon-youtube.svg"
      />
      <Social
        count="1407"
        numbers="-12"
        title="Total Views"
        icon="/img/icon-youtube.svg"
      />
    </Container>
  );
}
export default OverView;
