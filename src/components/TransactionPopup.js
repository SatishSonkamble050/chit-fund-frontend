import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Close icon

const TransactionPopup = ({ user, onClose }) => {
  const [paymentMode, setPaymentMode] = useState('Cash');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [transactions, setTransactions] = useState(user.transactions);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const newTransaction = {
      amount: parseFloat(amount),
      paidDate: new Date().toISOString().split('T')[0], // Auto set payment date to today
      transactionId: transactionId || 'N/A',
      paymentMode: paymentMode || 'Not Specified',
    };
    setTransactions([...transactions, newTransaction]);
    // Here, you would typically also send the new transaction to the backend
    setPaymentMode('Cash');
    setAmount('');
    setTransactionId('');
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md shadow-md w-3/4 md:w-1/2 lg:w-1/3 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <FaTimes />
        </button>
        <h2 className="text-lg font-bold mb-2">Transaction Details for {user.name}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md mb-4">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-2 text-left">Amount</th>
                <th className="p-2 text-left">Paid Date</th>
                <th className="p-2 text-left">Payment Mode</th>
                <th className="p-2 text-left">Transaction ID</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length ? (
                transactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-2">${transaction.amount}</td>
                    <td className="p-2">{transaction.paidDate}</td>
                    <td className="p-2">{transaction.paymentMode}</td>
                    <td className="p-2">{transaction.transactionId}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-2 text-center">No transactions</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {!user.paid && (
          <>
            <h3 className="text-lg font-semibold mb-2">Add Manual Transaction</h3>
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div>
                <label className="block text-gray-700">Payment Mode</label>
                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                >
                  <option value="Cash">Cash</option>
                  <option value="Online">Online</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Amount"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Transaction ID (Optional)</label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Transaction ID"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600"
              >
                Add Transaction
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionPopup;
