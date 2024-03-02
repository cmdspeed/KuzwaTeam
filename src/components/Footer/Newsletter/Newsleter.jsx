import { Btn } from "../../Buttons/Button/Button";
import icons from "../../../assets/icon/icon.svg";

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
          <svg width="24px" height="24px">
            <use href={`${icons}#send`} />
          </svg>
        </Btn>
      </div>
    </div>
  );
};
