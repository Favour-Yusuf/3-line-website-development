export const CardPayment2 = () => (
  <div className="text-white p-8 flex flex-col md:flex-row items-center">
    <div className="flex-1">
      <h2 className="text-xl font-bold">Card Payments</h2>
      <p className="mt-2 text-sm text-gray-300">
        Whether it's debit, credit, or prepaid cards, we make it easy for your customers to pay securely and efficiently.
      </p>
    </div>
    <div className="flex-1 flex justify-center mt-4 md:mt-0">
      {/* Replace this with a styled card preview */}
      <div className="w-48 h-28 bg-green-500 rounded-xl shadow-lg" />
    </div>
  </div>
)