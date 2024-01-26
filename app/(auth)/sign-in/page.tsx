import { Button } from 'flowbite-react'
import React from 'react'

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Sign In</h1>
        <Button href='/sign-up'>
            Sign Up
        </Button>
    </div>
  )
}

export default SignIn