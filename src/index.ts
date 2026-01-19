//@ts-ignore
import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// room -> clients
const rooms = new Map<string, Set<WebSocket>>();

wss.on("connection", (ws) => {
  let currentRoom: string | null = null;

  ws.on("message", (data) => {
    const msg = JSON.parse(data.toString());

    if (msg.type === "join") {
      currentRoom = msg.room;
        //@ts-ignore
      if (!rooms.has(currentRoom)) {
        //@ts-ignore
        rooms.set(currentRoom, new Set());
      }//@ts-ignore
      rooms.get(currentRoom)!.add(ws);
      return;
    }

    if (msg.type === "chat" && currentRoom) {
      const payload = JSON.stringify({
        type: "chat",
        room: currentRoom,
        text: msg.text,
      });

      for (const client of rooms.get(currentRoom)!) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(payload);
        }
      }
    }
  });

  ws.on("close", () => {
    if (currentRoom) {
      rooms.get(currentRoom)?.delete(ws);
    }
  });
});
