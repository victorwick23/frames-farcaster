/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async () => {
  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#17101F] w-full h-full">
        <p tw="text-white w-min mx-auto">
          Welcome, this is a testing page to Subscribe Alfafrens Channel
        </p>
      </div>
    ),
    buttons: [
      <Button
        action="link"
        target="https://www.alfafrens.com/profile/0x86e0a68ebb847a00346d215dcf98662f3d148ed2"
      >
        Subscribe
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
