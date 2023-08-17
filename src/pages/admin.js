import React from 'react';
import DashBordLayout from '../../components/Layouts/DashbordLayout';
import RootLayouts from '../../components/Layouts/RootLayouts';

const AdminPage = () => {
    return (
        <div>
            <h1>This is Admin Page</h1>
        </div>
    );
};

export default AdminPage;


AdminPage.getLayout = function getLayout(page) {
    return (
        <RootLayouts>
            <DashBordLayout>
                {page}
            </DashBordLayout>
        </RootLayouts>
    )
}