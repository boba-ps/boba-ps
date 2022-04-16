import convict, { addParser, addFormats } from "convict";
import formats from "convict-format-with-validator";
import yaml from "yaml";
import json5 from "json5";

addFormats(formats);
addParser({ extension: ["json", "json5"], parse: json5.parse });
addParser({ extension: "yaml", parse: yaml.parse });

export const Config = convict({
  env: {
    doc: "Node.js application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },

  http: {
    host: {
      doc: "Hostname to bind the HTTPS server to.",
      format: "ipaddress",
      default: "127.0.0.1",
      env: "BB_HTTP_HOST",
      arg: "http-host",
    },

    port: {
      doc: "Port to bind the HTTPS server to.",
      format: "port",
      default: 443,
      env: "BB_HTTP_PORT",
      arg: "http-port",
    },
  },
});

try {
  Config.loadFile([
    `./config.${Config.get("env")}.json`,
    `./config.${Config.get("env")}.yaml`,
  ]);
} catch {
  // ignored
}

Config.validate({ allowed: "strict" });
