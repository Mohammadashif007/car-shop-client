import { useEffect, useState } from "react";

const Car_inventory = () => {
    const [cars, setCart] = useState([]);

    const loadData = async() => {
        fetch('cars.json')
        .then(res => res.json())
        .then(data => setCart(data))
    }

    useEffect(() => {
        loadData()
    },[])

    console.log(cars);

    return (
        <div>
        
        </div>
    );
};

export default Car_inventory;