"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "./ui/IconButton";
import Filter from "./Filter";

type Props = {
  sizes: Size[];
  colors: Color[];
};

const MobileFilters = ({ colors, sizes }: Props) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}>
        <div className="fixed inset-0 bg-black opacity-25" />
        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs overflow-y-auto bg-white shadow-xl pb-6 flex-col py-4">
          <div className="flex justify-end items-center px-4">
            <IconButton Icon={<X size={15} />} onClick={onClose} />
          </div>

          <div className="p-4">
            <Filter valueKey="sizeId" name="Sizes" data={sizes} />
            <Filter valueKey="colorId" name="Colors" data={colors} />
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default MobileFilters;
