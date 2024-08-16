export const Header = () => {
  return (
    <header className="bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-7 pb-20 relative">
      <h2 className=" text-white text-bold text-xl mb-5">IP Address Tracker</h2>
      <label htmlFor="text"></label>
      <input className="h-8 w-80 pl-6 pr-6 rounded-md" type="text" placeholder="Search for any IP address or domain"/>
      <div className="w-96 h-40 bg-slate-500 absolute left-1/2 transform -translate-x-1/2 top-[130px]"></div>
    </header>
  );
};
