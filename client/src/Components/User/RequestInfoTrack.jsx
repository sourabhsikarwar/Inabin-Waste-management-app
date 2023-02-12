import React from "react";
import { useParams } from "react-router-dom";
import { getCollection } from "../../service/collect";
import { PieChart } from "react-minimal-pie-chart";

<PieChart
  data={[
    { title: "One", value: 10, color: "#E38627" },
    { title: "Two", value: 15, color: "#C13C37" },
    { title: "Three", value: 20, color: "#6A2135" },
  ]}
/>;

const RequestInfoTrack = () => {
  const [requestData, setRequestData] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const getReport = async () => {
      try {
        const data = await getCollection(id);
        setRequestData(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getReport();
  }, []);

  const data = [
    { title: "Plastic", value: requestData.plastic, color: "#80b918" },
    { title: "Metal", value: requestData.metal, color: "#aacc00" },
    { title: "Paper", value: requestData.paper, color: "#ffe747" },
    { title: "Organic", value: requestData.organic, color: "#fff3b7" },
  ]

  return (
    <div className="shadow rounded-lg p-8 flex flex-col gap-6">
      <div className="text-green font-bold">
        <span className="font-semibold text-black">Status: </span> Completed
      </div>
      <hr />
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-md">Request User Info</div>
            <div>
              <div className="font-light">
                <span className="font-medium">User Name: </span>
                {requestData.userName}
              </div>
              <div className="font-light">
                <span className="font-medium">Pickup Address: </span>
                {requestData.pickupAddress}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-md">Request Collector Info</div>
            <div>
              <div className="font-light">
                <span className="font-medium">Collector Name: </span>
                {requestData.collectorName}
              </div>
              <div className="font-light">
                <span className="font-medium">Collector Contact: </span>
                {requestData.collectorContact}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="font-semibold">Waste Analytics and Composition</div>
            <div>
              <PieChart className="w-32"
                data={data}
              />
              <div className="mt-4">
              {requestData.organic !== 0 && (
                <div>Organic: {requestData.organic} kg</div>
              )}
              {requestData.paper !== 0 && (
                <div>Paper: {requestData.paper} kg </div>
              )}
              {requestData.natural !== 0 && (
                <div>Organic: {requestData.natural} kg</div>
              )}
              {requestData.metal !== 0 && (
                <div>Metal: {requestData.metal} kg</div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestInfoTrack;
