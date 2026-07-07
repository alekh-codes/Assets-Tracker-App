const MobileTable = ({asset}) => {
  return (
    <>
      <div className="block md:hidden h-100 border-2 p-5 mt-5 rounded-2xl overflow-y-scroll border-white">
        {asset.map((item, index) => (
          <div key={index} className="border rounded-xl p-4 mb-4">
            <p>
              <strong>ID:</strong> PD{index + 1}
            </p>
            <p>
              <strong>Asset:</strong> {item.assets}
            </p>
            <p>
              <strong>Category:</strong> {item.category}
            </p>
            <p>
              <strong>Department:</strong> {item.department}
            </p>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-xl
        ${
          item.status === "Available"
            ? "bg-green-400/15 text-green-400"
            : item.status === "Assigned"
              ? "bg-yellow-400/15 text-yellow-300"
              : "bg-red-400/15 text-red-400"
        }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileTable