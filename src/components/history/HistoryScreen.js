import React from 'react'

export const HistoryScreen = () => {
    return (
        <div>
            <h2>History</h2>
            <hr/>    
            <p>The Graphics Interchange Format (GIF; /ɡɪf/ GHIF or /dʒɪf/ JIF) is a bitmap image format that was developed by a team at the online services provider CompuServe led by American computer scientist Steve Wilhite on 15 June 1987. 
            It has since come into widespread usage on the World Wide Web due to its wide support and portability between applications and operating systems.
            The format supports up to 8 bits per pixel for each image, allowing a single image to reference its own palette of up to 256 different colors chosen from the 24-bit RGB color space. 
            It also supports animations and allows a separate palette of up to 256 colors for each frame. These palette limitations make GIF less suitable for reproducing color photographs and other images with color gradients, but well-suited for simpler images such as graphics or logos with solid areas of color.
            GIF images are compressed using the Lempel–Ziv–Welch (LZW) lossless data compression technique to reduce the file size without degrading the visual quality. This compression technique was patented in 1985. Controversy over the licensing agreement between the software patent holder, Unisys, and CompuServe in 1994 spurred the development of the Portable Network Graphics (PNG) standard. 
            By 2004 all the relevant patents had expired.</p>
            <a href="https://en.wikipedia.org/wiki/GIF#:~:text=CompuServe%20introduced%20GIF%20on%2015,it%20used%20LZW%20data%20compression" className="btn btn-primary ">Bibliography</a>
        </div>
    )
}
