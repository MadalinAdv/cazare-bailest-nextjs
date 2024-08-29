'use client';

import { useEffect } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importă pluginurile corect
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const QueenPage = () => {
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
                    <a href="assets/images/camera-2.jpg">
                        <img src="assets/images/camera-2.jpg" alt="" />
                    </a>
                    <a href="assets/images/queen-baie-2.jpg">
                        <img src="assets/images/queen-baie-2.jpg" alt="" />
                    </a>
                    <a href="assets/images/queen-baie-1.jpg">
                        <img src="assets/images/queen-baie-1.jpg" alt="" />
                    </a>
                </div>
            </main>
        </div>
    );
};

export default QueenPage;
