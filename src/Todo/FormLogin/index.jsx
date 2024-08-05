import validator from 'validator';
import { Toaster, toast } from 'alert';

function FormLogin() {

    const validateEmail = (value) => {
        if (validator.isEmail(value)) {
            toast.success('Email hợp lệ');
        } else {
            toast.error('Email không hợp lệ');
        }
    };
    const validatePassword = (value) => {
        const minLength = /.{8,}/;
        const upperCase = /[A-Z]/;
        const number = /[0-9]/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (!minLength.test(value)) {
            toast.error('Mật khẩu phải có ít nhất 8 ký tự');
        } else if (!upperCase.test(value)) {
            toast.error('Mật khẩu phải có ít nhất một chữ cái viết hoa');
        } else if (!number.test(value)) {
            toast.error('Mật khẩu phải có ít nhất một số');
        } else if (!specialChar.test(value)) {
            toast.error('Mật khẩu phải có ít nhất một ký tự đặc biệt');
        } else {
            toast.success('Mật khẩu hợp lệ');
        }
    };

    return (
        <form action="">
            <h1>Form Login</h1>
            <div>
                <div>
                    <label htmlFor="Email">Email:</label>
                    <input
                        type="text"
                        onBlur={(e) => validateEmail(e.target.value)}
                        placeholder="Nhập email"
                    />
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" onBlur={(e) => validatePassword(e.target.value)} />
                    
                </div>
            </div>
            <Toaster />
        </form>
    );
}

export default FormLogin;
