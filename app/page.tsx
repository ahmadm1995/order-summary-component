import Image from "next/image";
import OrderSummary from "./components/order-summary";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <OrderSummary />
    </div>
  );
}
