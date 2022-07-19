import { rest } from 'msw'

export const handlers = [
    rest.all('https://api.backend.dev/captcha-on', (req, res, ctx) => {
      // Persist user's authentication in the session
      sessionStorage.setItem('trigger-captcha', 'true')
      return res(
        // Respond with a 200 status code
        ctx.status(200),
      )
    }),
    rest.all('https://api.backend.dev/captcha-off', (req, res, ctx) => {
        // Persist user's authentication in the session
        sessionStorage.setItem('trigger-captcha', 'false')
        return res(
          // Respond with a 200 status code
          ctx.status(200),
        )
      }),
    rest.all('https://api.backend.dev/user', (req, res, ctx) => {
      // Check if the user is authenticated in this session
      const captchaOn = sessionStorage.getItem('trigger-captcha')
      if (!captchaOn) {
        // If not authenticated, respond with a 403 error
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      }
      // If authenticated, return a mocked user details
      return res(
        ctx.status(200),
        ctx.json({
          username: req.query.foo,
        }),
      )
    }),
  ]