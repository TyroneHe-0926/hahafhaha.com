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
                <p className="card">Phone: 7789882087</p>
                <p className="card">Gmail: tyrone99926</p>
                <p className="card">LinkedIn: Qirong He</p>
            </div>
            <div className="card-inner-container">
                <p className="card">IG: tyrone_heee</p>
                <p className="card">SteamID: 299409201</p>
                <p className="card">GitHub: TyroneHe-0926</p>
            </div>
        </div>
    </article>
    )
}

export default Contact;