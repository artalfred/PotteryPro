import React, { useContext, useState } from "react";
import HeroContainerPage from "../Reusable/HeroContainerPage";
import Registration from "../assets/Registration/Registration.jpg";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../context/userContext";
import NotFound from "./NotFound";

function Register() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const registerUser = async (e) => {
    e.preventDefault();

    const { name, lastName, email, password } = data;
    try {
      const { data } = await axios.post("/register", {
        name,
        lastName,
        email,
        password,
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({ name: "", lastName: "", email: "", password: "" });
        toast.success("Register Successfully, Welcome!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeroImage>
      <HeroContainerPage>
        {!!user ? (
          <NotFound />
        ) : (
          <>
            <Form className="md:mx-[4rem] sm:mx-[1rem] mx-[1rem] form bg-white py-[2rem] rounded-lg 2xl:w-3/6 lg:3/6 md:4/6 sm:full w-full 2xl:px-[6rem] ld:px-[6rem] md:px-[4rem] sm:px-[1rem] px-[1rem]">
              <div>
                <Title className="text-3xl">Create an account</Title>
                <p className="text-center text-white mt-3">
                  Get started by creating a 100% free knowledge Base for your
                  passion
                </p>
              </div>

              <div className="container mx-auto">
                <form className="grid gap-2" onSubmit={registerUser}>
                  <div className="2xl:flex lg:flex md:flex sm:grid grid items-center gap-4 mt-5">
                    <input
                      type="text"
                      className="py-3 rounded-full px-6 mt-3 w-full"
                      placeholder="First Name"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      required
                    />
                    <input
                      type="text"
                      className="py-3 rounded-full px-6 mt-3 w-full"
                      placeholder="Last Name"
                      value={data.lastName}
                      onChange={(e) =>
                        setData({ ...data, lastName: e.target.value })
                      }
                      required
                    />
                  </div>

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
                      Sign Up
                    </SubmitButton>
                  </div>

                  <div className="grid gap-3">
                    <p className="text-center text-white mt-3">
                      Already have an account?{" "}
                      <Link
                        to={"/login"}
                        className="underline underline-offset-4"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
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

export default Register;
