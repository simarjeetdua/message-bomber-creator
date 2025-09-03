import {z} from 'zod';

export const acceptingCodeSchema = z.object({
  isAcceptmessage : z.boolean(),
})