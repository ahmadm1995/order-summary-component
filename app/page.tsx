import Image from "next/image";
import OrderSummary from "./components/order-summary";
import backgroundImg from '@/images/pattern-background-desktop.svg';

export default function Home() {
  return (
    <div 
      className="flex justify-center items-center h-screen bg-no-repeat bg-top bg-[length:100%_auto]"
      style={{ 
        backgroundImage: `url(${backgroundImg.src})`,
        backgroundColor: '#E0E8FF'
      }}
    >
      <OrderSummary />
    </div>
  );
}