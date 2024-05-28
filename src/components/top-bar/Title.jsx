


function Title() {
    const letters = ['P','A','T','R','I','C','K','C','A','P','O','V','I','L','L','A','.','C','O','M'];

    return (
        <div className="title">
            <div className="word">
                {letters.map((letter, index) => (
                    <div className="hover outline-text-thick" key={index}>
                        <div></div>
                        <div></div>
                        <h2>{letter}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Title;