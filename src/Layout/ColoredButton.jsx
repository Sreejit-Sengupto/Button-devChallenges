import Button from "../Buttons/Button";

function ColoredButton() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5 lg:w-[90%]">
      <div>
        {'<Button color={"default"} />'}
        <Button text={"Default"} color={"default"} />
      </div>

      <div className="py-5 lg:py-0">
        {'<Button color={"primary"} />'}
        <Button text={"Default"} color={"primary"} />
      </div>

      <div className="pb-5 lg:pb-0">
        {'<Button color={"secondary"} />'}
        <Button text={"Default"} color={"secondary"} />
      </div>

      <div>
        {'<Button color={"danger"} />'}
        <Button text={"Default"} color={"danger"} />
      </div>
    </div>
  );
}

export default ColoredButton;
