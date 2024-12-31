import React from 'react';

const BentoCard = ({ src, title, description, isComingSoon }) => {
    return (
        <div className='relative size-full'>
            <video
                src={src}
                loop
                autoPlay
                muted
                className='absolute top-0 left-0 size-full object-cover object-center'
            />
            {title}
        </div>
    );
}

function Features() {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>Dive into the Zentry Universe</p>
                </div>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Immerse yourself in a rich and ever-expanding ecosystem where a vibrant array of products converge into an interconnected universe.</p>
            </div>
            <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard
                    src='videos/feature-1.mp4'
                    title={<>radi<b>n</b>t</>}
                    description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
                    isComingSoon
                />
            </div>
        </section>
    )
}

export default Features;