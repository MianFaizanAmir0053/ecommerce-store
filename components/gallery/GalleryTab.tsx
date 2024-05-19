"use client";

import { cn } from "@/app/lib/utils";
import { Images as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { FC } from "react";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
            <Image
              src={image.url}
              alt=""
              fill
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
