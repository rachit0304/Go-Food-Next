'use client'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GitLogin from '../components/GitLogin'


const login = () => {
    const router = useRouter();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleChange = (e)=>{
        if(e.target.name == 'email'){
            setEmail(e.target.value);
        }
        if(e.target.name == 'password'){
            setPassword(e.target.value);
        }
    }

    const handleSubmit =async (e)=>{
        e.preventDefault();
        let data = {email, password};
        let res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        console.log(response);
        if(response.success == "user"){
            alert("you have been logged in successfully");
            localStorage.setItem("loginToken" , data.email);
            router.push("/");

        }
        else if(response.success == "Admin"){
            alert("You are logged in as a admin");
            localStorage.setItem("adminToken" , data.email);
            router.push('/admin');
        }

    }
  return (
    <div>
    <section className="vh-100" >
    <div className="container py-2 h-50 justify-content-center">
        <div className="row d-flex justify-content-center align-items-center h-50">
        <div className="col col-xl-10">
            <div className="row">

                <div className="col-md-6 col-lg-7 d-flex">
                <div className="card-body p-lg-5 text-black">

                    <form>

                    <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                        <span className="h1 fw-bold mb-0">Go-Food</span>
                    </div>

                    <h5 className="fw-normal mb-1 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                    <div data-mdb-input-init className="form-outline mb-2">
                        <input name='email' value={email} onChange={handleChange} autoComplete='off' type="email" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="email">Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-2">
                        <input value={password} name='password' onChange={handleChange} type="password" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-success btn-lg" type='submit' onClick={handleSubmit}>Login</button>
                        <GitLogin/>

                    </div>

                    <a className="small text-muted" href="#!">Forgot password?</a>
                    <p className="mb-2 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <Link href="/signup"
                        style={{color: "#393f81", textDecoration: 'none'}}>Register here</Link></p>
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

export default login
