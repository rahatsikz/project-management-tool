"use client"
import toast from 'react-hot-toast';

export const ImageUpload = async (image: any) => {
    console.log(image)
    try {
        const formData = new FormData();
        formData.append('image', image);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=f4052aebed81f64bac5200dbffed44c1`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            toast.error('Image upload failed');
        }

        const data = await response.json();
        return data

    } catch (error) {
        toast.error('Failed to upload image');
    }
};

