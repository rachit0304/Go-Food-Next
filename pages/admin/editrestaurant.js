import React from 'react'

const editrestaurant = () => {
    const updateRest=async ()=>{
        let data = {id,name,description,ratings,price,image,location,city,state,discountOffer,latitude,longitude};
        let res = await fetch('http://localhost:3000/api/editrestaurant', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        console.log(response);

        if(response.success == "Success"){
          alert("Your Restaurant is updated Successfully");
          router.push('/admin');

        }
    }
  return (
    <div>
      <h1>edit and update your restaurants</h1>
      <button onClick={updateRest}>update</button>
    </div>
  )
}

export default editrestaurant
