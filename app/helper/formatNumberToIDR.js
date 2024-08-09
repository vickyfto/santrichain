import React from "react";

const FormatNumberToIDR = (value) => {
  if (value === null) return "10.000";
  if (value) {
    return new Intl.NumberFormat("id", {
      style: "currency",
      minimumFractionDigits: value > 99.9 && value % 1 === 0 ? 0 : 2,
      currency: "IDR",
    }).format(value);
  }
};

export default FormatNumberToIDR;
