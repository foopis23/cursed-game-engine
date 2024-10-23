import Desktop from "@/components/desktop/desktop";
import Window from "@/components/desktop/window";
import CubesScene from "@/components/cubes/cube-scene";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Desktop>
        <Window>
          <CubesScene />
        </Window>
      </Desktop>
    </div>
  );
}
