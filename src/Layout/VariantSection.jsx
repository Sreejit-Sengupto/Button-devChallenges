import Button from "../Buttons/Button"
function VariantSection() {
  return (
    <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5 lg:w-[60%]'>
    <div>
        {'<Button />'}
        <Button text={"Default"}/>
    </div>

    <div className='py-5 lg:py-0'>
        {'<Button variant={"outline"} />'}
        <Button text={"Default"} variant={"outline"}/>
    </div>

    <div>
        {'<Button variant={"text"} />'}
        <Button text={"Default"} variant={"text"}/>
    </div>
  </div>
  )
}

export default VariantSection
