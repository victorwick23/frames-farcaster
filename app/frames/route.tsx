/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async () => {
  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#17101F] w-full h-full">
        <p tw="text-white w-min mx-auto">
          Welcome, this is a testing page to view your profile
        </p>
      </div>
    ),
    buttons: [
      <Button action="post" target="/route1">
        Profile Page
      </Button>,
      <Button action="post" target="/route2">
        Get ETH
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
