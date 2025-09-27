"use client"
import Logo from "@/app/assets/svgs/Logo";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema } from "./registerValidation";

const RegisterForm = () => {
  const form = useForm({resolver:zodResolver(registrationSchema)})
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }

  const password = form.watch('password')
  const passwordConfirm = form.watch('passwordConfirm')
  return (
    <div className="max-w-md  shadow-2xl border-2 p-6 rounded-2xl flex-grow">
       <div className="flex items-center space-x-4 mb-10 ">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Register</h1>
          <p className="font-extralight text-sm text-gray-600">
            Join us today and start your journey!
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-3">
          <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input {...field} value={field?.value || ""}/></FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input {...field} value={field?.value || ""}/></FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="password"
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input {...field} value={field?.value || ""}/></FormControl>
         
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="passwordConfirm"
          render={({field}) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl><Input {...field} value={field?.value || ""}/></FormControl>
                {passwordConfirm && password !== passwordConfirm ? (
                  <FormMessage> Password does not match </FormMessage>
                ) : (
                  <FormMessage />
                )}
           
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Register</Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
