import Notice from "@/components/Notice";
import Image from "next/image";

export default function Home() {
  return (
    <div
      className={
        "max-w-7xl overflow-hidden rounded-xl p-4 lg:p-8 text-slate-700"
      }
    >
      <Notice />
    </div>
  );
}
