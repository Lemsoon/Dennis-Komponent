import "./_Accordion.scss";

export const Accordion = () => {
  const extend = () => {};

  return (
    <div className="accordion-container">
      <div className="hr-p">
        <hr />
        <img src="src\assets\images\down-arrow.svg" alt="" className="arrow-btn" />
      </div>
      <div className="accordion-items">
        <article>1. dsakjdsa</article>
        <article>2. dnsadsa</article>
        <article>3. dsadsa</article>
        <article>4. edibsas</article>
      </div>
    </div>
  );
};
