import { ThreeJSHandler } from "./components/ThreeJSHandler";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className='bg-blue-400'>
        <ThreeJSHandler />
      </article>
    </main>
  );
}
