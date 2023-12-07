const Badge = ({ text }: { text: string }) => {
  return (
    <>
      <div
        className="inline font-semibold 
          rounded-full bg-[--color-secondary]
        text-slate-100 mr-5 px-6 py-3"
      >
        {text}
      </div>
    </>
  );
};

export default Badge;
