import { error } from "console";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");
  let e;
  const res = await fetch(
    `https://praveen-disney-clone.azurewebsites.net/api/getaisuggestion?term=${term}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24, //24 hours
      },
    }
  );

  const message = await res.text();
  return Response.json({ message });
}
