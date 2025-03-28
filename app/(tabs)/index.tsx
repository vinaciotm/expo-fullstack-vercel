import { Button, SafeAreaView } from "react-native";

const jsonString = (json: any) => JSON.stringify(json, null, 2);

export default function App() {
  async function get(url: string) {
    // GET hello
    fetch(url + "/hello")
      .then((response) => {
        // check if ok
        if (!response.ok) alert("GET !OK: " + jsonString(response.body));
        // return json
        return response.json();
      })
      .then((data) => {
        // alert data
        alert("GET DATA: " + jsonString(data));
      })
      .catch((error) => {
        // alert error
        alert("GET ERROR: " + jsonString(error));
      });
  }

  async function post(url: string) {
    // POST hello/POST
    fetch(url + "/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromClient: "message from client!" }),
    })
      .then((response) => {
        // check if ok
        if (!response.ok) alert("POST !OK: " + jsonString(response.body));
        // return json
        return response.json();
      })
      .then((data) => {
        // alert data
        alert("POST DATA: " + jsonString(data));
      })
      .catch((error) => {
        // alert error
        alert("POST ERROR: " + jsonString(error));
      });
  }

  const VERCEL_URL = "https://expo-fullstack-vercel.vercel.app";
  const EAS_URL = "https://expo-fullstack-vercel.expo.app";
  const LOCAL_URL = "http://localhost:8081";

  return (
    <SafeAreaView>
      <Button title="get vercel" onPress={() => get(VERCEL_URL)} />
      <Button title="post vercel" onPress={() => post(VERCEL_URL)} />

      <Button title="get eas" onPress={() => get(EAS_URL)} />
      <Button title="post eas" onPress={() => post(EAS_URL)} />

      <Button title="get localhost" onPress={() => get(LOCAL_URL)} />
      <Button title="post localhost" onPress={() => post(LOCAL_URL)} />
    </SafeAreaView>
  );
}
