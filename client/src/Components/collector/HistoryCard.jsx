import React from "react";
import { getCollection } from "../../service/collect";

const HistoryCard = () => {
    const [history, setHistory] = React.useState([]);

    React.useEffect(() => {
        const getHistory = async () => {
            try {
                const id = localStorage.getItem("userId");
                const data = await getCollection(id);
                console.log(data.data);
                setHistory(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getHistory();
    }, []);

    return (
        <div>
            {history.map((item) => {
                var tDate = "";
                if (item.createdAt) {
                    const date = new Date(item.createdAt);
                    tDate = date.toLocaleDateString();
                }
                return (
                    <div className='w-full p-4 h-40 rounded-lg shadow-md justify-center'>
                        <div className="flex justify-between">
                            <div className='flex flex-col justify-between'>
                                <div>{item.requestId}</div>
                                <div className='text-black'>{item.pickupAddress}</div>
                                <div className='capitalize'>{item.userName}<p className="text-xs text-gray-500">({item.requestUserId})</p></div>
                            </div>
                            <div className='flex flex-col items-center text-right justify-between'>
                                <div>
                                    <div className='text-gray-400'>{tDate}</div>
                                    <div className="text-sm text-amber-600">+ 10 Points</div>
                                </div>
                            </div>
                        </div>
                        <div className="my-3 text-sm flex justify-between flex-wrap w-3/4">
                            <p>Organic : {item.organic}%</p>
                            <p>Paper : {item.paper}%</p>
                            <p>Metal : {item.metal}%</p>
                            <p>Plastic : {item.plastic}%</p>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default HistoryCard;