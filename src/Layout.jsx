import ColoredButton from './Layout/ColoredButton'
import DisabledSection from './Layout/DisabledSection'
import EndIconButtons from './Layout/EndIconButtons'
import SizeButtons from './Layout/SizeButtons'
import StartIconButtons from './Layout/StartIconButtons'
import VariantSection from './Layout/VariantSection'

function Layout() {
  return (
    <div className='font-poppins'>
      <h1 className='text-[#4F4F4F] text-2xl'>Button Variants</h1>
      <VariantSection />

      <div className='w-[80%] h-[0.125rem] bg-slate-500 mx-auto my-10'></div>

      <h1 className='text-[#4F4F4F] text-2xl'>Disabled Buttons</h1>
      <DisabledSection />

      <div className='w-[80%] h-[0.125rem] bg-slate-500 mx-auto my-10'></div>

      <h1 className='text-[#4F4F4F] text-2xl'>Button with Icons</h1>
      <StartIconButtons />
      <EndIconButtons />

      <div className='w-[80%] h-[0.125rem] bg-slate-500 mx-auto my-10'></div>

      <h1 className='text-[#4F4F4F] text-2xl'>Button Size</h1>
      <SizeButtons />

      <div className='w-[80%] h-[0.125rem] bg-slate-500 mx-auto my-10'></div>
      
      <h1 className='text-[#4F4F4F] text-2xl'>Colored Buttons</h1>
      <ColoredButton />
    </div>
  )
}

export default Layout
