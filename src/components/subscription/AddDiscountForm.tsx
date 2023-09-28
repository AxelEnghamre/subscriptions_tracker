"use client";

import Input from "../UI/Input";

const AddDisscountForm = () => {
  return (
    <form action="">
      <label htmlFor="discountPrice">
        <p>Rabbat pris</p>
        {/* <Input
          className="focus:outline-none bg-loginbar-foreground text-loginbar-surface font-inter"
          id="discountPrice"
          placeholder="59"
          name="discountPrice"
          type="number"
          value={subscriptionFormValue.discountPrice}
          onChange={handleChange}
        /> */}
      </label>
    </form>
  );
};

export default AddDisscountForm;
