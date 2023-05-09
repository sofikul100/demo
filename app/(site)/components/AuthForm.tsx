"use client"


import Input from "@/app/components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import Button from "@/app/components/inputs/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs"


export default function AuthForm() {

   type Varient = "LOGIN" | "REGISTER";


   const [varient, setVarient] = useState<Varient>("LOGIN");
   const [isLoading, setIsloading] = useState(false);


   const toggleVarient = useCallback(() => {
      if (varient === "LOGIN") {
         setVarient("REGISTER")
      } else {
         setVarient("LOGIN")
      }
   }, [varient]);



   const {
      register,
      handleSubmit,
      formState: {
         errors
      }
   } = useForm<FieldValues>({
      defaultValues: {
         name: '',
         email: '',
         password: ''
      }
   })



   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsloading(true)

      if (varient === "REGISTER") {
         //axios call
      }

      if (varient === "LOGIN") {
         //axios call
      }
   }


   const socialAction = (action: string) => {
      setIsloading(true)

      //working later
   }





   return (
      <div className="
      mt-6
      sm:mx-auto
      sm:w-full
      sm:max-w-md
    ">

         <div className="
         bg-white
         py-6
         shadow
         sm:rounded-lg
         sm:px-0
      ">

            <form
               onSubmit={handleSubmit(onSubmit)}
            >
               {varient === "REGISTER" && (
                  /* start input  */
                  < Input
                     register={register}
                     errors={errors}
                     required
                     disabled={isLoading}
                     id="name"
                     label="Enter Name"
                     type="text"
                  />

               )}

               < Input
                  register={register}
                  errors={errors}
                  required
                  disabled={isLoading}
                  id="email"
                  label="Enter Email"
                  type="email"
               />

               < Input
                  register={register}
                  errors={errors}
                  required
                  disabled={isLoading}
                  id="password"
                  label="Enter Password"
                  type="password"
               />


               {/* end input */}

               <Button
                  disabled={isLoading}
                  type="submit"
                  fullWidth
               >
                  {varient === "LOGIN" ? 'Sign In' : "Register"}
               </Button>

            </form>



            {/* or contiinue with */}


            <div className="mt-6">
               <div className="relative">
                  <div
                     className="
                absolute 
                inset-0 
                flex 
                items-center
              "
                  >
                     <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                     <span className="bg-white px-2 text-gray-500 font-bold">
                        Or continue with
                     </span>
                  </div>
               </div>
            </div>
            {/* end or continue with */}

            {/* start auth social button */}

            <div className="ml-4 mr-4 mt-4 flex gap-2">
               <AuthSocialButton icon={BsGithub} onClick={() => { }} />
               <AuthSocialButton icon={BsGoogle} onClick={() => { }} />
            </div>
            {/*end auth social button  */}


            

           <div className="
            flex
            justify-center
            text-sm
            text-gray-500
            gap-2
            py-4
            px-2
           ">


            <div>{varient === "LOGIN" ? 'New To Messanger?':'Already Have An Account'}</div>
            <div
            onClick={toggleVarient}
            className="underline font-bold cursor-pointer"
            >
             {varient === "LOGIN"?'Create An Account':'Login'}
            </div>

           </div>













         </div>

      </div>
   )
}




