import data from "../../public/data/events.json";
export const Events = () => {
    return (
        <>
            {data.map((element, index) => {
                <Event event={element} key={index} />;
            })}
        </>
    );
};
