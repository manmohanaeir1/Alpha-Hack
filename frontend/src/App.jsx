import { useForm } from "react-hook-form";
import axios from "axios";


const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //using axios to post data to the server
    axios.post("http://localhost:8000/api/create/", data).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label> Name</label>
          <input type='text' name='name' id='name' {...register("name")} />
          <label>Email</label>
          <input type='text' name='email' {...register("email")} />
        </div>
        <div className='form-control'>
          <label>password</label>
          <input type='password' name='password' {...register("password")} />
        </div>
        
        <div className='form-control'>
          <label></label>
          <button type='submit'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default App;
