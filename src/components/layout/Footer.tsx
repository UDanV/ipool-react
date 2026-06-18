function Footer() {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-48 2xl:mt-64">
      <div className="flex flex-col gap-2 w-full max-w-[90dvw] m-auto sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-[56px] sm:text-[66px] lg:text-[80px] xl:text-[120px] text-[#2e2e2e] font-bold leading-none sm:-translate-x-2">
          IPOOL
        </h2>
        <a
          href="mailto:info@ipool.ru"
          className="sm:block hidden text-base lg:text-2xl xl:text-3xl uppercase"
        >
          info@ipool.ru
        </a>
        <div className="flex flex-col items-start text-base lg:text-2xl xl:text-3xl sm:items-end sm:translate-x-2">
          <a href="tel:78632838281">+7 863 283-82-81</a>
          <a href="tel:79185538734">+7 918 553-87-34</a>
          <a href="mailto:info@ipool.ru" className="block sm:hidden uppercase">
            info@ipool.ru
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
