'use client';

import { useEffect } from 'react';
import lightGallery from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

// Importă pluginurile corect
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const BugetPage = () => {
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
                    <a href="assets/images/buget.jpg">
                        <img src="assets/images/buget.jpg" alt="" />
                    </a>
                    <a href="assets/images/buget2.jpg">
                        <img src="assets/images/buget2.jpg" alt="" />
                    </a>
                    <a href="assets/images/buget3.jpg">
                        <img src="assets/images/buget3.jpg" alt="" />
                    </a>
                    <a href="assets/images/buget4.jpg">
                        <img src="assets/images/buget4.jpg" alt="" />
                    </a>
                    <a href="assets/images/buget5.jpg">
                        <img src="assets/images/buget5.jpg" alt="" />
                    </a>
                    
                </div>
            </main>
        </div>
    );
};

export default BugetPage;
