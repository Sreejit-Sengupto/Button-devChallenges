import Footer from "./Footer";
import Layout from "./Layout";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="mx-20 my-5">
        <h1 className="text-5xl font-noto text-center text-[#090F31]">
          <span className="text-[#F7542E]">B</span>uttons
        </h1>
        <div className="w-[40%] lg:w-[5%] h-[0.125rem] bg-slate-500 mx-auto mb-10"></div>
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
