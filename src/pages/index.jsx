import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-full">
        <div
          style={{
            backgroundImage: "url('/assets/background.jpg')",
            backgroundSize: "cover",
          }}
          className="w-full h-full"
        >
          <div className="grid grid-cols-2 gap-[32px] mt-[80px] px-[64px] py-[80px]">
            <div className="flex flex-col gap-[24px] justify-center">
              <h1 className="font-bold text-7xl">Hello World!</h1>
              <p className="max-w-[520px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button variant="primary">Register</Button>
            </div>
            <div className="">
              <img src="/assets/surf.jpg" alt="" className="rounded-[32px]" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
