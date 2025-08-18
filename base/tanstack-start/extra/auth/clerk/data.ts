export const signIn = `
import { SignIn } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in/$')({
  component: Page,
})

function Page() {
  return <SignIn />
}
`;

export const signUp = `
import { SignUp } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-up/$')({
  component: Page,
})

function Page() {
  return <SignUp />
}
`;

export const createClerkHandler = `
import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'
import { createRouter } from './router'
import { createClerkHandler } from '@clerk/tanstack-react-start/server'

export default createClerkHandler(
  createStartHandler({
    createRouter,
  }),
)(defaultStreamHandler)
`;

export const severRoute = `
import { clerkClient, getAuth } from '@clerk/tanstack-react-start/server'
import { json } from '@tanstack/react-start'
import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute('/api/example').methods({
  GET: async ({ request, params }) => {
    // Use "getAuth()" to retrieve the user's ID
    const { userId } = await getAuth(request)

    // Protect the API route by checking if the user is signed in
    if (!userId) {
      return json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get the user's full "Backend User" object
    const user = userId ? await clerkClient().users.getUser(userId) : null

    return json({ user })
  },
})
`;

export const webhook = `
import { verifyWebhook } from '@clerk/tanstack-react-start/webhooks'
import { createServerFileRoute } from '@tanstack/react-start/server'

export const ServerRoute = createServerFileRoute().methods({
  POST: async ({ request }) => {
    try {
      const evt = await verifyWebhook(request)

      // Do something with payload
      // For this guide, log payload to console
      const { id } = evt.data
      const eventType = evt.type
      console.log(\`Received webhook with ID \${id} and event type of \${eventType}\`)
      console.log('Webhook payload:', evt.data)

      return new Response('Webhook received', { status: 200 })
    } catch (err) {
      console.error('Error verifying webhook:', err)
      return new Response('Error verifying webhook', { status: 400 })
    }
  },
})
`;
