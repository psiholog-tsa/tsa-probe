import express from 'express';

const app = express();

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3001, () => {
  console.log('Backend listening on port 3001');
});
