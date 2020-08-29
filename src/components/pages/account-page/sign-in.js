// import React from 'react';
// import {Field, reduxForm} from "redux-form";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faFacebookF, faGooglePlusG, faLinkedinIn, faWindows} from "@fortawesome/free-brands-svg-icons";
// import './sign-in.css'
// import {Input} from "../../common/form-control/form-control";
// import {required} from "../../../utils/validators/validators";
// import {Link} from "react-router-dom";
//
//
// const SignInForm = ({handleSubmit}) => {
//     return (
//         <form className="login_form" onSubmit={handleSubmit}>
//             <p>Log in</p>
//             <div className="user_info">
//                 <Field type={'text'}
//                        component={"input"}
//                        required="required"
//                        placeholder="username"
//                        name={"username"}
//                 />
//             </div>
//             <div className="user_info">
//                 <Field type={'password'}
//                        component={"input"}
//                        required="required"
//                        placeholder="password"
//                        name={"password"}
//                 />
//             </div>
//             <div className="btn__forgot">
//                 <a>Forgot your password?</a>
//                 <button className="log">Login</button>
//                 <br/>
//             </div>
//             <div className="social">
//                 <i id="f"> <FontAwesomeIcon icon={faFacebookF}/> </i>
//                 <i id="g"> <FontAwesomeIcon icon={faGooglePlusG}/> </i>
//                 <i id="l"> <FontAwesomeIcon icon={faLinkedinIn}/> </i>
//                 <i id="w"> <FontAwesomeIcon icon={faWindows}/> </i>
//             </div>
//             <div className="footer">
//                 <dd>
//                     <dl className="text1">
//                         Do not have an account?
//                     </dl>
//                     <dl>
//                         <span className="sign-up">
//                             <Link className="sign-up" to="./sign-up">
//                                 Sign up now
//                             </Link>
//                         </span>
//                     </dl>
//                 </dd>
//             </div>
//         </form>
//     )
// }
//
// const SignInReducerForm = reduxForm({form: 'sign-in'})(SignInForm)
//
// const SignIn = () => {
//     const onsubmit = (formData) => {
//         console.log(formData)
//     }
//     return (
//         <div>
//             < SignInReducerForm onSubmit={onsubmit}/>
//         </div>
//     )
// }
//
// export default SignIn;


import React from 'react';
import './sign-up.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlusG, faLinkedinIn, faWindows} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const SignInForm = ({handleSubmit}) => {
    return (
        <form className="container" onSubmit={handleSubmit}>
            <p>Log in</p>
            <div className="container1">
                <Field type={'text'}
                       component={"input"}
                       required="required"
                       name={"username"}
                />
                <span>Username</span>
            </div>
            <div className="container1">
                <Field type={'password'}
                       component={"input"}
                       required="required"
                       name={"password"}
                />
                <span>Password</span>
            </div>
            <div className="container1">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Forgot your password?</a>
                <button className="log">Login</button>
                <br/>
            </div>
            <div className="social">
                <i id="f"> <FontAwesomeIcon icon={faFacebookF}/> </i>
                <i id="g"> <FontAwesomeIcon icon={faGooglePlusG}/> </i>
                <i id="l"> <FontAwesomeIcon icon={faLinkedinIn}/> </i>
                <i id="w"> <FontAwesomeIcon icon={faWindows}/> </i>
            </div>
            <div className="footer">
                <dd>
                    <dl className="text1">
                        Do not have an account?
                    </dl>
                    <dl>
                        <span className="sign-up">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="sign-up" to="./sign-up">Sign up now</Link>
                        </span>
                    </dl>
                </dd>
            </div>
        </form>
    )
}

const SignInReducerForm = reduxForm({form: 'sign-in'})(SignInForm)

const SignIn = () => {
    const onsubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            < SignInReducerForm onSubmit={onsubmit} />
        </div>
    )
}

export default SignIn;