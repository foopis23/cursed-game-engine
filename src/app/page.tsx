import Desktop from "@/components/desktop/desktop";
import Window from "@/components/desktop/window";
import Test from "@/components/test";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Desktop>
        <Window>
          <Test />
        </Window>
      </Desktop>
    </div>
  );
}
