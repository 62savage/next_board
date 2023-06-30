import Link from 'next/link';
import { connectDB } from '../util/database';

export default async function List() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray();
  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div className="list-item">
          <Link href={`/detail/${list._id.toString()}`} prefetch={false}>
            {list.title}
          </Link>
          <Link href={`edit/${list._id.toString()}`} className="list-btn">
            ✏️
          </Link>
          <p>6월 30일</p>
        </div>
      ))}
    </div>
  );
}
