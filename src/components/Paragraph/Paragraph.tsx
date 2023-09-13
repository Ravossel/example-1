import './css/style.css'

export const Paragraph = () => {
  return (
    <div className="container">
      <div className="content">
        <h2 className="subtitle h2">My name is</h2>
        <h1 className="title h1">
          Dmitry Valak and I'm <span className='span'>Web Development</span>
        </h1>
        <div className="text">
          <p className='p'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like
          </p>
        </div>
        
        <a className="btn" href="#">
          Contact me
        </a>
      </div>
    </div>
  );
};
