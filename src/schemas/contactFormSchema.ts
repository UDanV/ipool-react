import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Введите ФИО')
    .max(100, 'ФИО не должно превышать 100 символов')
    .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'ФИО может содержать только буквы'),
  phone: z
    .string()
    .trim()
    .refine(
      (value) => value.replace(/\D/g, '').length >= 10,
      'Введите корректный номер телефона',
    ),
  message: z
    .string()
    .trim()
    .min(10, 'Сообщение должно содержать не менее 10 символов')
    .max(2000, 'Сообщение не должно превышать 2000 символов'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>

export const emptyContactForm: ContactFormData = {
  fullName: '',
  phone: '',
  message: '',
}

export function getContactFormErrors(error: z.ZodError): ContactFormErrors {
  const errors: ContactFormErrors = {}

  for (const issue of error.issues) {
    const field = issue.path[0]

    if (
      typeof field === 'string' &&
      (field === 'fullName' || field === 'phone' || field === 'message') &&
      !errors[field]
    ) {
      errors[field] = issue.message
    }
  }

  return errors
}
