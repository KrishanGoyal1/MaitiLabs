
export default function Home() {
  return (
    <main className="text-center py-20 bg-white mx-14">
      <h1 className="text-8xl font-bold mb-6 text-green-900 mt-28 text-center">The Voice Of Planet Earth in Every Language!</h1>
      <p className="text-4xl font-thin mb-8 text-green-900 m-20">Global youth-led Non-Profit Organization</p>
      <div className="text-lg">
        <button className="bg-green-900 text-white px-6 py-3 rounded-full mr-8">
          <div className="mx-12 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 cursor-pointer hover:text-[#496c62]">Join Us</div>
        </button>
        <button className="bg-green-900 text-white px-6 py-3 rounded-full">
        <div className="mx-6 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 cursor-pointer hover:text-[#496c62]">Awareness Portal</div>
        </button>
      </div>
      
      <div className={'mt-80 mx-14 text-center px-4 font-[Belleza]'}>
        <p className="text-7xl font-medium leading-relaxed text-[#212529]">
          We are a Non-Profit Youth-Led Org fostering 
          <span className="bg-green-900 text-white px-2 mx-2 inline-block">Climate Action</span> 
          by making information accessible in every language possible. 🌱
        </p>
      </div>
    </main>
  );
}
