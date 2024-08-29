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
        // Verificăm dacă documentul este disponibil
        if (typeof window !== 'undefined') {
            // Inițializează lightGallery cu pluginurile
            lightGallery(document.getElementById('lightgallery'), {
                plugins: [lgThumbnail, lgZoom],
                speed: 500,
            });
        }
    }, []);

    return (
        <div>
           <br/>
           <br/>
           <br/>
            <main>
                <div className="gallery" id="lightgallery">
                    <a href="assets/images/piscina.jpg">
                        <img src="assets/images/piscina.jpg" alt="" />
                    </a>
                    <a href="assets/images/evenimente.jpg">
                        <img src="assets/images/evenimente.jpg" alt="" />
                    </a>
                    <a href="assets/images/topogan.jpg">
                        <img src="assets/images/topogan.jpg" alt="" />
                    </a>
                    <a href="assets/images/sstuff1.jpg">
                        <img src="assets/images/sstuff1.jpg" alt="" />
                    </a>
                    <a href="assets/images/stuff2.jpg">
                        <img src="assets/images/stuff2.jpg" alt="" />
                    </a>
                    <a href="assets/images/stuff3.jpg">
                        <img src="assets/images/stuff3.jpg" alt="" />
                    </a>
                    <a href="assets/images/stuff4.jpg">
                        <img src="assets/images/stuff4.jpg" alt="" />
                    </a>
                    <a href="assets/images/stuff5.jpg">
                        <img src="assets/images/stuff5.jpg" alt="" />
                    </a>
                    <a href="assets/images/stuff6.jpg">
                        <img src="assets/images/stuff6.jpg" alt="" />
                    </a>
                    
                </div>
            </main>
        </div>
    );
};

export default QueenPage;
