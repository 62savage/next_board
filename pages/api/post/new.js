import { connectDB } from '@/app/util/database';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    if (req.body.title === '') {
      return res.status(500).json('제목써라');
    }
    try {
      const db = (await connectDB).db('forum');
      const result = await db.collection('post').insertOne(req.body);
      return res.redirect(302, '/list');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
