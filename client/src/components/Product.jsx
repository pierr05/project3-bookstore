import React, { useState } from 'react'
import image from "../assets/image1.jpeg"

const Product = () => {

// the images
    const [images, setImages] = useState({
        img: 'data:image/jpeg;base64,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'
    })

    const [activeImg, setActiveImage] = useState(images.img)
//the - and + buttons
    const [amount, setAmount] = useState(1);


    return (
        <div className='flex flex-col justify-between lg:flex-row gap-4 lg:items-center bg-pink-400'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt='' className='w-1/2 h-50 ml-20' />
            </div>
            {/* About */}
            <div className='flex flex-col gap-4 lg:w-2/4 mx-20'>
                <div>
                    <span className='font-semibold text-white'>headtitle</span>
                    <h1 className='text-3xl font-bold text-white'>Harry Potter Book</h1>
                </div>
                <p className='text-gray-200'>Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's conflict with Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).

The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy. A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and reference
                </p>
                <h6 className=' text-2xl font-semibold text-white'>$ 25.99</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className=' flex flow-row items-center'>
                        <button className=' bg-pink-200 p-2 px-5 text-white rounded-lg text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-pink-200 p-2 px-5 text-white rounded-lg text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-pink-200 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product