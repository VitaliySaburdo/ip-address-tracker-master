export const InfoBar = () => {
  return (
    <>
       <div className="w-[830px] px-8 py-10 bg-white rounded-xl mr-auto ml-auto mt-[-50px] relative z-10 ">
       <ul className="grid grid-cols-4">
        <li >
          <p className="text-xs font-normal">IP ADDRESS</p>
          <p className="text-xl font-bold">192.212.174.101</p>
        </li>
        <li className="pl-9 border-l gray-lite">
          <p className="text-xs font-normal">LOCATION</p>
          <p className="text-xl font-bold">Brooklyn, NY 10001</p>
        </li>
          <li className="pl-9 border-l gray-lite">
          <p>TIMEZONE</p>
          <p className="text-xl font-bold">UTC -05:00</p>
        </li>
          <li className="pl-9 border-l gray-lite">
          <p>ISP</p>
          <p className="text-xl font-bold">Space X Starlink</p>
        </li>
       </ul>
       </div>
    </>
  )
}
