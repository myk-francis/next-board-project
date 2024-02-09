import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";

const liveblocks = new Liveblocks({
  secret:
    "sk_dev__UzQEVyr85ZS_21JSzYwPmY97tH0F-J2pJTgKbhfFFUCUWRvH9k_Z98BG4Sj_fVt",
});

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: Request) {
  // Get the current user from your database
  const authorization = await auth();
  const user = await currentUser();

  // console.log("liveblocks-auth 🚀 ~ POST ~ user:AUTH_INFO:", {
  //   authorization,
  //   user,
  // });

  if (!user || !authorization) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();
  const board = await convex.query(api.board.getOne, { id: room });

  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    id: user.id,
    name: user.firstName + " " + user.lastName,
    image: user.imageUrl,
  };

  const session = await liveblocks.prepareSession(user.id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}
