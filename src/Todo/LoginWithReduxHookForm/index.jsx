import { useForm } from 'react-hook-form';

function LoginWithReduxHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-700 w-max m-auto p-5 grid gap-7'>
            <h2 className='text-white font-extrabold text-3xl'>Login</h2>
          <div className='grid gap-4'>
          <div className='flex flex-col'>
                <label htmlFor="Email" className='text-white text-start'>Email</label>
                <input type="text" className='w-96' placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="Password" className='text-white text-start'>Password</label>
                <input type="password" className='w-96' placeholder="Password" {...register("Password", { required: true, minLength: 8, pattern:{
                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                } })} />
            </div>
            <input className='text-white bg-red-600 w-max px-2 py-1 m-auto' type="submit" />
          </div>
        </form>)
}

export default LoginWithReduxHookForm