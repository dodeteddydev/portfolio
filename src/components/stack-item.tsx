type StackItemProps = {
  stack: string;
};

export const StackItem = ({ stack }: StackItemProps) => {
  return (
    <div className="bg-black text-white py-1 px-5 text-lg font-bold rounded-lg">
      {stack}
    </div>
  );
};
