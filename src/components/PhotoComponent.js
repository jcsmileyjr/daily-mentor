import './photoComponent.css';

const PhotoComponent = ({photo, title, link}) => {
    return(
        <div className="container">
            <img src={photo} alt="something"  />
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </div>
    );
}

export default PhotoComponent;