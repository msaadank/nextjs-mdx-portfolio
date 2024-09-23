import React from 'react'

interface WelcomeEmail {
  email: string
}

const NewsletterWelcomeEmail: React.FC<WelcomeEmail> = ({ email }) => {
  return (
    <div>
      <h1>Welcome to [Your Portfolio Name] Newsletter!</h1>
      <p>Hi {email.split('@')[0]},</p>
      <p>
        Thank you for subscribing to my newsletter! 🎉 I'm thrilled to have you
        on board. You'll be receiving updates, insights, and the latest news
        about my projects, web development tips, and much more.
      </p>
      <p>
        I'm always looking forward to new opportunities and collaborations. If
        you're working on something exciting or need a web developer, don't
        hesitate to reach out—I&apos;d love to work with you!
      </p>
      <p>Stay tuned for some exciting content coming your way soon!</p>
      <p>
        Best regards,
        <br />
        Muhammad Saadan Khalid
        <br />
        <a href='http://saadan.site'>Visit my site</a>
      </p>
    </div>
  )
}

export default NewsletterWelcomeEmail
