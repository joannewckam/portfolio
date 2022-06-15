import "./about.css"
const About = () => {
    return (
        <div className = "a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                    src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="a-img"
                    />
                </div>
            </div>
            <div className ="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                I’m a Software Developer with a background in Management, pursuing my passion for creativity and enriching the lives of others through technology. 
                I demonstrate excellence by leveraging my communication, leadership and personal drive to continuously learn.
                Personally, I enjoy travel, games and powerlifting. These interests have helped me form a resilient mindset and enabled me to pursue new challenges.
                </p>
                <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum    
                </p>
                <div className="a-award">
                    <img 
                    src=""
                    alt=""
                    className="a-award-img"/>
                </div>
            </div>
        </div>
    )
}
export default About