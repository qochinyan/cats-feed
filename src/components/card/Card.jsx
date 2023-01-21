import "./Card.scss";

function Card({ setCorms, corms, data }) {
  function handleSelectCard() {
    if (data.status != "disable") {
      let newCorms = [...corms];
      let index = corms.findIndex((el) => el.id === data.id);
      data.status == "default"
        ? (newCorms[index].status = "selected")
        : (newCorms[index].status = "default");
      setCorms(newCorms);
    }
  }
  return (
    <div className="card-block">
      <div onClick={handleSelectCard} className={`card ${data.status}`}>
        <div className="descriptions">
          <p className="text-top">Сказочное заморское яство</p>
          <h2 className="card-heading">Нямушка</h2>
          <h4 className="card-with">{data.with}</h4>
          <p className="recepe">
            <p>
              <b>{data.quantity}</b> Порций
              {data.gift > 1 ? <b>{data.gift} </b> : ""}
              {data.gift > 1 ? "мышей в подарок" : "мышь в подарок"}
            </p>
          </p>
        </div>

        <div className={`circle ${data.status}`}>
          <span>
            <p style={{ fontSize: "42px", margin: "0px" }}>{data.weight}</p>КГ
          </span>
        </div>
      </div>
      <p className="text-bottom" style={{ color: "white" }}>
        {data.status === "default" ? (
          <>
            Чего сидишь? Порадуй котэ,{" "}
            <a
              style={{
                color: "#22A7E9",
                borderBottom: "2px #22A7E9 dashed",
                cursor: "pointer",
              }}
              onClick={handleSelectCard}>
              купи.
            </a>
          </>
        ) : data.status === "selected" ? (
          data.description
        ) : (
          "Печалька, с курой закончился."
        )}
      </p>
    </div>
  );
}

export default Card;
