import React, { useState } from "react";
import "./CartDropdown.css";
import { FaStar } from "react-icons/fa";
import { Checkbox } from "@/component/Checkbox/Checkbox"; // Assuming Checkbox is your custom reusable checkbox component
import { Button } from "@/component/shared/Button";
import { BackButton2 } from "@/component/ui/BackButton/BackButton";

interface Courier {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
}

interface SelectCourierProps {
  onClose: () => void; // Function to close the modal
  onBack: () => void;
}

const couriers: Courier[] = [
  {
    id: 1,
    name: "Express Delivery",
    image: "/images/image 150.png",
    rating: 4.0,
    price: 40000,
  },
  {
    id: 2,
    name: "Standard Delivery",
    image: "/images/image 150.png",
    rating: 3.8,
    price: 30000,
  },
  {
    id: 3,
    name: "Economy Delivery",
    image: "/images/image 150.png",
    rating: 4.2,
    price: 20000,
  },
  {
    id: 4,
    name: "Premium Delivery",
    image: "/images/image 150.png",
    rating: 4.5,
    price: 50000,
  },
];

export const SelectCourier: React.FC<SelectCourierProps> = ({
  onClose,
  onBack,
}) => {
  const [selectedCourier, setSelectedCourier] = useState<number | null>(null); // Track the selected courier ID
  // const [isCourierStep, setIsCourierStep] = useState(false); // Define isCourierStep state

  const handleBack = () => {
    onClose(); // Close the modal directly on back
  };

  const handlePay = () => {
    if (!selectedCourier) {
      alert("Please select a courier before continuing."); // Ensure a courier is selected
      return;
    }
    console.log("Payment processed.");
    onClose();
  };

  const handleCourierSelection = (courierId: number) => {
    setSelectedCourier(
      (prevSelected) => (prevSelected === courierId ? null : courierId) // Toggle selection
    );
  };

  // Get the selected courier price safely with a fallback
  const getSelectedCourierPrice = (): number => {
    return (
      couriers.find((courier) => courier.id === selectedCourier)?.price ?? 0
    );
  };

  return (
    <div className="CartDropdown_selectCourierModal">
      <div className="CartDropdown_courierContent">
        <div className="CartDropdown_BBTitle">
          <BackButton2 className="CartDropdown_Back_Btn" onClick={onBack} />
          <h2 className="CartDropdown_courierModal_Title">Select Courier</h2>
        </div>
        <div className="CartDropdown_courierModal_LeftContent">
          <div className="CartDropdown_courierModal_Cards">
            {couriers.map((courier) => (
              <div className="CartDropdown_courierModal_Card" key={courier.id}>
                <div className="CartDropdown_courierModal_Card_Image_and_D">
                  <img
                    src={courier.image}
                    alt={courier.name}
                    className="CartDropdown_courierModal_CardImage"
                  />
                  <div className="CartDropdown_courierModal_CardContent">
                    <p className="CartDropdown_courierModal_CardContent_Text">
                      {courier.name}
                    </p>
                    <div className="CartDropdown_courierModal_CardContentRating">
                      <FaStar className="CartDropdown_courierModal_CardContent_ratingStar" />
                      <p className="CartDropdown_courierModal_CardContent_ratingNum">
                        {courier.rating}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="CartDropdown_CourierModal_card_Prize">
                  ${courier.price.toLocaleString("en-US")}
                </p>
                <Checkbox
                  checked={selectedCourier === courier.id}
                  onChange={() => handleCourierSelection(courier.id)}
                  labelClassName="CartDropdown_CourierCheckBox_Label"
                />
              </div>
            ))}
          </div>
          <Button
            text="Continue"
            onClick={handlePay}
            className="CartDropdown_payButton"
          />
        </div>
      </div>
    </div>
  );
};
