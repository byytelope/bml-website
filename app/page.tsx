import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl uppercase">Home</h1>
      <Link href="/whistleblowing" className="text-bml-red hover:text-black">
        Whistleblowing
      </Link>
    </section>
  );
}
