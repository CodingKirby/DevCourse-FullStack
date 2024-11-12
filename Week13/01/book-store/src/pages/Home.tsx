import Headers from "../components/common/Header";
import { formatNumber } from "../utils/format";

const COUNT = 10000;

function Home() {
    return (
        <>
            <Headers />
            <div>
                Book Store
            </div>
            <div>
                count: {formatNumber(COUNT)}
            </div>
        </>
        
    )
}

export default Home;