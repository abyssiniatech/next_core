// app/customer/page.tsx
import Link from "next/link";

export default function CustomerPage() {
  const customers = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alex Brown" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      <ul className="space-y-3">
        {customers.map((customer) => (
          <li key={customer.id}>
            <Link
              href={`/customer/${customer.id}`}
              className="text-blue-600 hover:underline"
            >
              {customer.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
