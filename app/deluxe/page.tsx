'use client';

import { useEffect } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importă pluginurile corect
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const DeluxePage = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const galleryElement = document.getElementById('lightgallery');
            
            // Verificăm dacă elementul există
            if (galleryElement) {
                lightGallery(galleryElement, {
                    plugins: [lgThumbnail, lgZoom],
                    speed: 500,
                });
            }
        }
    }, []);

    return (
        <div>
           <br/>
           <br/>
           <br/>
            <main>
                <div className="gallery" id="lightgallery">
                    <a href="assets/images/deluxe1.jpg">
                        <img src="assets/images/deluxe1.jpg" alt="" />
                    </a>
                    <a href="assets/images/deluxe2.jpg">
                        <img src="assets/images/deluxe2.jpg" alt="" />
                    </a>
                    <a href="assets/images/deluxe3.jpg">
                        <img src="assets/images/deluxe3.jpg" alt="" />
                    </a>
                    <a href="assets/images/deluxe4.jpg">
                        <img src="assets/images/deluxe4.jpg" alt="" />
                    </a>
                    <a href="assets/images/deluxe6.jpg">
                        <img src="assets/images/deluxe6.jpg" alt="" />
                    </a>
                    <a href="assets/images/deluxe5.jpg">
                        <img src="assets/images/deluxe5.jpg" alt="" />
                    </a>
                </div>
            </main>
        </div>
    );
};

export default DeluxePage;
