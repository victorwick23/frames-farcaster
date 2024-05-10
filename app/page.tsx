import { getFrameMetadata } from "@coinbase/onchainkit/core";
import type { Metadata } from "next";

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Who is My favorite Dev?",
    },
  ],
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/images/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: "My Favorite NFT",
  description:
    "This frame is speaking who is my favourite people from their iconic NFT",
  openGraph: {
    title: "Cosmic Cowboys",
    description:
      "This frame is speaking who is my favourite people from their iconic NFT",
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/images/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Favorit NFT</h1>
    </>
  );
}
