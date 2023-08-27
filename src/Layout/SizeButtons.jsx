import Button from "../Buttons/Button";

function SizeButtons() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5 lg:w-[60%]">
      <div>
        {'<Button size={"sm"} />'}
        <Button text={"Default"} size={"sm"} color={"primary"} />
      </div>

      <div className="py-5 lg:py-0">
        {'<Button size={"md"} />'}
        <Button text={"Default"} size={"md"} color={"primary"} />
      </div>

      <div>
        {'<Button size={"lg"} />'}
        <Button text={"Default"} size={"lg"} color={"primary"} />
      </div>
    </div>
  );
}

export default SizeButtons;
