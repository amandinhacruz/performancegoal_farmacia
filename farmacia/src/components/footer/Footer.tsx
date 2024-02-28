import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    

    return (
        <>
            <div className="flex justify-center bg-[#F40000] text-white py-14">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Amanda Cruz</p>
                    <p className='text-lg pt-2 font-bold'>Contato</p>
                    <div className='flex gap-2 pt-2'>
                        <a href="https://github.com/amandinhacruz" target="_blank" className='hover:scale-90'>
                            <GithubLogo size={44}/>
                        </a>
                        <a  href='https://www.linkedin.com/in/amanda-cruz-306707287/' target="_blank" className='hover:scale-90'>
                            <LinkedinLogo size={44}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer