"use client"
import React, { useState } from 'react'; // Make sure to include your global styles
interface Image {
    id: number;
    src: string;
    alt: string;
    description: string;
}

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const initialImages: Image[] = [

        {
            id: 1,
            src: 'https://tecdn.b-cdn.net/img/new/standard/city/046.jpg',
            alt: 'Image 1',
            description: 'Description for Image 1',
        },
        {
            id: 2,
            src: 'https://tecdn.b-cdn.net/img/new/standard/city/047.jpg',
            alt: 'Image 2',
            description: 'Description for Image 2',
        },
        {
            id: 3,
            src: 'https://tecdn.b-cdn.net/img/new/standard/city/044.jpg',
            alt: 'Image 3',
            description: 'Description for Image 3',
        },
        {
            id: 4,
            src: 'https://tecdn.b-cdn.net/img/new/standard/city/045.jpg',
            alt: 'Image 4',
            description: 'Description for Image 4',
        },

        // Add more images as needed
    ];

    const backgroundImageStyle = selectedImage
        ? { backgroundImage: `url(${selectedImage.src})` }
        : { backgroundImage: "url('https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" };

    const handleImageClick = (image: Image) => {
        setSelectedImage(image);
    };

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div
                    className='bg-cover-text  before:from-cyan-500
before:to-blue-300'
                    style={backgroundImageStyle}
                >
                    <img
                        className='w-32 mx-auto h-auto object-cover'
                        src="https://trello.com/assets/14cda5dc635d1f13bc48.svg"
                        alt=""
                    />
                </div>
            </div>
            <div className='my-3'>
                <h1 className='p-3 block uppercase tracking-wide text-gray-800 dark:text-gray-200 text-xs '>Background</h1>
                <div className="flex justify-center gap-1 items-center ">
                    {initialImages.map((image) => (
                        <div key={image.id} className='relative'>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className='w-16 mx-auto h-auto object-cover cursor-pointer hover:opacity-50'
                                onClick={() => handleImageClick(image)}
                            />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default ImageGallery;
