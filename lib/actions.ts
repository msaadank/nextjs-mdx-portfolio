'use server'

import { z } from 'zod'
import { ContactFormSchema, NewsletterFormSchema } from './schemas'
import EmailTemplate from '@/emails/contact-form-email'
import { Resend } from 'resend'
import NewsletterForm from '@/components/newsletter-form'
import { render } from '@react-email/components'
import NewsletterWelcomeEmail from '@/emails/newsletter-welcome-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data

    const { data, error } = await resend.emails.send({
      from: 'Acme <hello@saadan.site>',
      to: [email],
      cc: 'Acme <hello@saadan.site>',
      subject: 'Contact form submission',
      react: EmailTemplate({ name, email, message }),
    });



    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    const res = await resend.emails.send({
        from: 'hello@saadan.site',
        to: [email],
        cc: ['hello@saadan.site'],
        subject: 'Contact form submission',
        react: NewsletterWelcomeEmail({ email })
    })

    if (!res.data || res.error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
