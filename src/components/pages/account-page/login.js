// import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import './sign-in.css'
// import {Input} from "../../common/form-control/form-control";
// // import {required} from "../../../utils/validators/validators";
//
//
//
//
// const LoginForm = ({handleSubmit}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <div className={"login_form"}>
//                 <Field type="text"  name={"username"} component={Input} validate={required}/>
//             </div>
//             <div className={"login_form"}>
//                 <Field type="text" name={"password"} component={Input} validate={required}/>
//             </div>
//             <div className="login-btn">
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReducerForm = reduxForm ( {form: 'login'}) (LoginForm)
//
// const Login = () => {
//     const onsubmit = (formData) => {
//         console.log(formData)
//     }
//     return(
//         <div className="main_login_page">
//             < LoginReducerForm onSubmit={onsubmit}/>
//         </div>
//     )
// }
//
// export default Login;