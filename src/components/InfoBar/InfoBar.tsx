export const InfoBar = () => {
  return (
    <>
       <div className="w-[1110px] p-[30px] bg-white rounded-xl ml-auto mr-auto mt-[-65px] relative z-20">
       <ul className="grid grid-cols-4 gap-y-[20px]">
        <li>
          <p className="text-[10px] font-normal text-gray-lite">IP ADDRESS</p>
          <p className="text-xl font-bold">192.212.174.101</p>
        </li>
        <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">LOCATION</p>
          <p className="text-xl font-bold">Brooklyn, NY 10001</p>
        </li>
          <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">TIMEZONE</p>
          <p className="text-xl font-bold">UTC -05:00</p>
        </li>
          <li className="pl-9 pr-[65px] border-l gray-lite">
          <p className="text-[10px] font-normal text-gray-lite">ISP</p>
          <p className="text-xl font-bold">Space X Starlink</p>
        </li>
       </ul>
       </div>
    </>
  )
}
