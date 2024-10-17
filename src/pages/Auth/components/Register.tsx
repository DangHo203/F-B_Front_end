/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import OTPVerification from "../OTPVerfication";
import Loading from "./Loading";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
    apiRegister,
    sendEmail,
    verifyEmail,
} from "../services/regiser.service";
interface RegisterProps {
    // Add any props if needed
}

const Register: React.FC<RegisterProps> = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [register, setRegister] = useState({
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleRegister = async () => {
        setIsSending(true);
        if (register.password !== register.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password and Confirm Password do not match!",
            });
            setIsSending(false);
            return;
        }
        const rs = await sendEmail({ email: register.email });

        if (rs.status === 200) {
            setIsSending(false);
            setIsRegistered(true);
        } else if (rs.status === 409) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email is already exist!",
            });
            setIsSending(false);
        }
    };

    const handleVerifyOTP = async (otp: any) => {
        try {
            const formData = {
                email: register.email,
                otp: otp,
            };
            try {
                const rs = await verifyEmail(formData);
                if (rs?.status === 200) {
                    await apiRegister({
                        name: register.username,
                        email: register.email,
                        password: register.password,
                    });

                    Swal.fire({
                        icon: "success",
                        title: "Đăng ký thành công",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        window.location.href = "/auth";
                    });
                } else if (rs?.status === 409) {
                    toast.error("Email đã tồn tại");
                } else if (rs?.status === 500) {
                    toast.error("OTP đã hết hạn");
                }
            } catch (error) {
                console.error("API Error:", error);
            }
        } catch (error: any) {
            toast.error("OTP không chính xác", error);
        }
    };

    const handleResend = async () => {
        try {
            await sendEmail({ email: register.email });
        } catch (error) {
            console.log(error);
        }
    };
    return isRegistered ? (
        <div className="w-screen h-screen fixed inset-0  flex flex-col grow justify-center items-center px-20 py-40 text-black bg-white max-md:px-5 max-md:py-24 max-md:max-w-full max-sm:mr-6">
            <OTPVerification
                onVerify={handleVerifyOTP}
                onResend={handleResend}
            />
        </div>
    ) : (
        <>
            {isSending && <Loading />}
            <section className="flex flex-col ml-5 w-6/12 h-1/2 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-start p-5 w-full text-lg text-red-600 bg-orange-50 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-4xl font-bold">Register</h2>
                    <div>
                        <InputField
                            value={register.username}
                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    username: e.target.value,
                                })
                            }
                            label="Full name"
                            type="text"
                            required
                        />
                        <InputField
                            value={register.email}
                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    email: e.target.value,
                                })
                            }
                            label="Email address"
                            type="email"
                            required
                        />
                        <InputField
                            value={register.password}
                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    password: e.target.value,
                                })
                            }
                            label="Password"
                            type="password"
                            required
                        />
                        <InputField
                            value={register.confirmPassword}
                            onChange={(e) =>
                                setRegister({
                                    ...register,
                                    confirmPassword: e.target.value,
                                })
                            }
                            label="Confirm Password"
                            type="password"
                            required
                            onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                    handleRegister();
                                }
                            }}
                        />

                        <Button onClick={handleRegister}>Register</Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
