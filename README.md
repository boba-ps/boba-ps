# BobaPS-Rewrite

BobaPS is an experimental server reimplementation for a certain anime game written in TypeScript.

## Documentation

- See [Documentation](https://github.com/boba-ps/BobaPS-Rewrite/DOCUMENTATION.md).

## Technologies used

- [Fastify](https://fastify.io) - Http(s) Server
- [prisma](https://prisma.io) - ORM (Object Relational Mapping) for Database
- [protobufjs](https://www.npmjs.com/package/protobufjs) - Used for serializing/deserializing data sent from the Client to the Server and vice versa.
- [node-kcp](https://www.npmjs.com/package/node-kcp) - A Fast and Reliable ARQ Protocol

## Usage

(Assuming that you already have Fiddler/mitmproxy/hosts set up)

1.Clone the Github Repository

```powershell
git clone https://github.com/boba-ps/BobaPS-Rewrite.git
```

2.Extract and open the repository in the Terminal

```powershell
# Assuming that you are in Windows
cd C:\path\to\the\repo\BobaPS-Rewrite
```

3.Run the following

```powershell
yarn
```

```powershell
yarn start-dev
```
