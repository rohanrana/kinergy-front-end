import React from "react";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: <i class="fas fa-box"></i>,
    // iconClosed: <RiIcons.RiArrowDownSFill />,
    // iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    // {
    // 	title: "Our Aim",
    // 	path: "/about-us/aim",
    // 	icon: <IoIcons.IoIosPaper />,
    // },
    // {
    // 	title: "Our Vision",
    // 	path: "/about-us/vision",
    // 	icon: <IoIcons.IoIosPaper />,
    // },
    // ],
  },

  {
    title: "Client",
    path: "/client-listing",
    icon: <i className="fas fa-users"></i>,
  },

  {
    title: "Scheduling",
    path: "/scheduling",
    icon: <i class="fas fa-calendar-alt"></i>,
  },

  {
    title: "Billing",
    path: "/billing",
    icon: <i class="fas fa-file-alt"></i>,
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <i class="fas fa-cog"></i>,
  },

  {
    title: "Admin",
    path: "/admin",
    icon: <i className="fas fa-user"></i>,
  },

  {
    title: "Help",
    path: "/help",
    icon: <i class="fas fa-info-circle"></i>,
  },
];
