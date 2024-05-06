
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { signup } from '@/services/UserServices';
import { useRouter } from 'next/navigation'
const SignUp = () => {

  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    service:"advance",
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const emailRegex = /^[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9]+\.)+[a-z]{2,7}$/;
  const nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).{8,}$/;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      } else if (key === 'email' && !emailRegex.test(formData[key])) {
        newErrors[key] = 'Invalid email address';
      } else if (key === 'password' && !passwordRegex.test(formData[key])) {
        newErrors[key] = 'Use 8 or more characters with a mix of letters, numbers & symbols';
      } else if ((key === 'firstName' || key === 'lastName') && !nameRegex.test(formData[key])) {
        newErrors[key] = `Invalid ${key === 'firstName' ? 'first' : 'last'} name`;
      } else if (key === 'confirmPassword' && formData.password !== formData.confirmPassword) {
        newErrors[key] = 'Passwords do not match';
      }
    });

    setErrors(newErrors);

    const  obj = {
      
      firstName: formData.firstName,
      lastName:formData.lastName ,
      email: formData.email,
      password: formData.password,
      service:formData.service
      

  }

    
    if (Object.keys(newErrors).length === 0) {
      try {
     
        const response = await signup(obj);
        console.log(response);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);

         
           router.push('/signin')
         

      } catch (error) {
        console.error('Error:', error);

      }
    }
  };

  return (
    <div className="w-full h-[705px] flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="flex border p-10 rounded-[10px] border-solid border-[#7777] ">
          <form onSubmit={handleSubmit} action="#" method="POST" className="flex w-[290px] xl:w-[425px] flex-col justify-center gap-[30px]">
            <Image className=" w-[80px] h-[80px] " src="/google2.png" width={80} height={80} />
            <label className="text-2xl">Create your Google Account</label>
            <div className="flex justify-between ">
              <TextField
                id="firstName"
                className="w-[47%] "
                variant="outlined"
                label="First Name *"
                value={formData.firstName}
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
              <TextField
                id="lastName"
                className="w-[47%]"
                variant="outlined"
                label="Last Name *"
                value={formData.lastName}
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                id="email"
                className="username"
                variant="outlined"
                label="Username *"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <p className="text-sm text-slate-500">You can use letters, numbers, and full stops</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <TextField
                  id="password"
                  className="w-[47%]"
                  type={showPassword ? 'text' : 'password'}
                  label="Password *"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
                <TextField
                  id="confirmPassword"
                  className="w-[47%]"
                  type={showPassword ? 'text' : 'password'}
                  label="Confirm Password *"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </div>
              <p className="text-sm text-slate-500">Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" onChange={() => setShowPassword(!showPassword)} />
              <label>Show password</label>
            </div>
            <div className="w-full flex justify-between items-center">
              <Link href="/signin" className="text-blue-600">
                Sign in instead
              </Link>
              <Button variant="contained" type="submit" >
                Next
              </Button>
            </div>
          </form>
          <Image src="/signup.png" alt="signupimg" width={216} height={292} className="w-[256px] h-[350px] ml-[60px] mt-[50px] hidden xl:block" />
          <div className="mt-[400px] ml-[-240px]   hidden xl:block">
            <p className="text-slate-500">One account. All of Google</p>
            <p className="ml-[50px] text-slate-500">Working for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;