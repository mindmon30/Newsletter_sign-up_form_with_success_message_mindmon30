import { useEffect, useState } from 'react'
import { image0, image1, image2, image3 } from './assets'

function App() {
    const [email, setEmail] = useState('ash@loremcompany.com')
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)

    function handleChange(e) {
        setError(false)
        setEmail(e.target.value)
    }

    function handleSubmit() {
        if (email == '') {
            setError(true)
            return
        }
        if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
            setError(true)
            return
        }

        setIsSuccess(true)
    }

    function reset() {
        setEmail('')
        setIsSuccess(false)
        setError(false)
    }

    useEffect(() => {
        const updateIsDesktop = () => {
            setIsDesktop(window.innerWidth >= 768) // Adjust the breakpoint as needed
        }

        // Event listener for window resize
        window.addEventListener('resize', updateIsDesktop)
        return () => {
            window.removeEventListener('resize', updateIsDesktop)
        }
    }, [])

    return (
        <main>
            <div className="flex justify-center md:h-screen md:items-center">
                <section>
                    {isSuccess ? (
                        <div className="bg-White px-8 pb-5 pt-40 md:h-auto md:w-[29rem] md:rounded-[2rem] md:p-12">
                            <img src={image1} alt="success-mark" />
                            <h1 className="mt-10 text-[2.5rem] font-bold leading-10 text-DarkSlateGray md:mt-7 md:text-5xl">
                                Thanks for subscribing!
                            </h1>

                            <p className="mt-8 md:mt-6">
                                A confirmation email has been sent to
                                <span className="font-bold"> {email}</span>.
                                Please open it and click the button inside to
                                confirm your subscription.
                            </p>

                            <button
                                className="my-4 mt-72 h-12 w-full rounded-md bg-DarkSlateGray text-sm font-bold text-White hover:bg-gradient-to-br hover:from-Tomato hover:to-orange-400 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-Tomato md:mt-8"
                                onClick={reset}
                            >
                                Dismiss message
                            </button>
                        </div>
                    ) : (
                        <div className="w-screen bg-White md:flex md:w-auto md:flex-row-reverse md:rounded-[2rem]">
                            {isDesktop ? (
                                <img
                                    className="m-5 h-[36rem]"
                                    src={image2}
                                    alt="image newsletter"
                                />
                            ) : (
                                <img
                                    className="w-full"
                                    src={image3}
                                    alt="image newsletter"
                                />
                            )}
                            <div className="flex items-center justify-center md:w-[30rem] md:pt-5">
                                <div className="w-80 py-10 md:w-96 md:py-20">
                                    <h1 className="text-[2.5rem] font-bold text-DarkSlateGray md:text-5xl">
                                        Stay updated!
                                    </h1>

                                    <p className="py-7 text-CharcoalGray">
                                        Join 60,000+ product managers receiving
                                        monthly updates on:
                                    </p>
                                    <ul className="text-CharcoalGray">
                                        <li className="mb-3 flex gap-5">
                                            <img
                                                className="h-6 w-6"
                                                src={image0}
                                                alt="checkmark"
                                            />
                                            <p>
                                                Product discovery and building
                                                what matters
                                            </p>
                                        </li>
                                        <li className="mb-3 flex gap-5">
                                            <img
                                                className="h-6 w-6"
                                                src={image0}
                                                alt="checkmark"
                                            />
                                            <p>
                                                Measuring to ensure updates are
                                                a success
                                            </p>
                                        </li>
                                        <li className="mb-3 flex gap-5">
                                            <img
                                                className="h-6 w-6"
                                                src={image0}
                                                alt="checkmark"
                                            />
                                            <p>And much more!</p>
                                        </li>
                                    </ul>
                                    <fieldset className="mt-8">
                                        <label className="flex justify-between text-xs font-bold">
                                            <p className="text-DarkSlateGray">
                                                Email address
                                            </p>
                                            <p
                                                className={`text-Tomato ${
                                                    error ? '' : `hidden`
                                                }`}
                                            >
                                                Valid email required
                                            </p>
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="email@company.com"
                                            className={`mt-2 w-full rounded-lg border-[2px] px-4 py-2 placeholder:text-sm ${
                                                error
                                                    ? `bg-orange-200 text-Tomato outline-Tomato`
                                                    : ''
                                            }`}
                                        />
                                    </fieldset>

                                    <button
                                        onClick={handleSubmit}
                                        className="my-4 h-12 w-full rounded-md bg-DarkSlateGray text-sm font-bold text-White hover:bg-gradient-to-br hover:from-Tomato hover:to-orange-400 hover:shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] hover:shadow-Tomato"
                                    >
                                        Subscribe to monthly newsletter
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="footerCus text-center text-[11px]">
                        Challenge by{' '}
                        <a
                            className="text-FooterDefault"
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                        >
                            Frontend Mentor
                        </a>
                        . Coded by{' '}
                        <a
                            className="text-FooterDefault"
                            href="https://github.com/mindmon30/Newsletter_sign-up_form_with_success_message_mindmon30"
                            target="_blank"
                        >
                            mindmon30
                        </a>
                        .
                    </div>
                </section>
            </div>
        </main>
    )
}

export default App
