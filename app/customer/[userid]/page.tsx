
type PageProps = {
  params: {
    userid: string;
  };
};

export default function CustomerDetailPage({ params }: PageProps) {
  const { userid } = params;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Customer Details</h1>
      <p className="text-lg">
        Customer ID: <span className="font-semibold">{userid}</span>
      </p>
    </div>
  );
}
