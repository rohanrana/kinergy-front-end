import React from "react";
import FacilityManagement from "../../Containers/admin/FacilityManagement";
import PageLayout from "../../PageLayout/PageLayout";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";
import AdminRouter from "./AdminRouter";

const FacilityManagementPage = () => {
  return (
    <PageLayout>
      <Sidebar />
      <FacilityManagement />
    </PageLayout>
  );
};

export { FacilityManagementPage };
