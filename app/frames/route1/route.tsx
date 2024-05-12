/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";

export const POST = frames(async (ctx) => {
  const foo = ctx.searchParams.foo;

  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#17101F] w-full h-full">
        <img
          tw="w-44 rounded-full mx-auto"
          src="https://picsum.photos/200"
        ></img>
        <p tw="font-bold text-center text-white w-min mx-auto">
          This is your username ✅
        </p>
        <div tw="flex">
          <p tw="font-bold text-center text-white w-min mx-auto">
            999 Follower
          </p>

          <p tw="font-bold text-center text-white w-min mx-auto">
            999 Following
          </p>
        </div>
      </div>
    ), // foo: bar
    buttons: [
      <Button action="post" target="/route2">
        Get ETH
      </Button>,
      <Button action="post" target="/">
        Home
      </Button>,
    ],
  };
});
