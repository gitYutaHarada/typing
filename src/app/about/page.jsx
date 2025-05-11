
export default async function About( ) {
  const res = await fetch('http://localhost:8080/about', { cache: 'no-store' });
  const message = res.ok ? await res.text() : '取得エラー';

  return (
    <div>
      <h1>SSR で取得したメッセージ</h1>
      <p>{message}</p>
    </div>
  );
}
