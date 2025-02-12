import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  if (id === "kids") {
    notFound();
  }
  return (
    <div>
      <h1>Checkout Page {id}</h1>
    </div>
  );
}
