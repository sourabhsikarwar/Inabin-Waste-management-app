import { useRef, useEffect, useState } from "react";
import swal from "sweetalert";
import { acceptRequest } from "../../service/acceptRequest";
import { collectWaste } from "../../service/allPickRequest";

const CollectionForm = (props) => {
  const [requestAccept, setRequestAccept] = useState(false);
  const [completed, setCompleted] = useState(false);

  const collectorId = useRef();
  const pickerName = useRef();
  const pickerContact = useRef();
  const organic = useRef();
  const plastic = useRef();
  const metal = useRef();
  const paper = useRef();

  useEffect(() => {
    const id = localStorage.getItem("userId");
    console.log(props);
    if (props.data.collectorId && id !== props.data.collectorID) {
      swal("Error!", "You are not authorized to collect this waste!", "error");
      props.history.push("/collector");
    }
    if (props.data.collectorID)
      setRequestAccept(true);
    if (props.data.status === "completed") {
      setCompleted(true);
      setRequestAccept(true);
    }
    let user_name = localStorage.getItem("name");
    let user_contact = localStorage.getItem("contact");
    if (pickerName.current) pickerName.current.value = user_name;
    if (collectorId.current) collectorId.current.value = localStorage.getItem("userId");
    if (pickerContact.current) pickerContact.current.value = user_contact;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqId = props.data._id;
    const userName = props.data.requestUser;
    const reqContact = props.data.contact;
    const pickupAddress = props.data.address;
    const collectorName = pickerName.current.value;
    const collectorContact = pickerContact.current.value;
    const organic1 = organic.current.value || 0;
    const plastic1 = plastic.current.value || 0;
    const metal1 = metal.current.value || 0;
    const glass1 = paper.current.value || 0;
    const collectorId = localStorage.getItem("userId");
    const requestUserId = props.data.requestUserID;
    try {
      if (
        organic1 === "" ||
        plastic1 === "" ||
        metal1 === "" ||
        glass1 === ""
      ) {
        throw new Error("Please fill all the fields");
      }
      const res = await collectWaste({
        reqId,
        userName,
        pickupAddress,
        reqContact,
        collectorId,
        collectorName,
        requestUserId,
        collectorContact,
        organic1,
        plastic1,
        metal1,
        glass1,
      });
      if (res && res.status === 201) {
        setCompleted(true);
        swal("Success!", "Waste Collected! You got 10 points !", "success");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAccept = async () => {
    const _id = props.data._id;
    const collectorName = pickerName.current.value;
    const collectorContact = pickerContact.current.value;
    const status = "in-progress"
    const collectorID = localStorage.getItem("userId");
    try {
      const res = await acceptRequest({ _id, collectorName, collectorContact, status, collectorID });
      setRequestAccept(true);
      swal("Success!", "Request Accepted!", "success");
    } catch (error) {
      swal("Error!", "Something went wrong!", "error");
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg p-8">

        <div>
          <h1 className="text-darkGreen text-2xl font-bold mb-4">
            Collect Waste
          </h1>
          <div className="relative mb-4 ">
            <label
              htmlFor="unique-id"
              className="leading-7 text-sm text-gray-600"
            >
              Collector Id
            </label>
            <input
              ref={collectorId}
              type="text"
              id="unique-id"
              disabled
              name="unique-id"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 ">
            <label
              htmlFor="picker-name"
              className="leading-7 text-sm text-gray-600"
            >
              Name
            </label>
            <input
              ref={pickerName}
              type="text"
              disabled
              id="picker-name"
              name="picker-name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="picker-email"
              className="leading-7 text-sm text-gray-600"
            >
              Contact
            </label>
            <input
              ref={pickerContact}
              disabled
              type="number"
              id="contact"
              name="contact"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {
            !requestAccept && !completed && (
              <button
                onClick={handleAccept}
                className="text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-darkGreen rounded text-lg mt-2"
              >
                Accept Request
              </button>
            )
          }
        </div>

        <hr className="bg-green" />

        {requestAccept && (
          <div>
            <h1 className="text-xl text-darkGreen my-4">
              Waste Composition (in % from 100)
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="organic"
                  className="leading-7 text-sm text-gray-600"
                >
                  Organic
                </label>
                <input
                  ref={organic}
                  max={100}
                  disabled={completed}
                  type="number"
                  id="organic"
                  name="organic"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="metal"
                  className="leading-7 text-sm text-gray-600"
                >
                  Metal
                </label>
                <input
                  ref={metal}
                  type="number"
                  disabled={completed}
                  max={100}
                  id="metal"
                  name="metal"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="plastic"
                  className="leading-7 text-sm text-gray-600"
                >
                  Plastic
                </label>
                <input
                  max={100}
                  ref={plastic}
                  disabled={completed}
                  type="number"
                  id="plastic"
                  name="plastic"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4 flex flex-col">
                <label
                  htmlFor="paper"
                  className="leading-7 text-sm text-gray-600"
                >
                  Paper
                </label>
                <input
                  max={100}
                  ref={paper}
                  disabled={completed}
                  type="email"
                  id="paper"
                  name="paper"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            {!completed && (
              <button
                onClick={handleSubmit}
                className="text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-darkGreen rounded text-lg mt-2"
              >
                Complete Pickup
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionForm;
