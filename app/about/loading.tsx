export default async function AboutPage() {
  await new Promise(resolve => setTimeout(resolve, 3000));

  return (
    <h1 className="text-2xl font-bold">
      About page loaded
    </h1>
  );
}
