const Randomtexts = ({ randomText, onGenerateText }) => {
    return (
        <div>
            <h2>Random Text</h2>
            <button onClick={onGenerateText}>Generate Random Text</button>
            <p>{randomText}</p>
        </div>
    );
};

export default Randomtexts;