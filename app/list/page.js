import { connectDB } from '../util/database';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();
  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div className="list-item">
          <h>{list.title}</h>
          <p>6월 30일</p>
        </div>
      ))}
    </div>
  );
}
