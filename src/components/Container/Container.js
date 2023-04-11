const Container = ({ children }) => {
    return (
      <div className="container">
        {children}
        <style jsx>{`
          .container {
            max-width: 1200px;
            margin: 20px auto;
          }
        `}</style>
      </div>
    );
  };

export default Container;