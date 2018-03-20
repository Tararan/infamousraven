/* eslint-disable */
$( document ).ready(function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 50, "density": {"enable": true, "value_area": 210}},
            "color": {"value": "#CB00EF"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#CB00EF"},
                "polygon": {"nb_sides": 5},
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 0.5, "opacity_min": 0.1, "sync": false}
            },
            "size": {"value": 3, "random": true, "anim": {"enable": true, "speed": 10, "size_min": 0.1, "sync": false}},
            "line_linked": {"enable": true, "distance": 150, "color": "#CB00EF", "opacity": 1, "width": 5},
            "move": {
                "enable": true,
                "speed": 0.001,
                "direction": "none",
                "random": false,
                "straight": true,
                "out_mode": "out",
                "bounce": true,
                "attract": {"enable": true, "rotateX": 0.1, "rotateY": 10000}
            }
        }, "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "grab"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 0.75}},
                "repulse":
                    {"distance": 50, "duration": 1},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        }, "retina_detect": true
    });
    
    particlesJS("particles-js2", {
        "particles": {
            "number": {"value": 50, "density": {"enable": true, "value_area": 210}},
            "color": {"value": "#ad38c4"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 0.5, "opacity_min": 0.1, "sync": false}
            },
            "size": {"value": 3, "random": true, "anim": {"enable": true, "speed": 10, "size_min": 0.1, "sync": false}},
            "line_linked": {"enable": true, "distance": 150, "color": "#CB00EF", "opacity": 0.6, "width": 1},
            "move": {
                "enable": true,
                "speed": 0.001,
                "direction": "none",
                "random": false,
                "straight": true,
                "out_mode": "out",
                "bounce": true,
                "attract": {"enable": true, "rotateX": 0.1, "rotateY": 10000}
            }
        }, "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "grab"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 0.75}},
                "repulse":
                    {"distance": 50, "duration": 1},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        }, "retina_detect": true
    });
});
/* eslint-enable */
