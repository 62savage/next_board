import { connectDB } from './util/database';

export default async function Home() {
  const db = (await connectDB).db('forum');
  const data = await db.collection('post').find().toArray();
  console.log('1111', data);
  return <main></main>;
}
