"use client";

import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LiaAngleRightSolid } from "react-icons/lia";
import { IconType } from "react-icons/lib";
import { ViewSubscription } from "./ViewSubscription";
import Link from "next/link";
import PaymentButton from "@/component/paymentButton/SubButton";
import { nanoid } from "nanoid";
import useOrder from "@/hooks/useOrder";
import NotificationModal from "@/component/NotificationModal";

export interface RestSubPlansDataType {
  subImg: string;
  subType: string;
  subAmount: number;
  planCode: string;
  subItem: {
    tickIcon: IconType;
    subItemText: string;
  }[];
  subFeeText: string;
  ViewSubDetailsLink: string;
}

const FOOD_REG = 'PLN_w988l6ia7g7dfq6'
const FOOD_ENT = 'PLN_pz6i6zhbcwvfdk7'
const FOOD_GOL = 'PLN_f5nb851w9xpbtto' 

const RestSubPlansData: RestSubPlansDataType[] = [
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Starter",
    subAmount: 4900,
    planCode: FOOD_REG,
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "1 meal per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekly delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivered once a week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Ideal for occasional treats",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Regular",
    subAmount: 12600,
    planCode: FOOD_REG,
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "2 meals per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivered once a week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Ideal for weekend treats",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Enterprise",
    subAmount: 43900,
    planCode: FOOD_ENT,
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "5 meals per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate + extra",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Weekdays Delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivered 5 times a week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Perfect for workweek meals",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
  {
    subImg: "/images/Rectangle 194.png",
    subType: "Gold",
    subAmount: 56400,
    planCode: FOOD_GOL,
    subItem: [
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "7 meals per week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Standard plate + extra",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Daily Delivery",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Delivered 7 times a week",
      },
      {
        tickIcon: IoCheckmarkSharp,
        subItemText: "Perfect for everyday meals",
      },
    ],
    subFeeText: "Service Fee:",
    ViewSubDetailsLink: "View",
  },
];

export const RestSub = () => {
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedSubscription, setSelectedSubscription] =
    useState<RestSubPlansDataType | null>(null);
  const visibleData = showAll ? RestSubPlansData : RestSubPlansData.slice(0, 2);

  const {
    isSubmitting,
    isError,
    isSuccess,
    handleSubscriptionOrderSubmit,
    showModal,
    modalMessage,
    modalErrorType,
    openModal,
    closeModal,
  } = useOrder();

  const referenceId = nanoid(8);

  const onSuccess = (sub: any) => {
    const subscription = {
      plan: sub.subType,
      type: "food",
      isPaid: true,
      total: sub.subAmount,
    };

    console.log(subscription);
    handleSubscriptionOrderSubmit(referenceId, { subscription }, "recurring");
  };

  const onClose = () => {
    console.log("closed");
  };

  const handleSeeMoreClick = () => {
    setShowAll(!showAll);
  };

  const handleViewDetailsClick = (subscription: RestSubPlansDataType) => {
    setSelectedSubscription(subscription);
    setIsModalOpen(true);
  };

  return (
    <div className="RestSub_container">
      <div className="customSub">
        <p className="customSub_Title">Subscription Plan</p>
      </div>
      <div className="Cust_sub_cards">
        {visibleData.map((plan: RestSubPlansDataType, index) => (
          <div className="Cust_sub_card" key={index}>
            <div className="Cust_sub_ITA">
              <div className="Cust_sub_image">
                <img
                  src={plan.subImg}
                  alt="sub image"
                  className="Cust_sub_img"
                />
              </div>
              <div className="Cust_sub_TA">
                <p className="Cust_sub_type_text">{plan.subType}</p>
                <p className="Cust_sub_amount_text">{plan.subAmount}</p>
              </div>
            </div>
            <hr className="Cust_sub_line_divider" />
            <div className="Cust_sub_list_items">
              {plan.subItem.map((item, itemIndex) => (
                <div className="Cust_sub_list_item" key={itemIndex}>
                  {React.createElement(item.tickIcon, {
                    className: "Cust_sub_list_item_icon",
                  })}
                  <p className="Cust_sub_list_item_text">{item.subItemText}</p>
                </div>
              ))}
            </div>
            <hr className="Cust_sub_line_divider" />
            <div className="Cust_sub_SA">
              <p className="Cust_sub_SA_text">{plan.subFeeText}</p>
              <p className="Cust_sub_amount_text SA_amount">{plan.subAmount}</p>
            </div>
            <hr className="Cust_sub_line_divider" />
            <PaymentButton
              totalPrice={plan.subAmount}
              openModal={openModal}
              buttonText="Select Plan"
              planCode={plan.planCode}
              onSuccess={() => onSuccess(plan)}
              onClose={onClose}
              referenceId={referenceId}
              subscriptionType={plan.subType}
              className="sub_btn"
            />
          </div>
        ))}
      </div>
      <button className="SeeMore_Sub" onClick={handleSeeMoreClick}>
        <p className="SeeMore_SubText">{showAll ? "See Less" : "See More"}</p>
        <LiaAngleRightSolid className="SeeMore_SubIcon" />
      </button>

      {showModal && (
        <NotificationModal
          message={modalMessage}
          errorType={modalErrorType}
          onClose={closeModal}
        />
      )}
    </div>
  );
};
