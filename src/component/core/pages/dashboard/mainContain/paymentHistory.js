const PaymentHistory = () => {
  const payments = [];
  return (
    <table className="w-full md:w-2/3 mx-auto border rounded text-[#516067]">
      <thead>
        <tr className="grid grid-cols-11 items-center border-b bg-slate-200">
          <th className="col-span-1 py-1 px-2">#</th>
          <th className="col-span-4 py-1 px-2">Name</th>
          <th className="col-span-2 py-1 px-2">quantity</th>
          <th className="col-span-2 py-1 px-2">৳</th>
          <th className="col-span-2 py-1 px-2">Date</th>
        </tr>
      </thead>
      {payments.length > 0 ? (
        payments.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center border-b grid grid-cols-11 items-center">
              <td className="col-span-1 py-1 px-2 border-r">{index + 1}</td>
              <td className="col-span-4 py-1 px-2 border-r">{item?.name}</td>
              <td className="col-span-2 py-1 px-2 border-r">
                {item?.quantity}
              </td>
              <td className="text-right col-span-2 py-1 px-2 border-r">
                {item?.amount}৳
              </td>
              <td className="text-right col-span-2 py-1 px-2 border-r">
                {item?.date}
              </td>
            </tr>
          </tbody>
        ))
      ) : (
        <tbody>
          <tr className="text-lg font-normal text-[#516067] text-center py-1">
            <td>No payment history available</td>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default PaymentHistory;
