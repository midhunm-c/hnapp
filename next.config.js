const NextFederationPlugin = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */

const remotes  = (isServer) => {
    const location = isServer ? 'ssr' : 'chunks';
  
    return {
      shared: `shared@http://localhost:4004/_next/static/${location}/remoteEntry.js`
    };
  }

const nextConfig = {
    images: {
        domains: [],
      },
      webpack(config, options) {
        const {isServer} = options;
          config.plugins.push(
            new  NextFederationPlugin({
              name: "hnrewards",
              filename: "static/chunks/remoteEntry.js",
              remotes: remotes(isServer),
              exposes: {},
              extraOptions: {
                exposePages: true
              },
            })
          );
        
        return config;
      }
}

module.exports = nextConfig
