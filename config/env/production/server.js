module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://lin-stock-app.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
 