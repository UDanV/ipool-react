import { useEffect, useState, type FormEvent } from 'react'
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from '@heroui/react'
import {
  contactFormSchema,
  emptyContactForm,
  getContactFormErrors,
  type ContactFormData,
  type ContactFormErrors,
} from '@/schemas/contactFormSchema'
import { sendContactMessage } from '@/api/sendContactMessage'
import { toast } from '@heroui/react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(emptyContactForm)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setFormData(emptyContactForm)
      setErrors({})
      setIsSubmitted(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = contactFormSchema.safeParse(formData)

    if (!result.success) {
      setErrors(getContactFormErrors(result.error))
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      await sendContactMessage(result.data)
      toast.success('Сообщение отправлено')
    } catch {
      toast.danger('Не удалось отправить сообщение')
    } finally {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <Modal.Backdrop variant="blur" className="bg-black/70">
        <Modal.Container className="p-3 sm:p-6">
          <Modal.Dialog className="max-w-2xl overflow-hidden rounded-2xl p-0 sm:rounded-3xl">
            <Modal.Header className="flex items-start justify-between gap-4 border-b border-[#E5E8EB] px-4 py-4 sm:px-6 sm:py-5">
              <div className="space-y-2 pr-4">
                <Modal.Heading className="text-xl font-bold uppercase text-[#2E2E2E] sm:text-2xl">
                  Свяжитесь с нами
                </Modal.Heading>
                <p className="text-sm leading-relaxed text-[#4B4B4B] sm:text-base">
                  Менеджеры компании с радостью ответят на ваши вопросы и произведут расчет
                  стоимости услуг и подготовят индивидуальное коммерческое предложение.
                </p>
              </div>
              <Modal.CloseTrigger className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E8EB] bg-white text-[#111111] transition hover:border-[#687C96] hover:text-[#687C96]" />
            </Modal.Header>

            <Modal.Body className="px-4 py-5 sm:px-6 sm:py-6">
              {isSubmitted ? (
                <div className="rounded-2xl bg-[#F4F7FA] px-5 py-8 text-center">
                  <p className="text-lg font-semibold text-[#2E2E2E] sm:text-xl">
                    Спасибо! Сообщение отправлено.
                  </p>
                  <p className="mt-3 text-sm text-[#4B4B4B] sm:text-base">
                    Менеджер свяжется с вами в ближайшее время.
                  </p>
                  <Button
                    className="mt-6 bg-black text-white"
                    onPress={onClose}
                  >
                    Закрыть
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <TextField
                    fullWidth
                    isRequired
                    isInvalid={!!errors.fullName}
                    value={formData.fullName}
                    onChange={(value) => updateField('fullName', value)}
                  >
                    <Label>ФИО</Label>
                    <Input placeholder="Иванов Иван Иванович" />
                    {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
                  </TextField>

                  <TextField
                    fullWidth
                    isRequired
                    isInvalid={!!errors.phone}
                    value={formData.phone}
                    onChange={(value) => updateField('phone', value)}
                  >
                    <Label>Телефон</Label>
                    <Input placeholder="+7 (999) 000-00-00" type="tel" />
                    {errors.phone && <FieldError>{errors.phone}</FieldError>}
                  </TextField>

                  <TextField
                    fullWidth
                    isRequired
                    isInvalid={!!errors.message}
                    value={formData.message}
                    onChange={(value) => updateField('message', value)}
                  >
                    <Label>Сообщение</Label>
                    <TextArea
                      placeholder="Опишите ваш запрос"
                      rows={5}
                      className="min-h-32 resize-none"
                    />
                    {errors.message && <FieldError>{errors.message}</FieldError>}
                  </TextField>

                  <Button
                    type="submit"
                    fullWidth
                    isDisabled={isSubmitting}
                    className="bg-black py-6 text-base font-bold uppercase text-white sm:text-lg"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                  </Button>
                </form>
              )}
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}
