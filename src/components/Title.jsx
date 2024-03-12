// Supports weights 200-900
import '@fontsource-variable/source-code-pro';

export default function Title() {
  return (
    <div className='bg-gradient-to-r from-[#212121] via-[#161616] to-black pt-16 pb-8 flex flex-col items-center text-white'>
      <h1
        className='text-6xl font-semibold text-transparent bg-clip-text 
           bg-gradient-to-t from-gray-500/70 to-white title'
      >
        Task Tracker
      </h1>
      <h1 className='text-3xl font-light text-white pt-16'>
        Build consistency | Achieve great heights
      </h1>
    </div>
  );
}
