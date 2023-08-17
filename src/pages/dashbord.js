import DashBordLayout from "../../components/Layouts/DashbordLayout";

const Dashbord = () => {
    return (
        <div>
            <h1>Dashbord Page</h1>
        </div>
    );
};

export default Dashbord;


Dashbord.getLayout = function getLayout(page) {
    return (
        <DashBordLayout>
            {page}
        </DashBordLayout>
    )
}