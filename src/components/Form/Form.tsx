import './css/style.css'

export const Form = () => {
  return (
    <div className="container">
      <div className="content main">
        <div className="content-header">
          <h1 className="h1 title">
            Write me a <span className="span">message</span>
          </h1>
          <div className="text">
            <p className="p">
              Many desktop publishing packages and web page editors now use
              Lorem
            </p>
          </div>
        </div>
        <form className="form" action="/" method="post">
          <div className="form-group">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="mail"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              className="input"
              type="tel"
              name="tel"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <textarea
              className="textarea"
              name="text"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-full" type="submit">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
