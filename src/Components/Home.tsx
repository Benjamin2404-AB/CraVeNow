import FoodSlider from "./FoodSlider";
import Footer from "./Footer";
import NavBar from "./NavBar";
import '../Styles/Home.css';
import { FoodMenu } from "./FoodMenu";
import { Key, useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import FoodDesc from "./FoodDesc";

const hDispFoods = FoodMenu.slice(0, 8);

function Home() {

    const formatter = new Intl.NumberFormat('en-GH',{
        style:'currency',
        currency:'GHS',
    });
    // const formatPrice = (price: number) => formatter(price).replace('GHS' , '\u20B5 GH¢');
    const dispMRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null); // Store the animation instance

    useEffect(() => {
        const handleAnimation = () => {
            // Stop animation if screen width > 450px
            if (window.innerWidth <= 450 && dispMRef.current) {
                animationRef.current = gsap.to(dispMRef.current, {
                    x: "-100%", // Moves the cards to the left
                    duration: 30, // Duration of the animation
                    repeat: -1, // Infinite loop
                    ease: "linear", // Smooth, consistent speed
                });
            } else {
                // Kill animation on larger screens
                animationRef.current?.kill();
            }
        };

        handleAnimation(); // Run on mount
        window.addEventListener("resize", handleAnimation); // Adjust on resize

        return () => {
            animationRef.current?.kill(); // Clean up animation on unmount
            window.removeEventListener("resize", handleAnimation); // Clean up listener
        };
    }, []);

    return (
        <>
            <div className="hpage">
                <NavBar />
                <FoodSlider />

                <section className="recipe">
                    <h2 id="RecipeSection">Our Recipe</h2>
                    <p id="recisubText">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Iure doloremque assumenda nulla magni natus eos atque earum sunt deserunt id!
                        Sequi officiis in deleniti facere esse consectetur quod tempora voluptatum.
                    </p>

                    <div className="cardSection" ref={dispMRef}>
                        {hDispFoods.map((item) => (
                            <Link  key={item.index} to={`/food/${item.index}`} state={{ food: item }}>
                            <div className="MenuItem">
                                <img src={item.img} alt={item.FoodName} />
                                <h3 className="foodname">{item.FoodName}</h3>
                                <p id="Price">{formatter.format(item.Price)}</p>
                            </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}

export default Home;
