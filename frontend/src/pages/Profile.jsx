import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useUpdateProfileMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import FormContainer from "../layouts/FormContainer";
import { toast } from "react-toastify";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword)
      return toast.error("All of these input fields are required!");

    try {
      if (password !== confirmPassword)
        throw new Error("password are not equal!");

      const res = await updateProfile({
        _id: userInfo._id,
        name,
        email,
        password,
      }).unwrap();

      toast.success("Profile updated successfully");
      //if success then save res data to store
      dispatch(setCredentials(res));
    } catch (err) {
      // console.log(err.message);
      toast.error(err?.data?.message || err.message);
    }
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form className="mt-3" onSubmit={submitHandler}>
        <FormInput label="name" type="text" state={name} handler={setName} />
        <FormInput
          label="email address"
          type="email"
          state={email}
          handler={setEmail}
        />
        <FormInput
          label="password"
          type="password"
          placeholder="new password here"
          state={password}
          handler={setPassword}
        />
        <FormInput
          label="confirm password"
          type="password"
          placeholder="confirm your password"
          state={confirmPassword}
          handler={setConfirmPassword}
        />
        <FormButton loading={isLoading} text="Update"></FormButton>
      </Form>
    </FormContainer>
  );
};

export default Profile;
