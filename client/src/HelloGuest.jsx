import { useEffect, useState } from "react";

export default function HelloGuest() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // 👇 Replace this with your actual backend IP or domain
    // const backendUrl = "http://127.0.0.1:8000/hello/";
    const backendUrl = "http://103.235.106.71:8000/hello/";

    fetch(backendUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.text(); // Django returns plain text
      })
      .then((data) => setMessage(data))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      fontSize: "1.5rem",
    }}>
      <p>{message}</p>
    </div>
  );
}
