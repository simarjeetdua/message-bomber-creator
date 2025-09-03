import {z} from 'zod';

export const verifyCodeSchema = z.object({
    verifyCode : z.string().length(6,"verify code must be 6 characters")
})