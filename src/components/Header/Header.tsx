export const Header = () => {
  return (
    <header className="bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-7 pb-20 relative">
      <h2 className=" text-white font-medium text-2xl mb-5">IP Address Tracker</h2>
      <label htmlFor="text"></label>
      <input className="h-8 w-80 pl-6 pr-6 rounded-md" type="text" placeholder="Search for any IP address or domain"/>
    </header>
  );
};
