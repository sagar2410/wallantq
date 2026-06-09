"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

interface Props {
  productName?: string;
  productNum?: string;
  productImage?: string;
  productSlug?: string;
  label?: string;
  ghost?: boolean;
  studioPhone?: string;
}

export default function EnquireButton({
  productName = "General Enquiry",
  productNum = "",
  productImage = "",
  productSlug = "",
  label = "Open private enquiry",
  ghost = false,
  studioPhone = "+91 63537 26302",
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={ghost ? "btn-ghost" : "btn-primary"}
      >
        <span>{label}</span>
        <span style={{ fontSize: 14 }}>→</span>
      </button>

      <EnquiryModal
        open={open}
        onClose={() => setOpen(false)}
        productName={productName}
        productNum={productNum}
        productImage={productImage}
        productSlug={productSlug}
        studioPhone={studioPhone}
      />
    </>
  );
}
