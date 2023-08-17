import { useRouter } from "next/router";

const NewsDetailsPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>This is Dynamic News Details page: {router.query.newsId}</h1>
        </div>
    );
};

export default NewsDetailsPage;