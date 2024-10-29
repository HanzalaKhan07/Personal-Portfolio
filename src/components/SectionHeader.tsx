const SectionHeader = (
    {
        title,
        eyebrow,
        description,
    }:{
        title:string;
        eyebrow:string;
        description:string;
    }
) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl font-serif text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center mt-4 text-white/60 md:text-lg max-w-md mx-auto lg:text-xl">
      {description}
      </p>
    </>
  );
};

export default SectionHeader;
