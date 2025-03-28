export function GET(request: Request) {
  console.log("[api]GET.");
  return Response.json({ fromApi: "message from GET!" });
}

export async function POST(request: Request) {
  console.log("[api]POST.");
  const body = await request.json();
  console.log(body);
  return Response.json({ fromApi: "message from POST!", body });
}
