function DonateComp() {
    return (
        <main>
        <div className="donation-content w3-padding w3-display-middle donate">
            <h2 className="h2-head">Donate to The Make-A-Wish Foundation</h2><br />
            <p>Your donation will help contribute to granting a wish for a child with a life-threatening illness.</p><br />
            <p>Together, we can make a difference.</p><br />
            <button className="donate-button" onclick="window.location.href='https://donate.stripe.com/test_9AQaG4bFW8Iz7Fm8ww';">
                Donate Now
            </button>
        </div>
        </main>

    )
}
export default DonateComp