import Image from "next/image"

const Hero = () => {
    return (
        <div>

            <div className='bg-white dark:bg-black pt-36 '>
                <div className='relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden flex flex-wrap justify-center gap-7 items-center' >
                <Image src="/assets/btc.png" width={300} height={300} className="animate-bounce"  alt="Hero Image" />
                <p className='text-2xl md:text-5xl font-bold text-black dark:text-white w-[450px]'>Premium Global Crypto Updates</p>
                </div>
            </div>

        </div>
    )
}

export default Hero
