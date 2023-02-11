import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRequestData } from "../../service/getRequestInfo";

const RequestInfo = () => {
  // const { id } = useParams();
  // const [status, setStatus] = useState("Pending");
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const getInfo = async () => {
  //     try {
  //       const res = await getRequestData(id);
  //       setData(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getInfo();
  // })

  return (
    <div className="bg-white shadow-lg h-auto w-full rounded-lg flex justify-between p-8">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium">Name: Tanmay Rajawat</h1>
          <p className="text-gray-500">Email: sourabhsikarwar1812@gmail.com</p>
          <p className="text-gray-500">Contact: 8989151788</p>
        </div>
        <div className="flex gap-4">
          <h1 className="font-medium">Address</h1>
          <p className="text-green cursor-pointer">Open in Map</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="text-gray-500">10.02.23</div>
        <div className="px-2 py-1 bg-green text-white rounded-lg">Status</div>
      </div>
    </div>
  );
};

export default RequestInfo;
