import { Btn } from "../../Buttons/Button/Button";

export const Newsleter = () => {
  return (
    <div>
      <h4>Subscribe to the newsletter</h4>
      <div>
        <div>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <Btn txtColor="var(--second-color)" bgColor="var(--logo-color)">
          Sign up
        </Btn>
      </div>
    </div>
  );
};
