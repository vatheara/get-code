import { useSearchParams } from "react-router-dom";
const Main = () => {

    const [searchParams] = useSearchParams();

    return (
        <div>
            {searchParams.get("code")}
        </div>
    )
}

export default Main