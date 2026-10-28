import type { Metadata } from "next";
import { OrderSuccess } from "@/components/order-success";

export const metadata: Metadata = {
  title: "Kiitos tilauksesta",
  robots: { index: false, follow: false },
};

export default function KiitosPage() {
  return <OrderSuccess />;
}
