import { useState } from "react";
import Log from "./logger";

export default function App() {
  const [message, setMessage] = useState("");
  const [notifications, setNotifications] = useState([]);

  const addNotification = async () => {
    if (!message.trim()) {
      await Log(
        "frontend",
        "warn",
        "component",
        "Empty notification message"
      );
      return;
    }

    const notification = {
      id: Date.now(),
      message,
      time: new Date().toLocaleTimeString()
    };

    setNotifications((prev) => [notification, ...prev]);

    await Log(
      "frontend",
      "info",
      "component",
      `Notification added: ${message}`
    );

    setMessage("");
  };

  const removeNotification = async (id) => {
    setNotifications((prev) =>
      prev.filter((n) => n.id !== id)
    );

    await Log(
      "frontend",
      "info",
      "component",
      "Notification deleted"
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications App</h1>

      <input
        type="text"
        placeholder="Enter notification"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={addNotification}>
        Add
      </button>

      <div style={{ marginTop: "20px" }}>
        {notifications.map((n) => (
          <div
            key={n.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >
            <p>{n.message}</p>
            <small>{n.time}</small>
            <br />
            <button
              onClick={() => removeNotification(n.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}