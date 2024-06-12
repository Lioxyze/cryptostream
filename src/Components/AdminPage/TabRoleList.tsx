import { RoleListProps } from "@/Utils/types";
import React from "react";
import Image from "next/image";

export const TabRoleList = ({ rolelist }: { rolelist: RoleListProps }) => {
  return (
    <div
      className="card bg-white shadow-lg rounded-lg overflow-hidden "
      key={rolelist.id}
    >
      <div className="card-content p-6">
        <div className="card-title text-2xl font-bold text-gray-900 mb-4">
          {rolelist.name}
        </div>
      </div>
    </div>
  );
};

export default TabRoleList;
