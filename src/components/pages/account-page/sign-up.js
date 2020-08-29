import React from 'react';
import './sign-up.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faGooglePlusG, faLinkedinIn, faWindows} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import {Field, reduxForm} from "redux-form";


const SIgnUpForm = ({handleSubmit}) => {

        return (
            <form className="container" onSubmit={handleSubmit}>
                <p className="pp">Sign Up</p>
                <div className="container1">
                    <Field type="text"
                           required="required"
                           name={"username"}
                           component={"input"}
                    />
                    <span>Username</span>
                </div>
                <div className="container1">
                    <Field type="text"
                           required="required"
                           component={"input"}
                           name={"email"}
                    />
                    <span>E-mail</span>
                </div>
                <div className="container1">
                    <Field type="password" required="required"  name={"password"}  component={"input"} />
                    <span>Password</span>
                    <button className="log">Sign Up</button>
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
                            Already have an account?
                        </dl>
                        <dl>
                        <span className="sign-up">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link className="sign-up" to="./sign-in">Login now</Link>
                        </span>
                        </dl>
                    </dd>
                </div>
            </form>
        )
}

const SignUnReducerForm = reduxForm({form: 'sign-up'})(SIgnUpForm)

const SignUp = () => {
    const onsubmit = (formData) => {
        console.log(formData)
    }
    return (
        <SignUnReducerForm onSubmit={onsubmit}/>
    )
}

export default SignUp;
