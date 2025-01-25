import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  region: z.string(),
  phone: z.string().regex(/\d{7,}/, {
    message: 'Please enter a valid phone number',
  }),
  password: z.string().min(8),
  confirmPassword: z
    .string()
    .min(8)
    .refine((value) => value === registerSchema.shape.password._def.value, {
      message: 'Passwords do not match',
    }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;

export const clientSupportSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  region: z.string(),
  phone: z.string().regex(/\d{7,}/, {
    message: 'Please enter a valid phone number',
  }),
  message: z.string().min(1, 'Please enter a message'),
});

export type ClientSupportSchemaType = z.infer<typeof clientSupportSchema>;

export const profileInfoSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  region: z.string(),
  phone: z.string().regex(/\d{7,}/, {
    message: 'Please enter a valid phone number',
  }),
  oldPassword: z.string().min(8),
  newPassword: z.string().min(8),
  confirmNewPassword: z
    .string()
    .min(8)
    .refine((value) => value === registerSchema.shape.password._def.value, {
      message: 'Passwords do not match',
    }),
});

export type ProfileInfoSchemaType = z.infer<typeof profileInfoSchema>;

export const feedbackSchema = z.object({
  id: z.number(),
  rating: z.number().min(1, 'Please select a rating').max(5),
  comment: z.string().min(1, 'Please enter a comment'),
});

export type FeedbackSchemaType = z.infer<typeof feedbackSchema>;

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const photoFeedbackSchema = z.object({
  // id: z.number(),
  file: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, {
      message: 'Необходимо загрузить файл',
    })
    .refine(
      (files) => {
        const file = files[0];
        return file.type.startsWith('image/') && file.size <= MAX_FILE_SIZE;
      },
      {
        message: 'Только фотографии размером до 5 МБ.',
      },
    ),
});

export type photoFeedbackSchemaType = z.infer<typeof photoFeedbackSchema>;

export const ctaSchema = z.object({
  email: z.string().email(),
  isCheck: z.boolean().refine((value) => value === true),
});

export type ctaSchemaType = z.infer<typeof ctaSchema>;
