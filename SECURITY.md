# Security

Do not report vulnerabilities in public issues. Use GitHub's private vulnerability reporting when available.

Webhook Playground stores events only in process memory and limits request bodies to 1 MB. Replay targets are restricted to HTTP(S) and private/local address literals are blocked to reduce SSRF risk. This MVP is intended for local development, not direct exposure to the public internet. Never use real signing secrets in shared demonstrations.
