import type { ContactFormData } from '@/schemas/contactFormSchema'
import { toast } from '@heroui/react'

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string
const CONTACT_SUBJECT = 'Сообщение с сайта ipool.ru'

interface FormSubmitResponse {
  success?: boolean
  message?: string
}

export async function sendContactMessage(data: ContactFormData): Promise<void> {
  const customApiUrl = import.meta.env.VITE_CONTACT_API_URL

  if (customApiUrl) {
    const response = await fetch(customApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: CONTACT_EMAIL,
        subject: CONTACT_SUBJECT,
        ...data,
      }),
    })

    if (!response.ok) {
      toast.danger('Не удалось отправить сообщение')
    }

    return
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        _subject: CONTACT_SUBJECT,
        _template: 'table',
        _captcha: 'false',
        ФИО: data.fullName,
        Телефон: data.phone,
        Сообщение: data.message,
      }),
    },
  )

  const result = (await response.json()) as FormSubmitResponse

  if (!response.ok || result.success === false) {
    throw new Error(result.message ?? 'Не удалось отправить сообщение')
  }
}
