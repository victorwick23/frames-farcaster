import { Button } from "frames.js/next";
import { frames } from "./frames";
import { redirect } from "frames.js/core";

const handleRequest = frames(async (ctx) => {
  if (ctx.pressedButton?.action === "post_redirect") {
    // when post_redirect button is clicked you must return a redirect response
    return redirect(
      "https://www.alfafrens.com/profile/0x86e0a68ebb847a00346d215dcf98662f3d148ed2"
    );
  }
  return {
    image: (
      <div tw="flex flex-col justify-center bg-[#17101F] w-full h-full">
        <p tw="text-white w-min mx-auto">
          Welcome, this is a testing page to subscribe my alfafrens
        </p>
      </div>
    ),
    buttons: [<Button action="post_redirect">Subscribe Alfafrens</Button>],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
