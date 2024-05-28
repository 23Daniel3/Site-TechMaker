/*import {
    Scene,
    Color,
    PerspectiveCamera,
    WebGLRenderer,

} from 'https://unpkg.com/three/build/three.module.js';
import { OBJLoader } from 'https://unpkg.com/three/examples/jsm/loaders/OBJLoader';
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new Scene();
scene.background = new Color(0xdddddd);

const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
);

camera.rotation.y = (45 / 180) * Math.PI;
camera.position.x = 800;
camera.position.y = 100;
camera.position.z = 1000;

const objLoader = new OBJLoader();
objLoader.setPath('../img/');
objLoader.load('Wilson.obj', (object) => {
    object.scale.set(50, 50, 50);
    scene.add(object);
}, 
    (xhr) => {
        console.log('Carregando objeto: ${(xhr.loaded / xhr.total) * 100}% carregados'
        );
    },
    (err) => {
        console.log('Erro ocorrido: ${err}');
    }
);

const animate = function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
};

animate();
*/
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn').addEventListener('click', function(event) {
        event.preventDefault();
        var email = 'techmakerrobotics@gmail.com';
        navigator.clipboard.writeText(email)
            .then(function() {
                alert('Endereço de e-mail copiado para a área de transferência: ' + email);
            })
            .catch(function(error) {
                console.error('Erro ao copiar o endereço de e-mail: ', error);
            });
    });
    
});
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.insta').addEventListener('click', function(event) {
        event.preventDefault();
        var instagramLink = 'https://www.instagram.com/techmaker.frc/';
        window.open(instagramLink, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.youtube').addEventListener('click', function(event) {
        event.preventDefault();
        var youtubeLink = 'https://www.youtube.com/@TechMakerTeam';
        window.open(youtubeLink, '_blank');
    });
});

