import Button from "../Buttons/Button";
function DisabledSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-5 lg:w-[40%]">
      <div>
        {"<Button disableShadow />"}
        <Button text={"Default"} disableShadow />
      </div>

      <div className="pt-5 lg:pt-0">
        {"<Button disabled />"}
        <Button text={"Default"} disabled />
      </div>
    </div>
  );
}

export default DisabledSection;
