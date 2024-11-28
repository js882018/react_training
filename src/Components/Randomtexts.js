import { Component } from "react";

class Randomtexts extends Component {
    render() {
        const { randomText, onGenerateText } = this.props;

        return (
            <div>
                <h2>Random Text</h2>
                <button onClick={onGenerateText} className="random-txt">Generate Random Text</button>
                <p>{randomText}</p>
            </div>
        );
    }

}

export default Randomtexts;