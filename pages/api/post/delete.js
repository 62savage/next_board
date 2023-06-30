import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method == 'DELETE') {
    try {
      const db = (await connectDB).db('forum');
      const result = await db
        .collection('post')
        .deleteOne({ _id: new ObjectId(req.query.id) });
      return res.status(200).redirect(302, '/list');
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
