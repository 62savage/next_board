This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Fetching Server Data

1. Using useEffect in the client component
2. Passing data down as props from the server component

- 1번 방법을 사용하면 페이지 로드시 유저가 빈 HTML을 먼저 보게 되고 조금 시간이 지나야 html 내용이 채워진다. 그렇게 되면 검색엔진 봇들이 페이지 수집을 정상적으로 하기 힘들고 검색엔진 노출 측면에서 단점이 있을 수 있다.
- Summary : 검색노츨이 중요한 페이지는 2번 방법을 사용하자

## Query String vs URL parameter

1. Query String : ?a=1&b=2&c=3
2. URL parameter : pages/api/abc/[id].js

- 두가지 사항 모두 req.query로 출력할 수 있다.
