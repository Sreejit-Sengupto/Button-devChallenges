import Button from "../Buttons/Button";
function EndIconButtons() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5">
      <div>
        {'<Button endIcon={"add"} />'}
        <Button text={"Default"} endIcon={"add"} />
      </div>

      <div className="py-5 lg:py-0">
        {'<Button endIcon={"download"} />'}
        <Button text={"Default"} endIcon={"download"} />
      </div>

      <div className="pb-5 lg:pb-0">
        {'<Button endIcon={"stared"} />'}
        <Button text={"Default"} endIcon={"stared"} />
      </div>

      <div className="pb-5 lg:pb-0">
        {'<Button endIcon={"favorite"} />'}
        <Button text={"Default"} endIcon={"favorite"} />
      </div>

      <div>
        {'<Button endIcon={"delete"} />'}
        <Button text={"Default"} endIcon={"delete"} />
      </div>
    </div>
  );
}

export default EndIconButtons;
