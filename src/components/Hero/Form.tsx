export const FormHero = () => {
  return (
    <form name="order">
      <h2>Leave your details in the form below</h2>

      <div>
        <label htmlFor="id-name">Name</label>

        <input name="name" id="id-name" type="text" />
        <svg width="18" height="18">
          <use href="images/icons.svg#name" />
        </svg>
      </div>

      <div>
        <label htmlFor="id-tel">Phone</label>
        <input name="tel" type="tel" id="id-tel" />
        <svg width="18" height="18">
          <use href="images/icons.svg#phone2" />
        </svg>
      </div>

      <div>
        <label htmlFor="id-email">Email</label>
        <input name="email" type="email" id="id-email" />
        <svg width="18" height="18">
          <use href="images/icons.svg#email" />
        </svg>
      </div>

      <label htmlFor="id-comment">Comment</label>
      <textarea
        name="comment"
        id="id-comment"
        rows="5"
        placeholder="Enter text"
      ></textarea>

      <label htmlFor="id-label-policy">
        <input
          type="checkbox"
          name="policy"
          id="id-label-policy"
          value="statute"
        />
        <svg width="16" height="15">
          <use href="images/icons.svg#checked" />
        </svg>
        I declare that I accept <a href="#">Statute</a> and
        <a href="#">Privacy Policy</a>
      </label>

      <button type="submit">Send</button>
    </form>
  );
};
