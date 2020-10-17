import React from "react";
import Slider from "react-slick";

class Management extends React.Component {
    render() {
        var settings = {
            dots: true,
            lazyLoad: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            cssEase: "linear",
            pauseOnHover: true,
            swipeToSlide: true,
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            },
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="text-center">
                        <img className="rounded-circle" src="/img/funke.png" alt="..." />
                        <h2>Funke Osae-Brown</h2>
                        <p>The publisher of The Luxury Reporter magazine, Fmr deputy editor of BusinessDay on Sunday/ fmr Editor of BusinessLife with BusinessDay Newspaper. She was also a 2013 finalist at the Diageo Business Reporting Awards in the Best Business News category. </p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <img className="rounded-circle" src="/img/onyeka.png" alt="..." />
                        <h2>Onyeka Akumah</h2>
                        <p>A Technology Entrepreneur. He is popularly known as the founder and CEO of Farmcrowdy Limited. He has Co-founded Crowdyvest, Plentywaka, and RentSmallSmall. 
    Credited to have been involved in the success of various tech and e-commerce companies in Africa. </p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <img className="rounded-circle" src="/img/raphael.png" alt="..." />
                        <h2>Raphael Idu</h2>
                        <p>CEO/Chief Creative Officer at Poke Ltd. With over 10 years of creative leadership experience from Insight Communications and as Creative Director of Leo Burnett Lagos. His wealth of experience has placed him at the forefront of marketing leadership and key decision making for several successful household brands in Nigeria. </p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <img className="rounded-circle" src="/img/jean.png" alt="..." />
                        <h2>Jean Philippe Bolot</h2>
                        <p>The Production Director & Partner at Alpine Ice Cream Nig .Ltd.
                        Alpine ice Cream Nig . is a Nigerian based company were the majority of the product is produced and manufactured in Nigeria.  </p>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <img className="rounded-circle" src="/img/sachin.png" alt="..." />
                        <h2>Sachin Gupta</h2>
                        <p>The Business Unit Head at Great Brands Nigeria Ltd. A World-Class, People Orientated, Performance Driven, Sales and Distribution Company. They are the leading consumer goods distribution company in Nigeria with over 35 years' of experience of Nigeria and the region.</p>                
                    </div>
                </div>
                <style jsx>{`
                    .rounded-circle {
                        padding: 1rem 5%;
                        margin: auto;
                    }
                `}</style>
                
            </Slider>
        );
    }
}

export default Management;
