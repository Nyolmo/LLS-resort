import React from "react";
import { HeadProvider, Title, Meta, Link } from "react-head";

const SEO = ({
  title = "Le’Lesan Resort | Nature, Fun & Romance in Kesses",
  description = "Experience zip-lining, romantic dining, and family fun at Le’Lesan Resort in Kesses.",
  image = "https://lelesan-resort.vercel.app/images/hero.jpg",
  url = "https://lelesan-resort.vercel.app/",
}) => {
  return (
    <HeadProvider>
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="keywords" content="Le’Lesan Resort, Kesses, zip lining, romantic dinner, family fun, resort Eldoret, Kenya resorts" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:image" content={image} />
      <Meta property="og:url" content={url} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Link rel="canonical" href={url} />
    </HeadProvider>
  );
};

export default SEO;
