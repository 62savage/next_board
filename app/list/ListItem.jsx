'use client';

import Link from 'next/link';

export default function ListItem({ result }) {
  const data = JSON.parse(result);
  return (
    <div>
      {data.map((list, i) => (
        <div className="list-item" key={`list_${i}`}>
          <Link href={`/detail/${list._id.toString()}`} prefetch={false}>
            {list.title}
          </Link>
          <Link
            href={`edit/${list._id.toString()}`}
            className="list-btn"
            prefetch={false}
          >
            ✏️
          </Link>
          <button
            onClick={(e) => {
              fetch(`/api/post/delete?id=${list._id}`, { method: 'DELETE' }) //
                .then((r) => {
                  if (r.status === 200) {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = 'none';
                    }, 1000);
                  } else {
                    alert(`server Error`);
                  }
                })
                .catch(console.error);
            }}
          >
            🗑️
          </button>
          <p>6월 30일</p>
        </div>
      ))}
    </div>
  );
}
