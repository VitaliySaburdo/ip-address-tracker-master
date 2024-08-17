import InputMask from 'react-input-mask';
import arrow from '../../../public/images/icon-arrow.svg';
import { useState } from 'react';

export const Header = () => {
 const [ipAddress, setIpAddress] = useState<string>('');
   const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const ipAddressInput = form.elements.namedItem('ip') as HTMLInputElement;
    const ipAddressValue = ipAddressInput?.value || '';
    console.log(ipAddressValue);
    setIpAddress(ipAddressValue);
    form.reset();
  };

  return (
    <header className="bg-[url('/images/pattern-bg-desktop.png')] flex flex-col items-center pt-[35px] pb-[125px]">
      <h2 className="text-white font-medium text-[25px] mb-[35px]">IP Address Tracker</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="ip" className="relative">
        <InputMask
        name='ip'
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
          mask="999.999.999.999"
          className="h-[60px] w-[550px] text-[20px] pl-[25px] pr-[55px] rounded-[15px] placeholder:font-gray-lite placeholder:text-[20px] cursor-pointer"
          placeholder="Search for any IP address or domain"
        />
        <button
          className="absolute top-0 right-0 h-[60px] w-[75px] bg-dark-gray text-white rounded-r-[15px] flex items-center justify-center"
        ><img src={arrow} alt="arrow" />
        </button>
      </label>
      </form>
    </header>
  );
};