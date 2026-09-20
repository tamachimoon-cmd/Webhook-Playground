# Webhook Playground

Local, dependency-free playground for receiving, inspecting, signing, exporting and replaying webhooks. Part of **LAB//ABERTO**.

## Features
- Catch-all endpoint at `/hook/*`
- In-memory history of the latest 100 events
- Headers, query parameters, body, timestamp and payload size
- JSON-aware body inspection
- Copyable cURL reconstruction
- HMAC SHA-256 helper
- Replay to public HTTP(S) targets with basic SSRF protections and 5 s timeout
- JSON export
- Responsive browser UI
- 1 MB request body limit

## Run
Requires Node.js 20+.

```bash
npm start
```
Open `http://localhost:8080` and send a request:

```bash
curl -X POST http://localhost:8080/hook/demo -H 'content-type: application/json' -d '{"event":"invoice.paid","id":42}'
```

## Test
```bash
npm run check
npm test
```

## Docker
```bash
docker compose up --build
```

## API
| Route | Method | Purpose |
|---|---|---|
| `/hook/*` | any | capture webhook |
| `/api/events` | GET | event summaries |
| `/api/events/:id` | GET | inspect event + cURL |
| `/api/sign` | POST | calculate HMAC |
| `/api/replay/:id` | POST | replay event |
| `/api/export` | GET | export captured events |

## Privacy and security
Events stay in server memory and disappear when the process stops. The MVP is designed for local development. Replay blocks obvious private/local targets; it is not a hardened internet-facing proxy. See [SECURITY.md](SECURITY.md).

## Project docs
- [Roadmap](ROADMAP.md)
- [Contributing](CONTRIBUTING.md)
- [Security](SECURITY.md)
- [MIT License](LICENSE)
