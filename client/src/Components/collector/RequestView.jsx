import React from "react";
import Requests from "./Requests";
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
      <p className="text-xl font-semibold pb-4">Dashboard</p>
      <RequestInfo data={data} />
      <div className="my-2">
        <CollectionForm data={data} />
      </div>
    </div>
  );
};

export default RequestView;
