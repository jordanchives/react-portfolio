import React from 'react';
import PageContent from '../PageContent';
import { Outlet } from 'react-router-dom';

function Page() {
    return (
        <div>
            <PageContent>
                <Outlet />
            </PageContent>
        </div>
    );
}

export default Page;
