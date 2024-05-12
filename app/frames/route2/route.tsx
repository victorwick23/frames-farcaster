/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async () => {
  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#17101F] w-full h-full">
        <p tw="font-bold text-center text-white w-min mx-auto">
          You have received 0.83434 ETH
        </p>
      </div>
    ),
    buttons: [
      <Button action="post" target="/route1">
        Profile
      </Button>,
      <Button action="post" target="/">
        Home
      </Button>,
    ],
  };
});
