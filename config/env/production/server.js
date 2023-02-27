module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://arcane-caverns-30725.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
 