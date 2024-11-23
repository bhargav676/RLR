import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageDetail = () => {
    const { index } = useParams(); // Get the image index from the URL
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImageDetail = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:4001/getimages');
                setImage(response.data[index]); 
            } catch (err) {
                console.error('Error fetching image detail:', err);
            }
        };
        fetchImageDetail();
    }, [index]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            {image ? (
                <div className="container mx-auto p-4">
                    <div className="text-center space-y-8">
                        {image.images.map((img, i) => (
                            <div key={i} className="shadow-md rounded-lg overflow-hidden bg-white border border-gray-200">
                                <img
                                    src={img}
                                    alt={`Step ${i + 1}`}
                                    className="w-full h-auto object-cover rounded-t-lg"
                                />
                                <div className="p-4">
                                    <p className="text-gray-700 font-medium">
                                        {i === 0 ? image.title : image.stepInputs[i - 1]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-lg font-semibold">Loading image...</p>
            )}
        </div>
    );
};

export default ImageDetail;
