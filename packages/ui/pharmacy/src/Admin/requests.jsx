import "../web.css";

const Requests = ({ requests, select }) => {
  // if(loading){
  //     return (
  //         <section className="section">
  //             <h4>Loading...</h4>
  //         </section>
  //     )
  // }
  if (requests.length < 1) {
    return (
      <section className="section">
        <h4 style={{"color":"wheat"}}>No requests.</h4>
      </section>
    );
  }

  return (
    <div>
      <h1 style={{ color: "white" }}>Here are the pharmacists who want to join our platform</h1>
      <section className="section-center">
        {requests.map((request) => {
          // console.log(image)
          return (
            <article
              key={request.email}
              id={request.email}
              className="single-meal"
              style={{ "background-color": "darkred" }}
            >
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrChAD8NmCQpcVVa7Cz6XibteKZauXNk_H9yKs_w4i&s"
                }
                alt={"No"}
                className="img"
                onClick={() => select(request.email)}
              />
              <footer>
                <h5 style={{ color: "white" }}>{request.name} wants to apply</h5>
              </footer>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default Requests;

