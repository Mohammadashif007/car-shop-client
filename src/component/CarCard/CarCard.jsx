const CarCard = ({ car }) => {
    const { name, description, price, image } = car;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                className="h-[200px] w-full"
                    src={image}
                    alt="carImage"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p className="text-2xl font-bold text-orange-500">{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
