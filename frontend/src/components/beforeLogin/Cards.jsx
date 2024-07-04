import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import style from "../../style/Cards.css";
import { Navbar } from './Navbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export function Cards() {
    useEffect(() => {
        const prev = document.querySelector("#prev");
        const next = document.querySelector("#next");

        let carouselVp = document.querySelector("#carousel-vp");
        let cCarouselInner = document.querySelector("#cCarousel-inner");
        let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
        let leftValue = 0;

        const totalMovementSize =
            parseFloat(
                document.querySelector(".cCarousel-item").getBoundingClientRect().width,
                10
            ) +
            parseFloat(
                window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
                10
            );

        prev.addEventListener("click", () => {
            if (leftValue !== 0) {
                leftValue -= -totalMovementSize;
                cCarouselInner.style.left = leftValue + "px";
            }
        });

        next.addEventListener("click", () => {
            const carouselVpWidth = carouselVp.getBoundingClientRect().width;
            if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
                leftValue -= totalMovementSize;
                cCarouselInner.style.left = leftValue + "px";
            }
        });

        const mediaQuery510 = window.matchMedia("(max-width: 510px)");
        const mediaQuery770 = window.matchMedia("(max-width: 770px)");

        mediaQuery510.addEventListener("change", mediaManagement);
        mediaQuery770.addEventListener("change", mediaManagement);

        let oldViewportWidth = window.innerWidth;

        function mediaManagement() {
            const newViewportWidth = window.innerWidth;

            if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
                leftValue += totalMovementSize;
                cCarouselInner.style.left = leftValue + "px";
                oldViewportWidth = newViewportWidth;
            } else if (
                leftValue <= -totalMovementSize &&
                oldViewportWidth > newViewportWidth
            ) {
                leftValue -= totalMovementSize;
                cCarouselInner.style.left = leftValue + "px";
                oldViewportWidth = newViewportWidth;
            }
        }
    }, []);

    return (
        <div>
            <div class="nine">
                <h1>Men's Collection<span>men's choise</span></h1>
            </div>
            <section>
                <div id="cCarousel">
                    <div className="arrow" id="prev">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="arrow" id="next">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>

                    <div id="carousel-vp">
                        <div id="cCarousel-inner">

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>
                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>
                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>
                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>
                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>
                            <article class="cCarousel-item">
                                <img src="https://images.unsplash.com/photo-1564292284209-60cce69f08ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODQ0MTA1MTJ8&ixlib=rb-4.0.3&q=80&w=400" alt="Moon" />
                                <div class="infos">
                                    <h4 className="dress-card-title">Pants</h4>
                                    <p className="dress-card-para">good rating pants</p>
                                    <p className="dress-card-para">
                                        <span className="dress-card-price">Rs.839&ensp;</span>
                                        <span className="dress-card-crossed">Rs.2099</span>
                                        <span className="dress-card-off">&ensp;(60% OFF)</span>
                                    </p>
                                    <button type="button">Add to Cart</button>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
