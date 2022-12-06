function Donate() {
    return (
            <div className>
                <h2>Donate to The Make-A-Wish Foundation</h2>
                <form className>
                    <input type="button" onclick="window.location.href='https://donate.stripe.com/test_9AQaG4bFW8Iz7Fm8ww';" defaultValue="Donate Now" />
                </form>
                <p>Your donation will help contribute to granting a wish for a child with a life-threatening illness.</p>
                <p>Together, we can make a difference</p>
            </div>

    )
}
export default Donate