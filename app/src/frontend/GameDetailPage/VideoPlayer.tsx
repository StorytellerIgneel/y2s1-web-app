import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import {Container} from "react-bootstrap"

export default function VideoPlayer() {
    return (
        <Container>
            <h1>Hello World 123456</h1>
            <div className="ratio ratio-16x9" width="800" height="450">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>
        </Container>
    );
}