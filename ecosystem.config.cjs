// module.exports = {
//     apps: [{
//       name: "test",
//       script: "./dist/app.js",
//       env_production: { NODE_ENV: "production" }
//     }]
// };

module.exports = {
    apps: [
      {
        name: "express-app ",
        script: "./dist/app.js", // The entry point of your application
        instances: "max", // Can be 'max' to use all CPU cores in cluster mode
        autorestart: true,
        watch: false, // Set to true to watch file changes and restart
        max_memory_restart: "100M", // Restart app if it exceeds 1GB of memory
        env: {
          NODE_ENV: "development"
        },
        env_production: {
          NODE_ENV: "production",
          API_URL: "13.53.36.41:3300/message"
        }
      },
      {
        name: "express-app",
        script: "./dist/app.js"
      }
    ],
  
    // Optional: Deployment configuration section
    deploy: {
      production: {
        user: "node",
        host: "212.83.163.1",
        ref: "origin/main",
        repo: "yorur github repo",
        path: "/var/www/express-app",
        "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production"
      }
    }
  };
  