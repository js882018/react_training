export function Component2() {
    const randomTexts = [];
    function generateRandomText(min = 8, max = 64) {
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const rmLength = Math.floor(Math.random() * (max - min + 1)) + min;
        let result = '';
    
        for (let i = 0; i < rmLength; i++) {
            const rmIndex = Math.floor(Math.random() * char.length);
            result += char[rmIndex];
        }
        return result;
    }
    function generateRandomTextList(){
        for (let i = 0; i < 6; i++) {
            randomTexts.push(generateRandomText());
        }
        return randomTexts;
    };
    function getRandomTextData() {
        generateRandomTextList();
        return randomTexts.map((data, index) => {
            return <p key={index}>{index + 1}. {data}</p>
        })
    }
    return (
        <>
            <div className="right">
                <h2>Random Text</h2>
                <div>{getRandomTextData()}</div>
            </div>
        </>

    );
}