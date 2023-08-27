import Button from "../Buttons/Button";

function StartIconButtons() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5">
      <div>
        {'<Button startIcon={"add"} />'}
        <Button text={"Default"} startIcon={"add"} />
      </div>

      <div className="py-5 lg:py-0">
        {'<Button startIcon={"download"} />'}
        <Button text={"Default"} startIcon={"download"} />
      </div>

      <div className="pb-5 lg:pb-0">
        {'<Button startIcon={"stared"} />'}
        <Button text={"Default"} startIcon={"stared"} />
      </div>

      <div className="pb-5 lg:pb-0">
        {'<Button startIcon={"favorite"} />'}
        <Button text={"Default"} startIcon={"favorite"} />
      </div>

      <div>
        {'<Button startIcon={"delete"} />'}
        <Button text={"Default"} startIcon={"delete"} />
      </div>
    </div>
  );
}

export default StartIconButtons;
