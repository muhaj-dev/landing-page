import Image from "next/image";
import React from "react";
import "./discount.css";
import { SmallDiscountCardBlackDataType } from "@/utils/types/types";


interface SmallDiscountCardBlackProps {
  data: SmallDiscountCardBlackDataType;
}

export const SmallDiscountCardBlack: React.FC<SmallDiscountCardBlackProps> = ({
  data,
}) => {
  return (
    <section className="SmallDiscountCardBlack_Container">
      <div className="SmallDiscountCardBlack_LeftContainer">
        <div className="SmallDiscountCardBlack_DiscountTitle">
          <p className="SmallDiscountCardBlack_DiscountTickText">
            {data.discountDetails.tickText}
          </p>
          {data.discountDetails.lightTexts.map((text, index) => (
            <p key={index} className="SmallDiscountCardBlack_DiscountLightText">
              {text}
            </p>
          ))}
        </div>
      </div>

      <div className="SmallDiscountCardBlack_RightContainer">
        <div className="BlackImageTop">
          <Image
            src={data.images.topImage.src}
            alt={data.images.topImage.alt}
            className={data.images.topImage.className}
            width={data.images.topImage.width}
            height={data.images.topImage.height}
          />
        </div>
        <div className="BlackImageBottom">
          <Image
            src={data.images.bottomImage.src}
            alt={data.images.bottomImage.alt}
            className={data.images.bottomImage.className}
            width={data.images.bottomImage.width}
            height={data.images.bottomImage.height}
          />
        </div>
      </div>
    </section>
  );
};