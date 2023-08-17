import { Button } from "antd";
import Link from "next/link";

const NewsHomePage = () => {
    return (
        <div>
            <Button type="primary">
                <Link href="/">Home</Link>
            </Button>
            <h1>This is News Home page</h1>
        </div>
    );
};

export default NewsHomePage;