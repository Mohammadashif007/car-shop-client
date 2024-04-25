import { useEffect, useState } from "react";
import CarCard from "../../../../component/CarCard/CarCard";

const Car_inventory = () => {
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);

    const loadData = async () => {
        try {
            const response = await fetch("cars.json");

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await response.json();
            setCars(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="my-10">
            <h2 className="text-3xl font-extrabold my-7 text-center">
                Pick Up Your favorite car
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {cars.map((car) => (
                    <CarCard key={car.id} car={car}></CarCard>
                ))}
            </div>
        </div>
    );
};

export default Car_inventory;
