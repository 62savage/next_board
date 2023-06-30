import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'POST') {
    if (req.body.title === '') {
      return res.status(500).json('제목써라');
    }
    try {
      const { title, content, _id } = req.body;
      const db = (await connectDB).db('forum');
      const result = await db
        .collection('post')
        .updateOne({ _id: new ObjectId(_id) }, { $set: { title, content } });
      return res.status(200).redirect(302, '/list');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
