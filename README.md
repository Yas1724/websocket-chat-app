# WebSocket Chat App (Rooms Supported)

A real-time chat application built using WebSockets that allows users to
communicate instantly in dedicated rooms. The project focuses on
understanding persistent connections, message routing, and frontend–backend
coordination rather than UI-heavy abstractions.

---

## 🚀 Features

- Real-time bi-directional communication using WebSockets
- Room-based message broadcasting
- JSON-based message protocol
- Multiple clients supported simultaneously
- Browser, Postman, and Hoppscotch compatible
- Clean and minimal dark-themed UI

---

## 🧱 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Vite

### Backend
- Node.js
- TypeScript
- ws (WebSocket library)

---

## 📡 How It Works

1. Client establishes a WebSocket connection with the server
2. Client sends a `join` event with a room identifier
3. Server tracks connected clients per room
4. When a chat message is sent:
   - Server broadcasts it only to clients in the same room
5. Frontend renders only messages belonging to the active room

---

## 📦 Message Protocol

### Join Room
```json
{
  "type": "join",
  "room": "room1"
}
