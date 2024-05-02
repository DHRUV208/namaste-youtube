import Button from "./Button";

const list = ["All", "Songs", "Sports"]
const ButtonList = () => {

    return (
        <div className="flex">
            <Button name="All" />
            <Button name="Songs" />
            <Button name="Gaming" />
            <Button name="Sports" />
            <Button name="Live" />
            <Button name="News" />
        </div>
    )
};

export default ButtonList;