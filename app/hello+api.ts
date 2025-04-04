export function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const name = params.get("name");
  console.log("[api]GET.", name);
  return Response.json({ fromApi: "message from GET!", hello: name });
}

export async function POST(request: Request) {
  console.log("[api]POST.");
  const body = await request.json();
  console.log(body);
  return Response.json({ fromApi: "message from POST!", body });
}
