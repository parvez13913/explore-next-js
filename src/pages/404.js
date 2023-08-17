import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter()
    setTimeout(() => {
        router.push("/")
    }, 5000)
    return (
        <div>
            <img src="https://www.pngkit.com/png/detail/930-9306658_404-not-found.png" alt="notFounPage"
                width="100%"
            />
        </div>
    );
};

export default NotFoundPage;