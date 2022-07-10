import React from "react";
import PageLayout from "../../PageLayout/PageLayout";
import Sidebar from "../../PageLayout/SidebarNav/Sidebar";

export default function ServicesPage({ children }) {
  return (
    <PageLayout>
      <Sidebar />
      {children}
    </PageLayout>
  );
}
