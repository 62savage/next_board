import { connectDB } from '@/app/util/database';
import { ObjectId } from 'mongodb';

export default async function Detail({ params: { slug } }) {
  const db = (await connectDB).db('forum');
  const result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(slug) });

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <div>{result.content}</div>
    </div>
  );
}
