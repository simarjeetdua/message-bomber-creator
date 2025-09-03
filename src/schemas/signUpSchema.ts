import { use } from 'react';
import {email, z} from 'zod';

const usernameValidation = z.string()
.min(4,"username must be atleast 4 characters")
.max(20,"username must be less than 20 characters")
.regex(/^[a-zA-Z0-9]+$/,"username must not contain special characters ");

const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6,"password must be atleast 6 characters").max(20,"password must be less than 20 characters ")
})