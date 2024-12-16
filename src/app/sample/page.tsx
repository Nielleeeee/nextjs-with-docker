import Image from "next/image";

export default function Sample() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <section className="container mx-auto p-8 text-center space-y-4">
        <h1 className="text-4xl font-bold">Sample page</h1>
        <p className="text-xl">This is a sample page.</p>
        <p className="text-xl">
          You can use this page to test your app&apos;s functionality.
        </p>

        <Image
          src="/chuwie.jpg"
          alt="Logo"
          width={500}
          height={500}
          className="mx-auto my-4 rounded-md"
          title="Chuwie"
        />
      </section>
    </main>
  );
}
