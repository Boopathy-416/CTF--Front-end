



export default function DailyAnalytic() {
  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Data Analytics</h1>

      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <h2 className="text-xl font-semibold mb-4">Amount Collection Tally</h2>
        <p className="text-gray-600 mb-4">
          Detailed breakdown of all financial transactions and collections.
        </p>

        {/* Placeholder for your analytics components */}
        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
          <p className="text-gray-500">
            Connect your backend API to display analytics data
          </p>
        </div>
      </div>
    </main>
  );
}
