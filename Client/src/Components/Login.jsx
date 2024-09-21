import React, { useContext, useState } from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import Registration from "../assets/Registration/Registration.jpg";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "../../context/userContext";
import NotFound from "./NotFound";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/courses");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HeroImage>
      <HeroContainerPage>
        {!!user ? (
          <NotFound />
        ) : (
          <>
            <Form className="md:mx-[4rem] sm:mx-[1rem] mx-[1rem] form bg-white py-[2rem] rounded-lg 2xl:w-3/6 lg:3/6 md:4/6 sm:full w-full 2xl:px-[12rem] ld:px-[12rem] md:px-[4rem] sm:px-[1rem] px-[1rem]">
              <div>
                <Title className="text-3xl">Log In</Title>
                <p className="text-center text-white mt-3">
                  Get started by creating a 100% free knowledge Base for your
                  passion
                </p>
              </div>

              <div className="container mx-auto mt-4">
                <form onSubmit={loginUser} className="grid gap-2">
                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    required
                  />

                  <input
                    type="text"
                    className="py-3 rounded-full px-6 mt-3 w-full"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                    required
                  />

                  <div className="flex justify-center mt-3">
                    <SubmitButton type="submit" className="btnDark">
                      Log In
                    </SubmitButton>
                  </div>

                  <p className="text-center text-white mt-3">
                    Don't have an account yet?{" "}
                    <Link
                      to={"/register"}
                      className="underline underline-offset-4"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
                {/* <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                /> */}
              </div>
            </Form>
          </>
        )}
      </HeroContainerPage>
    </HeroImage>
  );
}

const HeroImage = styled.div`
  background-image: url(${Registration});
  background-position: no-repeat;
  background-position: center;
`;

const Form = styled.div`
  box-shadow: rgb(2, 12, 27) 0px 10px 30px -15px;
  background-color: transparent;
  backdrop-filter: blur(6px);
`;

const Title = styled.div`
  color: #fff;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 0.6rem 1rem 0.6rem 1rem;
  background-color: #543115;
  color: #fff;
  width: 8rem;
  border-radius: 28px;
`;

const GoogleButtonImage = styled.div`
  height: 2rem;
`;

export default Login;
