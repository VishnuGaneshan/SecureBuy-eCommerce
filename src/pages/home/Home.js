import ConnectWallet from "./ConnectWallet";

const Home = () => {
    return (
        <div className="container text-capitalize my-5">
            {/* title  */}
            <div className="text-center my-5">
            <h1>Welcome To Our SecureBuy Website</h1>
            <i>
            ~ The premier online shopping destination for secure and reliable transactions. 
            </i>
            </div>

            {/* about our website */}
            <div className="container bg-light p-5 my-5">
            <p className="lead">
            At SecureBuy, we are committed to providing our customers with the highest level of security and trust in their online shopping experience. 
            </p>
            <p className="lead">
            Our platform leverages the power of blockchain technology to provide an innovative warranty system that ensures the authenticity and protection of your purchases. With our cutting-edge blockchain-based warranty system, you can rest assured that your purchases are protected and secure.     
            </p>
            <p className="lead">
            Our platform offers a wide range of products from top brands, all available at competitive prices. Start shopping today and experience the convenience, security, and reliability of SecureBuy Ecommerce!
            </p>
            </div>

            {/* how it is defferent from other ecommerce website */}
            <div className="container bg-dark p-5 my-5">
                <h3 className="text-center my-5 text-white">What's Special In Our eCommerce Website</h3>
                <p className="bg-success p-3">
                Our SecureBuy Ecommerce website stands out from others because of our innovative use of blockchain technology to offer a more secure and transparent warranty system. We have developed a smart contract that generates non-fungible tokens (NFTs) to represent warranties in a digital format, eliminating the need for paper-based records and reducing the risk of fraud or loss. This allows our customers to have more confidence in their purchases and provides an added layer of protection against faulty products.
                </p>
                <p className="bg-success p-3">
                In addition, we have integrated our NFT-based warranty system seamlessly into our online shopping platform, making it easy for customers to view and manage their warranties alongside their purchases. Our platform also provides detailed product information, user reviews, and ratings, allowing customers to make informed decisions about their purchases.
                </p>
                <p className="bg-success p-3">
                We are committed to providing a safe and secure shopping experience for our customers, and our use of blockchain technology demonstrates our dedication to innovation and transparency in ecommerce.
                </p>
            </div>

            {/* connect wallet button option */}
            <ConnectWallet/>
            {/* sliding review cards of customer, company, seller */}

        </div>
    )
}

export default Home;