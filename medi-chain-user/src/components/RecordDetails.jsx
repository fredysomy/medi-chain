import React from "react";

const RecordDetail = ({ title, center, date, img, access }) => {
    console.log(access)
    return (
      <div className="p-4  border rounded-lg shadow-md bg-white max-w-md mx-auto mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-500">{center}</p>
          </div>
          <button className="text-red-500 font-medium">Delete Record</button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500">Last Updated</p>
          <p className="text-lg font-medium">{date}</p>
        </div>
        <div className="mt-4">
          <img src={img} alt="CT Scan" className="w-full h-auto rounded border border-blue-200" />
        </div>
  
        {/* Access List */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Access</h3>
           
          </div>
          {access.map((doctor, index) => (
            <div className="flex items-center p-5 border rounded-lg shadow-md bg-gray-100 mb-2 max-w-md mx-auto">
            <img
              src="https://via.placeholder.com/40" // Placeholder image
              alt={doctor}
              className="w-14 h-14 rounded-full mr-4"
            />
            <div className="flex-grow">
              <p className="text-sm font-semibold">{doctor}</p>
              <p className="text-xs text-gray-500">Last Updated: Monday, 27 March 2023</p>
            </div>
            <button className="text-red-500 text-sm font-medium">Remove Access</button>
          </div>
          ))}
        </div>
      </div>
    );
  };

  export default RecordDetail;