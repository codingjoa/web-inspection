module.exports = {
  apps : [{
    name: 'react-spa',
    script: './server.front.js',
    watch: false,
    restart_delay: 30000,
    env: {
      'PORT': 3000,
      'HTTPS': false
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
