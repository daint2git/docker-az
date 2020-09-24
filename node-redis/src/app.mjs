import express from 'express'
import redis from 'redis'

const app = express();
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
})
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('Hello World');
});

redisClient.on('error', console.error)

redisClient.set('xxx', 'value of xxx', redis.print)
redisClient.get('xxx', redis.print)

app.listen(PORT, function() {
  console.log(`Running on http://${HOST}:${PORT}`)
});
