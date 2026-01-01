import "../css/cars.css"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import car_01 from "../assets/advertisements/vid_001.mp4";
import car_02 from "../assets/advertisements/vid_002.mp4";
import car_03 from "../assets/advertisements/vid_003.mp4";
import car_04 from "../assets/advertisements/vid_004.mp4";
import car_05 from "../assets/advertisements/vid_005.mp4";
import car_06 from "../assets/advertisements/vid_006.mp4";
import car_07 from "../assets/advertisements/vid_007.mp4";
import car_08 from "../assets/advertisements/vid_008.mp4";

const cars = [
    {
        id: 1,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_01,
    },
    {
        id: 2,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_02,
    },
    {
        id: 3,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_03,
    },
    {
        id: 4,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_04,
    },
    {
        id: 5,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_05,
    },
    {
        id: 6,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_06,
    },
    {
        id: 7,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_07,
    },
    {
        id: 8,
        name: "Car One",
        description: "This is the first car.",
        thumbnail: "videos/GT.jpg",
        video: car_08,
    },
]
const Car = ({ car_image, car_vid, car_name, car_description }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    }   
    const handlePause = () => {
        setIsPlaying(false);
    }
    const showControls = () => {
        videoRef.current.play();
        videoRef.current.controls = true;
        videoRef.current.style.cursor = "pointer";
    }
    const hideControls = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.controls = false;
        videoRef.current.style.cursor = "default";
    }

    return (
        <div className="car" onMouseEnter={showControls} onMouseLeave={hideControls}>
        { !isPlaying && (<img src={car_image} alt="Thumbnail"
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "1rem",
            cursor: "pointer",
            zIndex: 2,
        }} 
        onClick={() => videoRef.current.play()}/>
        )}
            <video poster={car_image} src={car_vid} muted ref={videoRef} onPlay={handlePlay} onPause={handlePause}>
            </video>
            <div className="car-info">
                <h3>{car_name}</h3>
                <p>{car_description}</p>
            </div>
        </div>
    )
}
const CarVideos = () => {
    return (
        <div className="car-videos">
           {cars.map((car) => (
            <Car key={car.id} car_image={car.thumbnail} car_vid={car.video} car_name={car.name} car_description={car.description} />
           ))}
        </div>
    )
}

const Cars = () => {
    return (
        <section className="cars">
            <button><Link to="/">Home</Link></button>
            <p>a lot about cars and videos thereof</p>
            <CarVideos />
        </section>
    )
}

export default Cars;