import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_6.png";

const ProfileSection = () => {
  return (
    <div className="flex gap-10  lg:flex-row  flex-col gap-10 items-center justify-center  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
    <Image src={profile} alt="Profile" width={900} height={900} />

    <div className="flex mt-10 flex-col gap-y-5 bg-pri_var_2 items-center  rounded-md  lg:w-[874px] w-full  lg:h-[898px] h-[120vh] left-[920px] z-10">
        <p className="md:text-[42px]  lg:text-[42px] text-[20]  font-[700]  lg:px-14 px-6    text-justify w-full  mt-10 text-pri_var_1">
           About  NIMN           </p>
        <p className="md:text-[24px] text-[20px] lg:px-14 px-6  text-white lg:leading-10 leading-7 pb-10  text-justify  ">
        The National Institute of Marketing of Nigeria (NIMN) is the body for professionals engaged in marketing and related fields as marketing practitioners, sales and marketing directors, customer relationship managers, media planners, channel developers, creative directors, value builders, trade marketing managers, commercial managers/directors, brand builders, entrepreneurs, enterprise builders, corporate and institutional governors, transformers, marketing and mass communication experts, general managers, and Chief Executive Officers.
The Institute was established by Act of the National Assembly no. 25 0f 2003 with a chartered status conferred on it, the responsibility to regulate and standardize marketing professional practice through the conduct of comprehensive professional examinations and certifications, training, retraining and consultancy services geared towards ensuring that members adopt a professional approach to marketing and other related areas of marketing activities.
Whilst new entrants into the profession are being developed through an intensive programme of formal learning in marketing structured courses in various academic institutions across the country on a full and part-time basis, qualified members are being retrained.


        </p>
    </div>
</div>
  );
};

export default ProfileSection;
