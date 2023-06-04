import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useGetIdPackQuery, useGetPackageQuery } from "../../feature/package/packageApi";

function Payment() {
  const { packId } = useParams();
  const { data: pack, isLoading, isError } = useGetIdPackQuery(packId);
  const [person, setPerson] = useState(1);
  const [totalAmount, setTotalAmount] = useState(parseInt(undefined));
  const [isGroup, setIsGroup] = useState(false);

  useEffect(() => {
    if (pack) {
      let amount = parseInt(pack.price) * parseInt(person);
      setTotalAmount(amount);
    }
    if(parseInt(person)>1){
      setIsGroup(true)
    }
    if(parseInt(person)<1){
      setIsGroup(false)
    }
  }, [pack, person]);


  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  } else if (!isLoading && isError) {
    content = <div>There was an error!!!</div>;
  } else if (!isLoading && !isError && pack?.id) {
    // console.log(pack)
  }
  
  console.log(typeof person, typeof totalAmount)


const status={
  group:isGroup,
  person
}

localStorage.setItem("status",JSON.stringify(status))


  const handlePayment = () => {
    const data = {
      email: "alice@gmail.com",
      price: 2000,
      packageName: "KUAKATA",
    };

    fetch("http://localhost:3000/payment", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.url) {
          window.location.replace(data.url);
          console.log(data.url);
        }
      });
  };

  return (
    <div>
      <input type="number" placeholder="Person" value={person} onChange={(e) => setPerson(e.target.value)} /> <br />
      <input type="number" placeholder="total amount" value={totalAmount} /> <br />
      <button className="btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
}

export default Payment;
