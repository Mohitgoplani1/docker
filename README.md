# 🐳 Dockerized App with Internal Server & Nginx Reverse Proxy

This repository demonstrates a secure Docker setup where:

- The **backend server** runs inside an internal Docker network and **is not directly exposed** to the host.
- An **Nginx reverse proxy** is used to expose the server safely, forwarding requests from the outside to the internal network.

---

## 📦 Architecture

