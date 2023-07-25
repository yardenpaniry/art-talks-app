import React, { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";

const WS_URL = "ws://127.0.0.1:8000";

export function Chat() {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);

  useEffect(() => {
    console.log("receivedMessages", receivedMessages);
  }, [receivedMessages]);

  const { sendJsonMessage } = useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("WebSocket connection established.");
    },
    onMessage: (event) => {
      console.log("event:", event);

      const receivedMessage = JSON.parse(event.data);
      console.log("receivedMessage:", receivedMessage);
      setReceivedMessages((prevMessages) => [...prevMessages, receivedMessage]);
    },
  });

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendJsonMessage({ message: message.trim() });
      setMessage("");
    }
  };

  return (
    <div>
      <div>
        <h3>Received Messages:</h3>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg.message}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
