import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  InputGroup,
} from "reactstrap";

import Image from "next/image";

const items = [
  {
    src: "/images/hero_carrosel/1.jpg",
    key: 1,
  },
  {
    src: "/images/hero_carrosel/2.jpg",
    key: 2,
  },
  {
    src: "/images/hero_carrosel/3.jpg",
    key: 3,
  },
];

const Hero = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Image src={item.src} alt={item.altText} width={630} height={410} />
        <CarouselCaption />
      </CarouselItem>
    );
  });

  return (
    <section className="section position-relative">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col lg={5}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-definition mb-4">
                THE NEXT-GENERATION LAUNCHPAD FOR
              </p>
              <h1 className="mb-4 text-light font-size-large">
                Blockchain Games and the Metaverse
              </h1>
              <div className="d-flex gap-3 intro-btn mb-4">
                <a
                  href="#"
                  className="btn btn-primary btn-lg "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launchpad
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary  btn-lg  "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KYC for IDO
                </a>
              </div>

              <InputGroup className="mb-4 bg-input p-2 ">
                <Input className="bg-input-transparent" />
                <Image src="/images/icons/search.svg" width={27} height={27} />
              </InputGroup>

              <div className="d-flex mb-4 gap-3">
                <Image
                  src="/images/icons/facebook.svg"
                  width={27}
                  height={27}
                />
                <Image src="/images/icons/twitter.svg" width={27} height={27} />
                <Image
                  src="/images/icons/telegram.svg"
                  width={27}
                  height={27}
                />
                <Image src="/images/icons/discord.svg" width={27} height={27} />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-flex align-items-center">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
                slide={true}
                fade={true}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                  direction="prev"
                  directionText="Previous"
                  onClickHandler={previous}
                />
                <CarouselControl
                  direction="next"
                  directionText="Next"
                  onClickHandler={next}
                />
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
