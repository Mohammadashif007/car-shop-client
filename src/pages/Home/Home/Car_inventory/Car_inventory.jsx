import CarCard from "../../../../component/CarCard/CarCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Car_inventory = () => {

    const {isFetching, isError, data} = useQuery({
        queryKey: ["carsData"],
        queryFn: async() => {
            const response = await axios.get("http://localhost:3009/cars")
            return response.data;
        }
    })

    if(isFetching){
        return <p>Loading...</p>
    }

    if(isError){
        return <p>Error..</p>
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-extrabold my-7 text-center">
                Pick Up Your favorite car
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.map((car) => (
                    <CarCard key={car.id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default Car_inventory;
