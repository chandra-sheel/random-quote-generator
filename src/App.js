import { useEffect, useState } from "react";

const App = () => {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => getQuote(), []);

  return (
    <section className="section-center">
      <section class="bgcolor">
        <div className="text-center">
          <h3 className="font">{quote.content}</h3>
          <i className="font">
            <p style={{ textAlign: "right" }}>
              -&nbsp;{quote.author}
            </p>
          </i>
          <button className="btn btn-outline-primary" onClick={getQuote}>
            <strong>Get Quote</strong>
          </button>
        </div>
      </section>
    </section>
  );
};

export default App;