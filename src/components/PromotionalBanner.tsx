export function PromotionalBanner({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  return title.length === 0 ? (
    <div className='h-[120px]' />
  ) : (
    <div className='flex flex-col items-center justify-end h-[165px] sm:h-[160px] w-full bg-red-900'>
      <div className='pb-2 px-12 z-[10000] text-xs text-center md:text-md'>
        {!!href ? (
          <a
            href={href}
            className='underline font-thin text-white'
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        ) : (
          <p className='text-white font-thin'>{title}</p>
        )}
      </div>
    </div>
  );
}
