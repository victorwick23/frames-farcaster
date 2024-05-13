/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async () => {
  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#0200de] w-full h-full">
        <img
          tw="w-44 h-44  rounded-full mx-auto"
          src="https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/cab32c8c-2a0a-450e-1053-6daf33990600/rectcrop3"
        ></img>
        <p tw="font-bold text-center text-white w-min mx-auto text-4xl">
          VictorWick 🎩
        </p>
        <div tw="flex">
          <p tw="font-bold text-center text-white w-min mx-auto text-3xl">
            1244 Subscriber
          </p>

          <p tw="font-bold text-white w-min mx-auto text-3xl">473 Staker</p>
        </div>
        <div tw="flex bg-[#8afa51] ">
          <p tw="text-[#0200de] text-2xl text-center mx-auto">
            *By Subscribing you'll get EST. 130 ALFA Daily
          </p>
        </div>
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
