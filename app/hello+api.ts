export function GET(request: Request) {
  return Response.json({ hello: "FROM api/hello/GET!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  return Response.json({ hello: "FROM api/hello/POST!", body });
}
