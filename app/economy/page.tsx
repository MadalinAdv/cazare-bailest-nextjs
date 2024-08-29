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
                    <a href="assets/images/economy.jpg">
                        <img src="assets/images/economy.jpg" alt="" />
                    </a>
                    <a href="assets/images/economy2.jpg">
                        <img src="assets/images/economy2.jpg" alt="" />
                    </a>
                    <a href="assets/images/economy3.jpg">
                        <img src="assets/images/economy3.jpg" alt="" />
                    </a>
                    <a href="assets/images/economy4.jpg">
                        <img src="assets/images/economy4.jpg" alt="" />
                    </a>
                   
                </div>
            </main>
        </div>
    );
};

export default QueenPage;
