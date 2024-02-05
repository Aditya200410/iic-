
import React, { Component, useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import "./form.css"
const Form = () => {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "AdarshT") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

return(
  <>

      <div className="m">
      <div className="i">
      <img src="astranaut 1.png" alt="" width="100%"/>
      </div>
      <div className="form">
        <div className="child1">
        <img src="vssut.png" alt=""/>
        <div id="text">
          <p>Idea Innovation Cell</p>
          <p>Induction</p>
        </div>
        <img src="logo.png" alt="" />
        </div>
        <div className="child2">
        <Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Full Name"
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', 
                    },
                  }}
                />
              </Box>
            </div>
            <div className="child2">
              <Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="E-mail"
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', 
                    },
                  }}
                />
              </Box>
        </div>
        <div className="child2x">
        <div className="inner"><Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Phn no."
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', // Override the text color on focus
                    },
                  }}
                /></Box></div>
        <div className="inner">
        <Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Registration No."
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', 
                    },
                  }}
                /></Box>
        </div>
        </div>
        <div className="child2">
        <Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Branch"
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', // Override the text color on focus
                    },
                  }}
                />
              </Box>
            </div>
            <div className="child2x">
        <div className="inner"><Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Domain Prefernce 1"
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', // Override the text color on focus
                    },
                  }}
                /></Box></div>
        <div className="inner">
        <Box
                component="form"
                sx={{
                  width: "100%",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Domain Preference 2"
                  variant="standard"
                  sx={{
                    width: '100%',
                    height: '100%',
                    '& label': {
                      color: 'white',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: '2px solid white',
                      bottom: 0,
                    },
                    '& input:focus': {
                      color: 'white', 
                    },
                  }}
                /></Box>
        </div>
        </div>
        <div className="child3">Register</div>
        <h4>Already Registered ? <a href="#">sign in</a></h4>
      </div>
      </div>
      </>
    )
  }
  
  

export default Form