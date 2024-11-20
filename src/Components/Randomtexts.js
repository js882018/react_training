import { Component } from "react";

class Randomtexts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            randomTexts: [], // Initial empty state
            isLoaded: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            const texts = [];
            for (let i = 0; i < 6; i++) {
                texts.push(this.generateRandomText());
            }
            this.setState({ randomTexts: texts, isLoaded: true });
        }, 10000);
    }

    generateRandomText(min = 8, max = 64) {
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const rmLength = Math.floor(Math.random() * (max - min + 1)) + min;
        let result = '';

        for (let i = 0; i < rmLength; i++) {
            const rmIndex = Math.floor(Math.random() * char.length);
            result += char[rmIndex];
        }
        return result;
    }

    getRandomTextData() {
        return this.state.randomTexts.map((data, index) => {
            return <p key={index}>{index + 1}. {data}</p>
        })
    }

    render() {
        return (
            <div className="right">
                <h2>Random Text</h2>
                {!this.state.isLoaded ? (
                    <p>Loading items... Please wait for 10 seconds.</p>
                ) : (
                    <div>{this.getRandomTextData()}</div>
                )}
            </div>
        )
    }

}

export default Randomtexts;