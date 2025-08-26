import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import Badge from "../ui/badge";

export default function ItemCard() {
  return (
    <div className="flex w-full h-[80px] gap-2">
      <Image
        src="/creativemode-mobile.webp"
        alt="CreativeMode"
        width={80}
        height={80}
        className="w-20 h-20"
      />
      <div className="flex py-2 w-full flex-col">
        <div className="flex items-baseline">
          <div className="text-md font-bold mr-2">CreativeMode</div>
          <div className="flex gap-2">
            <Badge variant="outline" size="sm">
              v1.0.0
            </Badge>
            <Badge variant="outline" size="sm">
              MC 1.21.5
            </Badge>
            <Badge variant="outline" size="sm">
              Java
            </Badge>
          </div>
        </div>

        <div className="flex items-center mt-2">
          <div className="flex items-center gap-2 mr-4">
            <BsDownload className="w-4 h-4" />
            <span className="text-sm">300</span>
            <span className="text-sm">downloads</span>
          </div>
          <div className="flex items-center gap-2 mr-4"></div>
          <div className="flex items-center gap-2 flex-1">
            <Badge variant="success" size="sm">
              adventure
            </Badge>
            <Badge variant="warning" size="sm">
              vehicles
            </Badge>
            <Badge variant="error" size="sm">
              tactics
            </Badge>
            <Badge variant="info" size="sm">
              rescue
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
