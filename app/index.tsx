import { Button, SafeAreaView, View } from "react-native";

const jsonString = (json: any) => JSON.stringify(json, null, 2);

const VERCEL_URL = "https://expo-fullstack-vercel.vercel.app";
const EAS_URL = "https://expo-fullstack-vercel.expo.app";
const LOCAL_URL = "http://localhost:8081";

async function get(url: string) {
  try {
    const route = `${url}/hello?name=inacio`;
    console.log("[APP] GET URL: " + route);
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await response.json();
    alert("[APP] GET DATA: " + jsonString(data));
    console.log("[APP] GET DATA: " + jsonString(data));
  } catch (error) {
    alert("[APP] GET ERROR: " + jsonString(error));
    console.error("[APP] GET ERROR: " + jsonString(error));
  }
}

async function post(url: string) {
  try {
    const route = `${url}/hello`;
    console.log("[APP] POST URL: " + route);
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ fromClient: "message from client!" }),
    });
    const data = await response.json();
    alert("[APP] POST DATA: " + jsonString(data));
    console.log("[APP] POST DATA: " + jsonString(data));
  } catch (error) {
    alert("[APP] POST ERROR: " + jsonString(error));
    console.error("[APP] POST ERROR: " + jsonString(error));
  }
}

export default function App() {
  return (
    <SafeAreaView>
      <View style={{ gap: 10, padding: 20 }}>
        <Button title="get vercel" onPress={() => get(VERCEL_URL)} />
        <Button title="post vercel" onPress={() => post(VERCEL_URL)} />

        <Button title="get eas" onPress={() => get(EAS_URL)} />
        <Button title="post eas" onPress={() => post(EAS_URL)} />

        <Button title="get localhost" onPress={() => get(LOCAL_URL)} />
        <Button title="post localhost" onPress={() => post(LOCAL_URL)} />
      </View>
    </SafeAreaView>
  );
}
