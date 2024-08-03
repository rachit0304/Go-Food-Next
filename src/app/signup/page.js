'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const signup = () => {
    let router = useRouter();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [name , setName] = useState("");

    const handleChange = (e)=>{ 
        if(e.target.name == 'email'){
            setEmail(e.target.value);
        }
        if(e.target.name == 'password'){
            setPassword(e.target.value);
        }
        if(e.target.name == 'name'){
            setName(e.target.value);
        }
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        let data = {name, email, password};
        let res = await fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        console.log(response);
        if(response.success == "Success"){
          let user = response.user;
          delete user.password;
          alert("You have created your account successfully")
          localStorage.setItem('user' , user);
          router.push("/login");
        }
    }
  return (
  <div>
 <section className="h-50 mb-4">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card shadow-lg" style={{ borderRadius: "15px", marginTop: '-20px' }}>
            <div className="card-body p-4">
              <h2 className="text-uppercase text-center mb-3">Create an account</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-outline mb-2">
                  <input value={name} onChange={handleChange} name='name' type="text" id="name" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="name">Your Name</label>
                </div>

                <div className="form-outline mb-2">
                  <input value={email} onChange={handleChange} name='email' type="email" id="email" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="email">Your Email</label>
                </div>

                <div className="form-outline mb-2">
                  <input value={password} onChange={handleChange} name='password' type="password" id="password" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="password">Password</label>
                </div>

                <div className="form-outline mb-1">
                  <input type="password" id="Cpassword" className="form-control form-control-lg" />
                  <label className="form-label" htmlFor="Cpassword">Repeat your password</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-4 mb-0">Have already an account? <Link href="/login" className="fw-bold text-body"><u>Login here</u></Link></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  </div>
  )
}

export default signup
