module.exports = {
  apps: [
    {
      name: 'csr',
      port: '3001',
      exec_mode: 'cluster',
      instances: '2',
      autorestart: true,
      watch: false,
      script: './.output/server/index.mjs'
    }
  ]
}
