import { z } from 'zod'

export const registerSchema = z
  .object({
    first_name: z
      .string({ required_error: 'First name is required' })
      .trim()
      .min(1, 'First name is required'),

    last_name: z.string().optional(),

    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .min(1, 'Email is required')
      .email('Invalid email address'),

    password: z
      .string({ required_error: 'Password is required' })
      .trim()
      .min(8, 'Password must be at least 8 characters long'),

    confirm_password: z
      .string({ required_error: 'Confirm password is required' })
      .trim(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirm_password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirm_password'],
      })
    }
  })
