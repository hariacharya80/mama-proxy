# MaMa Proxy
MaMa Proxy is a nginx-inspired proxy service created for fun purpose.

# Configuration
In order to configure MaMa-proxy to run you fun little server, you must first configure the bind address of the proxy.
This is the address that the proxy will listen for incoming requests.

Start by opening up the config folder. In the config folder, find `config.ma.js` file. This file is the main config file for the proxy,
just like the conf.d file for nginx, this file will hold directives for the proxy server.

To change the bind address, find the listen address variable and change the value accordingly as example below:
```javascript
  listenAddresses: ["mysweetdomain.com", "localhost"],
```
Optionally, you can bind the proxy to `0.0.0.0/0` to accept incoming requests from any addresses.

# DNS configurations
In order for the proxy to resolve addresses if needed, you must provide DNS addresses of your DNS servers.