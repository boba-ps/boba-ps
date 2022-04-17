import convict, { addParser, addFormats } from 'convict';
import formats from 'convict-format-with-validator';
import yaml from 'yaml';
import json5 from 'json5';
import { DefaultTlsKeyPath, DefaultTlsPath } from './http/tls';
import { DefaultEc2bPath, DefaultEc2bKeyPath } from './crypto';

addFormats(formats);
addParser({ extension: ['json', 'json5'], parse: json5.parse });
addParser({ extension: 'yaml', parse: yaml.parse });

export const ConfigSchema = {
  env: {
    doc: 'Node.js application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },

  http: {
    host: {
      doc: 'Hostname or IP address to bind the HTTPS server to.',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'BB_HTTP_HOST',
      arg: 'http-host',
    },

    port: {
      doc: 'Port to bind the HTTPS server to.',
      format: 'port',
      default: 443,
      env: 'BB_HTTP_PORT',
      arg: 'http-port',
    },

    publicUrl: {
      doc: 'Public URL accessible from the client for HTTPS connection.',
      format: 'url',
      default: 'https://osbobadispatch.yuanshen.com/',
      env: 'BB_HTTP_PUBLIC_URL',
      arg: 'http-public-url',
    },
  },

  tls: {
    path: {
      doc: 'TLS certificate path.',
      default: DefaultTlsPath,
      env: 'BB_TLS_PATH',
      arg: 'tls-path',
    },

    keyPath: {
      doc: 'TLS certificate key path.',
      default: DefaultTlsKeyPath,
      env: 'BB_TLS_KEY_PATH',
      arg: 'tls-key-path',
    },
  },

  ec2b: {
    path: {
      doc: 'Ec2b path.',
      default: DefaultEc2bPath,
      env: 'BB_EC2B_PATH',
      arg: 'ec2b-path',
    },

    keyPath: {
      doc: 'Ec2b key path.',
      default: DefaultEc2bKeyPath,
      env: 'BB_EC2B_KEY_PATH',
      arg: 'ec2b-key-path',
    },
  },

  kcp: {
    host: {
      doc: 'Hostname or IP address to bind the KCP server to.',
      format: 'ipaddress',
      default: '127.0.0.1',
      env: 'BB_KCP_HOST',
      arg: 'kcp-host',
    },

    port: {
      doc: 'Port to bind the KCP server to.',
      format: 'port',
      default: 22800,
      env: 'BB_KCP_PORT',
      arg: 'kcp-port',
    },

    publicAddr: {
      doc: 'Public IP address accessible from the client for KCP connection.',
      default: '127.0.0.1:22800',
      env: 'BB_KCP_PUBLIC_URL',
      arg: 'kcp-public-addr',
    },
  },
};

// eslint-disable-next-line no-use-before-define
export type Config = ReturnType<typeof loadConfig>;

export function loadConfig() {
  const config = convict(ConfigSchema);

  // eslint-disable-next-line no-restricted-syntax
  for (const path of [
    `./config.${config.get('env')}.json`,
    `./config.${config.get('env')}.yaml`,
  ]) {
    try {
      config.loadFile(path);
    } catch {
      // ignored
    }
  }

  return config.validate({ allowed: 'strict' });
}
