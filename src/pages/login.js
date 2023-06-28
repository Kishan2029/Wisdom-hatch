import React from 'react'
import Layout from '../components/Layout'
import GreenContainer from '../components/GreenContainer'
import { FcGoogle } from 'react-icons/fc';
import Button from '../components/Button';


const login = () => {
    return (
        <Layout>
            <div className='mt-20'>
                <div className='text-4xl mb-10 text-center'>Login</div>
                <div className='flex justify-center'>
                    <div className='w-2/3'>
                        <GreenContainer >
                            <div className='p-8 '>
                                {/* Username and Password */}
                                <div>
                                    <label for="username" className='text-xl'>Username or Email Address:</label><br />
                                    <input className='mt-2 border-black border border-solid rounded-xl h-10 w-full' type="text" id="username" name="username" style={{ background: 'transparent' }} />
                                </div>
                                <div className='mt-10'>
                                    <label for="username" className='text-xl'>Password:</label><br />
                                    <input className='mt-2 border-black border border-solid rounded-xl h-10 w-full' type="text" id="username" name="username" style={{ background: 'transparent' }} />
                                </div>
                                <div className='mt-10 text-2xl text-center'> Login with your Social ID</div>
                                <hr className='h-4 mt-5' />
                                <div className='flex justify-center'><FcGoogle style={{ fontSize: 35 }} /></div>
                                <div className='mt-4'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />  <span className='text-emerald-600 font-bold'>Remember Me</span>
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <Button value={"LOG IN"} height={10} />
                                </div>
                                <div className='text-sm'>Lost Your Password?</div>
                            </div>
                        </GreenContainer>
                    </div>
                </div>
            </div>

        </Layout >
    )
}

export default login