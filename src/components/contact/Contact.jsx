import "./Contact.css"

function Contact() {
    return (
    <article className="contact" data-page="contact">

        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <div className="logo-container">
            <div className="logo">Tyrone He</div>
        </div>

        <div className="card-container">
            <div className="card-inner-container">
                <p className="card">Cell:&nbsp;
                    <a style={{color: "inherit", display: "inline-block"}} href="javascript: void(0)">(778)988-2087</a>
                </p>
                <p className="card">Gmail:&nbsp;
                    <a style={{color: "inherit", display: "inline-block"}} href="javascript: void(0)">tyrone99926</a>
                </p>
                <p className="card">LinkedIn: Qirong He</p>
            </div>
            <div className="card-inner-container">
                <p className="card">IG:&nbsp;tyrone_heee</p>
                <p className="card">SteamID:&nbsp;299409201</p>
                <p className="card">GitHub:&nbsp;TyroneHe-0926</p>
            </div>
        </div>
    </article>
    )
}

export default Contact;