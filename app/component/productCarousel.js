"use client";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import FormatNumberToIDR from "../helper/formatNumberToIDR";
import { Skeleton } from "antd";

const ProductCarousel = ({ data, categoryMobileView }) => {
  console.log("data:", data);
  return (
    <>
      <div className="w-full lg:w-[calc(100%-325px)]">
        {data && (
          <div className="flex justify-between lg:justify-end mb-3">
            <div>
              <div className="bg-[#15803d] text-white px-3 rounded-lg  block sm:hidden md:block lg:hidden text-[14px]">
                {categoryMobileView}
              </div>
            </div>
            <div className="pt-5 text-gray-500">
              <a href="#" className="sm:text-[1rem] text-[0.8rem]">
                Lihat Semua{" "}
              </a>
            </div>
          </div>
        )}
        {!data ? (
          <>
            <div className="grid grid-cols-4">
              <div>
                <Skeleton.Input
                  active={true}
                  size="large"
                  block={false}
                  style={{ height: "250px" }}
                />
              </div>
              <div>
                <Skeleton.Input
                  active={true}
                  size="large"
                  block={false}
                  style={{ height: "250px" }}
                />
              </div>
              <div>
                <Skeleton.Input
                  active={true}
                  size="large"
                  block={false}
                  style={{ height: "250px" }}
                />
              </div>
              <div>
                <Skeleton.Input
                  active={true}
                  size="large"
                  block={false}
                  style={{ height: "250px" }}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <Carousel
              autoPlay
              arrows={false}
              additionalTransfrom={0}
              autoPlaySpeed={2000}
              //   centerMode={true}
              // className="mt-32"
              containerClass="container-with-dots lg:ml-[-100px]"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 3,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {data.length > 0 &&
                data?.map((item) => {
                  return (
                    <div className="flex ml-2 mr-2 justify-center">
                      <div className="border-solid bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <img src={item?.image_urls[0] || ""} />
                        <div className="px-3 py-3">
                          <div
                            className="text-[0.8rem] lg:text-[1rem] w-[100px] lg:w-[200px]"
                            style={{
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                            }}
                          >
                            {item.name}
                          </div>
                          <div className="md:text-[1rem] text-[0.8rem]">
                            {FormatNumberToIDR(item?.price)}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Carousel>
          </>
        )}
      </div>
    </>
  );
};

export default ProductCarousel;
