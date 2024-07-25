"use client";
import { Card, Skeleton } from "antd";
import React from "react";

const PropertyCardSkeleton: React.FC = () => {
  return (
    <Card className="h-[559px] drop-shadow">
      <Skeleton.Image
        style={{ height: "370px", width: "355px", marginBottom: "4px" }}
        active
      />
      <Skeleton active paragraph={{ rows: 3 }} />
    </Card>
  );
};

export default PropertyCardSkeleton;
