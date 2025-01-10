import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ImageDetail = () => {
    const { index } = useParams(); 
    const [image, setImage] = useState(null);
    useEffect(() => {
        const fetchImageDetail = async () => {
            try {
                const response = await axios.get('https://rlr-component-server.vercel.app/getimages');
                console.log('Fetched image data:', response.data[index]); 
                setImage(response.data[index]);
            } catch (err) {
                console.error('Error fetching image detail:', err);
            }
        };
        fetchImageDetail();
    }, [index]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50 py-8 px-4">
            {image ? (
                <div className="max-w-4xl w-full">
                    <div className="mb-8">
                        <img
                            src={image.images[0]} 
                            alt="Main"
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                        />
                        <h1 className="mt-4 text-2xl font-bold text-gray-800 text-center">
                            {image.title}
                        </h1>
                    </div>
                    <div className="space-y-6">
                        {image.images.slice(1).map((img, i) => (
                            <div 
                                key={i} 
                                className="flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
                            >
                                <img
                                    src={img}
                                    alt={`Step ${i + 1}`}
                                    className="w-full sm:w-1/3 h-auto object-cover"
                                />
                                <div className="p-4 w-full sm:w-2/3">
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                        Step {i + 1}
                                    </h2>
                                    <p className="text-gray-600">
                                        {image.stepInputs?.[i] || 'No description available'}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {image.videoLink && (
                        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Video Link</h2>
                            <p className="text-gray-600">
                                <a 
                                    href={image.videoLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-teal-600 underline"
                                >
                                    Watch the video here
                                </a>
                            </p>
                        </div>
                    )}
                    {image.componentLink && (
                        <div className="mt-8 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Component Link</h2>
                            <p className="text-gray-600">
                                <a 
                                    href={image.componentLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-teal-600 underline"
                                >
                                    View the component here
                                </a>
                            </p>
                        </div>
                    )}
                    </div>
                </div>
            ) : (
                <p className="text-gray-500 text-lg font-semibold">Loading image...</p>
            )}
        </div>
    );
};
export default ImageDetail;
