import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
        <div>
            <h1>This image is using img tag</h1>
            <img src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" alt="" width="100%" />

            <h1>This image is using img component</h1>
            <Image src="https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs" alt="" width={600} height={600} layout="responsive" />
        </div>
    );
};

export default Album;