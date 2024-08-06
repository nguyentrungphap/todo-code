import { useState } from 'react';
import validator from 'validator';

function FormLogin() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({
        email: null,
        password: null
    });
    console.log(email)
    const handleChangeEmail = (e) =>{
        setPassword(e.target.value)
         setErrors(prevErrors =>({...prevErrors , email:null}))
    }
    const handleChangePassword = (e) =>{
         setEmail(e.target.value)
         setErrors(prevErrors =>({...prevErrors , password:null}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validator.isEmail(email)) { 
            setErrors(prevErrors => ({ ...prevErrors, email: null }));
        } 
        else {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Email không hợp lệ' }));
        }

        const minLength = /.{8,}/;
        const upperCase = /[A-Z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!minLength.test(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Mật khẩu phải có ít nhất 8 ký tự' }));
        } else if (!upperCase.test(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Mật khẩu phải có ít nhất một chữ cái viết hoa' }));
        } else if (!number.test(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Mật khẩu phải có ít nhất một số' }));
        } else if (!specialChar.test(password)) {
            setErrors(prevErrors => ({ ...prevErrors, password: 'Mật khẩu phải có ít nhất một ký tự đặc biệt' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, password: null }));
        }
        console.log(errors)

    };

    return (
        <form onSubmit={handleSubmit} className='bg-gray-600 w-max p-12 m-auto grid gap-10'>
            <h1 className='text-white font-bold text-6xl'>Form Login</h1>
            <div className='grid gap-3'>
                <div className='flex flex-col items-start grid gap-2'>
                    <label htmlFor="Email" className='text-white text-start'>Email:</label>
                    <input
                        type="text"
                        onChange={handleChangeEmail}
                        placeholder="Nhập email"
                        className='w-full'
                    />
                    <p className={errors.email === null ? 'valid' : 'invalid'}>
                        {errors.email}
                    </p>
                </div>
                <div className='flex flex-col items-start grid gap-2'>
                    <label htmlFor="Password" className='text-white text-start'>Password</label>
                    <input
                        type="password"
                        onChange={handleChangePassword}
                        placeholder="Nhập mật khẩu"
                        className='w-full'
                    />
                    <p className={errors.password === null ? 'valid' : 'invalid'}>
                        {errors.password}
                    </p>
                </div>
            </div>
            <button type="submit" className='bg-red-600 text-white w-max px-6 py-2 m-auto'>Submit</button>
        </form>
    );
}

export default FormLogin;
