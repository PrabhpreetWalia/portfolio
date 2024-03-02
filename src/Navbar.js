import './Navbar.css'

export default function Navbar(){

    return(
        <nav>

            <div className="nav--left">Prabh.dev</div>
            <div className="nav--right">
                <ul>
                    <a href="#hero"><li className="nav--li">Home</li></a>
                    <a href="#about"><li className="nav--li">About</li></a>
                    <a href="#project"><li className="nav--li">Projects</li></a>
                    <a href="#footer"><li className="nav--li">Contact</li></a>

                </ul>
            </div>
        </nav>
    )
}