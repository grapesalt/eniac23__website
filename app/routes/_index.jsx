export const meta = () => {
  return [
    { title: "Eniac Club" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <h1 className="text-3xl">Hello Tailwind</h1>
    </div>
  );
}
