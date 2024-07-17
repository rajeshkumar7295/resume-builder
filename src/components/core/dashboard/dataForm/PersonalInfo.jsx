// src/components/PersonalInfoForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updatePersonalInfo } from '../../../../slices/formDataSlice';
import Button from '../../../common/Button';


const PersonalInfo = ({ setStep }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(updatePersonalInfo(data));
    setStep(2);
  };

  return (
    <div className="bg-gray-100 p-8 rounded-md w-full  mx-auto">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1" htmlFor="firstName">First name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="firstName" {...register("firstName", { required: true })} placeholder="First Name" />
            {errors.firstName && <span className="text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="lastName">Last name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="lastName" {...register("lastName", { required: true })} placeholder="Last Name" />
            {errors.lastName && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1" htmlFor="mobile">Mobile</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="mobile" {...register("mobile", { required: true })} placeholder="Mobile" />
            {errors.mobile && <span className="text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" {...register("email", { required: true })} placeholder="Email" />
            {errors.email && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        <div>
          <label className="block mb-1" htmlFor="objective">Objective</label>
          <textarea className="w-full p-2 border border-gray-300 rounded" id="objective" {...register("objective")} placeholder="Objective"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1" htmlFor="state">State</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="state" {...register("state", { required: true })} placeholder="State" />
            {errors.state && <span className="text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="address">Address</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="address" {...register("address", { required: true })} placeholder="Address" />
            {errors.address && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-1" htmlFor="city">City</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="city" {...register("city", { required: true })} placeholder="City" />
            {errors.city && <span className="text-red-600">This field is required</span>}
          </div>
          <div>
            <label className="block mb-1" htmlFor="postalCode">Postal code</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="postalCode" {...register("postalCode", { required: true })} placeholder="Postal code" />
            {errors.postalCode && <span className="text-red-600">This field is required</span>}
          </div>
        </div>

        <div className='ml-8 mt-12 flex flex-row-reverse mr-20'>
          <Button title={"Save and Next"} border={"none"} color={"white"} bordWid={"0"} background={"blue-500"} onClick={handleSubmit(onSubmit)} type="submit" >
            Save and Next
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
