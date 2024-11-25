import FullHeightSlider from "@/components/slider";

const images = ["/z1.jpg", "/z2.jpg", "/z3.jpg", "/z4.jpg", "/z1.jpg"];
export default function TouristSite() {
  return (
    <div className="min-h-screen">
      <FullHeightSlider images={images} />
    </div>
  );
}
