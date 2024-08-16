import arrow from '../../../public/images/icon-arrow.svg';

export const Header = () => {
  return (
    <header className="bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-[35px] pb-[125px]">
      <h2 className=" text-white font-medium text-[25px] mb-[35px]">IP Address Tracker</h2>
      <label htmlFor="text" className="relative">
      <input className="h-[60px] w-[550px] text-[20px] pl-[25px] pr-[55px] rounded-[15px] placeholder:font-gray-lite placeholder:text-[20px] cursor-pointer" type="text" placeholder="Search for any IP address or domain"/>
              <button
          className="absolute top-0 right-0 h-[60px] w-[75px] bg-dark-gray text-white rounded-r-[15px] flex items-center justify-center"
        ><img src={arrow} alt="arrow" /></button>
         </label>
    </header>
  );
};
