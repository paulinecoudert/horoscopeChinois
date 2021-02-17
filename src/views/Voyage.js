const Voyage = () => (
  <div className="contain">
    <form action="/my-handling-form-page" method="post">
      <ul>
        <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" />
        </li>
        <li>
          <label htmlFor="mail">E-mail:</label>
          <input type="email" id="mail" name="user_mail" />
        </li>
        <li>
          <label htmlFor="msg">Message:</label>
          <textarea id="msg" name="user_message" />
        </li>
        <li className="button">
          <button type="submit">Send your message</button>
        </li>
      </ul>
    </form>

  </div>
);

export default Voyage;
