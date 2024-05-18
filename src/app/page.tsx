export default function Home() {
  return (
    <main className="max-w-85 mx-auto p-4">
      <nav className="w-full">
        <h2 className="font-bold">
          Chilli
          <span style={{ color: "#3CD79F" }}>Guava</span>
        </h2>
      </nav>
      <div className="flex h-screen">
        <div className="my-auto">
          <h1 className="font-bold md:text-6xl text-4xl">
            Build better software <span className="block">faster ⚡</span>
          </h1>
          <p className="md:text-2xl text-base md:mt-5 mt-6">
            Outsource your company&#39;s software development effort to
            engineers with experience from Google, Microsoft and Amazon.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </main>
  );
}
