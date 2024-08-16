interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="ml-auto mr-auto sm: w-[375px] xl:w-[1440px]">
      {children}
    </div>
  );
};
