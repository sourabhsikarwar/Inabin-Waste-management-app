import React from "react";
import Requests from "./Requests";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Analytics from "./Analytics";
import RequestInfo from "./RequestInfo";
import CollectionForm from "./CollectionForm";
import { useParams } from "react-router-dom";
import { getRequestData } from "../../service/getRequestInfo";

const RequestView = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getRequestData({ id: id });
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getInfo();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-screen flex gap-6 container max-w-7xl mx-auto">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="text-left w-4/5">
          <div className="mb-6">
            <p className="text-xl font-semibold pb-4 px-1">Dashboard</p>
            <RequestInfo data={data}/>
          </div>
          <div>
            <p className="text-xl font-semibold pb-4 px-1">Analytics</p>
            <CollectionForm data={data}/>
          </div>
        </div>
      </div>
    </div>

    // <div>
    //   <p className="text-xl font-semibold pb-4">Dashboard</p>
    //   <RequestInfo data={data} />
    //   <div className="my-2">
    //     <CollectionForm data={data} />
    //   </div>
    // </div>
  );
};

export default RequestView;
