import {z} from 'zod';

export const messageSchema = z.object({
    content : z.string()
    .min(1,"message can't be empty")
    .max(500,"message cant't be more than 500 characters")
})