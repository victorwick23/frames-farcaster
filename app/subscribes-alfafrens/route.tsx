/* eslint-disable react/jsx-key */
import { frames } from "./frames";
import { Button } from "frames.js/next";

const frameHandler = frames(async () => {
  return {
    urlImg: "https://picsum.photos/seed/frames.js/1146/600",
    image: (
      <div tw="flex justify-center items-center  w-full h-full">
        <div tw="flex items-center w-6/12">
          <p>asdfsdf</p>
        </div>
        <div tw="flex w-6/12 items-center bg-[#0200de] h-full">
          <img tw="w-20 h-20  rounded-full mx-auto"></img>
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
