'use client'
import { useState, useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { GithubLoginButton, GoogleLoginButton, LinkedInLoginButton } from 'react-social-login-buttons'



const page = () => {

    const session = useSession()
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(session?.status === 'authenticated') {
            console.log('authenticated')
            router.push('/')
        }
    }, [session?.status, router]);

    const socialAction = (action: string) => {
        setIsLoading(true)
        signIn(action, { redirect: false })
        .then((callback) => {
            if(callback?.error) {
                return;
            }

            if(callback?.ok) {
                router.push('/')
            }
        })

        .finally(() => setIsLoading(false))
    }



  return (
    <div className='my-24 sm:mx-auto sm:max-w-4xl px-5 min-h-screen '>
        <div className='bg-white shadow sm:rounded-lg flex gap-5 justify-between h-96 overflow-hidden'>
            <div className='mt-6 flex gap-2 flex-col justify-center items-center mx-auto'>
                <Link href='/' className='mb-5'>
                    <h1 className='text-3xl font-bold text-gray-700'>
                        raz<span className='text-green-600'>van</span>
                    </h1>
                </Link>
                <span className='text-sm'>
                    Log in or sign up with the links below
                </span>
                <GoogleLoginButton onClick={() => socialAction('google')} />
                <GithubLoginButton onClick={() => socialAction('github')} />
                <LinkedInLoginButton onClick={() => socialAction('linkedin')} />
            </div>
            <Image 
                src='/assets/post1.jpg'
                width={500}
                height={500}
                alt='sign up image'
                objectFit='cover'
                className='4xs:hidden md:block'
            />
        </div>
    </div>
  )
}

export default page