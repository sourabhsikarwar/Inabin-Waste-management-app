import { useRef, useEffect, useState } from "react";
import swal from "sweetalert";
import { acceptRequest } from "../../service/acceptRequest";

const CollectionForm = (props) => {
  const [requestAccept, setRequestAccept] = useState(false);

  const uniqueId = useRef();
  const pickerName = useRef();
  const pickerContact = useRef();
  const organic = useRef();
  const plastic = useRef();
  const metal = useRef();
  const paper = useRef();

  useEffect(() => {
    let user_name = localStorage.getItem("name");
    let user_contact = localStorage.getItem("contact");
    if (pickerName.current) pickerName.current.value = user_name;
    if (uniqueId.current) uniqueId.current.value = props.data._id;
    // if (pickerContact.current) pickerContact.current.value = user_contact;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqId = props.data._id;
    const userName = props.data.name;
    const pickupAddress = props.data.address;
    const collectorName = pickerName.current.value;
    const collectorContact = pickerContact.current.value;
    const organic = organic.current.value;
    const plastic = plastic.current.value;
    const metal = metal.current.value;
    const glass = glass.current.value;

    try {
      if (
        uniqueIdValue === "" ||
        pickerNameValue === "" ||
        pickerEmailValue === "" ||
        pickerContactValue === "" ||
        organicValue === "" ||
        plasticValue === "" ||
        metalValue === "" ||
        glassValue === ""
      ) {
        throw new Error("Please fill all the fields");
      }
      const res = await collectWaste({
        reqId,
        userName,
        pickupAddress,
        uniqueIdValue,
        collectorName,
        collectorContact,
        organic,
        plastic,
        metal,
        glass,
      });
      console.log(res);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAccept = async () => {
    const _id = props.data._id;
    const collectorName = pickerName.current.value;
    const collectorContact = pickerContact.current.value;
    const status = "in-progress"
    try {
      const res = await acceptRequest({ _id, collectorName, collectorContact, status });
      console.log(res);
      setRequestAccept(true);
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
              ref={uniqueId}
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
              type="number"
              id="contact"
              name="contact"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleAccept}
            className="text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-darkGreen rounded text-lg mt-2"
          >
            Accept Request
          </button>
        </div>

        <hr className="bg-green my-8" />

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
                  ref={plastic}
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
                  ref={paper}
                  type="email"
                  id="paper"
                  name="paper"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-darkGreen rounded text-lg mt-2"
            >
              Complete Pickup
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionForm;
