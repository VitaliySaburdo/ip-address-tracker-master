import { useState } from 'react';
import { toast } from 'react-toastify';
import arrow from '../../../public/images/icon-arrow.svg';

interface HeaderProps {
  getIpAddress: (ip: string) => void;
}

export const Header: React.FC<HeaderProps> = ({getIpAddress}) => {
 const [ipAddress, setIpAddress] = useState<string>('');

   const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const ipAddressInput = form.elements.namedItem('ip') as HTMLInputElement;
    const ipAddressValue = ipAddressInput?.value || '';
    
    if(ipAddress.trim() === ''){
      toast.warn('Please enter valid ip address');
    }

    setIpAddress(ipAddressValue);
    getIpAddress(ipAddress)
    setIpAddress('');
  };

  return (
    <header className="bg-[url('/images/pattern-bg-mobile.png')] xl:bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-[35px] pb-[125px]">
      <h1 className="text-white font-medium text-[25px] mb-[35px]">IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="ip" className="relative">
        <input
        id='ip'
        type="text"
        name='ip'
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
          className="h-[60px] w-[320px] text-[20px] pl-[15px] pr-[55px] placeholder:text-[13px] rounded-[15px] placeholder:font-gray-lite cursor-pointer xl:pl-[25px] xl:placeholder:text-[20px] xl:w-[550px]"
          placeholder="Search for any IP address or domain"
        />
      </label>
        <button
          className="absolute top-[-25px] right-0 h-[60px] w-[75px] bg-dark-gray text-white rounded-r-[15px] flex items-center justify-center"
        ><img src={arrow} alt="arrow" />
        </button>
      </form>
    </header>
  );
};