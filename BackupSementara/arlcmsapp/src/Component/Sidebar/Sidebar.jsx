import { React } from "react";

import items from "./Config/sidebar.json";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}
