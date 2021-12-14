import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => (
    <div className="text-center mt-20 mb-8 p-14 relative rounded-xl bg-white bg-opacity-25">
        <div className="absolute left-0 right-0 -top-14">
            <Image
                unoptimized
                alt={author.name}
                height="120px"
                width="120px"
                className="align-middle rounded-full mb-5 border-2"
                src={author.photo.url}
            />
        </div>
        <h3 className="text-white mt-4 mb-4 text-xl">Author: <span className="italic text-xl font-bold">{author.name}</span></h3>
        <p className="text-white mt-4 text-ls italic">About Author: <span className="italic text-lg font-bold">{author.bio}</span></p>
    </div>
);

export default Author;