import { Button, SafeAreaView } from "react-native";

export default function App() {
  async function helloGet() {
    // call api/hello/GET
    fetch("/hello")
      .then((response) => {
        // check if ok
        if (!response.ok) alert("GET !OK: " + JSON.stringify(response.body));
        // return json
        return response.json();
      })
      .then((data) => {
        // alert data
        alert("GET DATA: " + JSON.stringify(data));
      })
      .catch((error) => {
        // alert error
        alert("GET ERROR: " + JSON.stringify(error));
      });
  }

  async function helloPost() {
    // call api/hello/POST
    fetch("/hello", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hello: "from client" }),
    })
      .then((response) => {
        // check if ok
        if (!response.ok) alert("POST !OK: " + JSON.stringify(response.body));
        // return json
        return response.json();
      })
      .then((data) => {
        // alert data
        alert("POST DATA: " + JSON.stringify(data));
      })
      .catch((error) => {
        // alert error
        alert("POST ERROR: " + JSON.stringify(error));
      });
  }

  return (
    <SafeAreaView>
      <Button title="helloGet" onPress={helloGet} />
      <Button title="helloPost" onPress={helloPost} />
    </SafeAreaView>
  );
}
