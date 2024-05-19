"use client";

import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";

type Props = {};

const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <PreviewModal />
    </>
  );
};

export default ModalProvider;
