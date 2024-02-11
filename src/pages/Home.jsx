import React from "react";
import Homecard from "../components/card/Homecard";
import Category from "../components/card/Category";
import TrendingList from "../components/card/TrendingList";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="bg-skin-green">
        <div className="container text-skin-white">
          <h2 className="text-custom-h2 text-skin-textBase pt-[90px]">
            Discovering Hidden Germs In Europe Lesser Known Beautiful Cities
          </h2>
          <div className="mt-[40px]">
            <Link
              to="/auth/login"
              className="bg-skin-white border text-skin-base text-custom-h6 rounded-[4px] px-[40px] py-[12px]"
            >
              Get Started
            </Link>
          </div> 
         <div className="ml-auto flex justify-end py-14">
            <svg
              width="750"
              height="135"
              viewBox="0 0 750 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.472 131L0.352 4.02399H32.864L54.88 95.416L80.48 4.02399H116.832L142.432 95.416L164.704 4.02399H197.216L159.84 131H125.792L98.656 36.024L71.52 131H37.472ZM255.166 134.072C244.243 134.072 235.283 132.365 228.286 128.952C221.289 125.368 216.083 120.675 212.67 114.872C209.257 109.069 207.55 102.669 207.55 95.672C207.55 83.896 212.158 74.3387 221.374 67C230.59 59.6613 244.414 55.992 262.846 55.992H295.102V52.92C295.102 44.216 292.627 37.816 287.678 33.72C282.729 29.624 276.585 27.576 269.246 27.576C262.59 27.576 256.787 29.1973 251.838 32.44C246.889 35.512 243.817 40.12 242.622 46.264H210.622C211.475 37.048 214.547 29.0267 219.838 22.2C225.299 15.3733 232.297 10.168 240.83 6.58399C249.363 2.82933 258.921 0.951996 269.502 0.951996C287.593 0.951996 301.843 5.47466 312.254 14.52C322.665 23.5653 327.87 36.3653 327.87 52.92V131H299.966L296.894 110.52C293.139 117.347 287.849 122.979 281.022 127.416C274.366 131.853 265.747 134.072 255.166 134.072ZM262.59 108.472C271.977 108.472 279.23 105.4 284.35 99.256C289.641 93.112 292.969 85.5173 294.334 76.472H266.43C257.726 76.472 251.497 78.0933 247.742 81.336C243.987 84.408 242.11 88.248 242.11 92.856C242.11 97.8053 243.987 101.645 247.742 104.376C251.497 107.107 256.446 108.472 262.59 108.472ZM389.694 131L343.102 4.02399H377.406L409.662 100.024L441.918 4.02399H476.222L429.374 131H389.694ZM552.336 134.072C539.536 134.072 528.187 131.341 518.288 125.88C508.389 120.419 500.624 112.739 494.992 102.84C489.36 92.9413 486.544 81.5067 486.544 68.536C486.544 55.3947 489.275 43.704 494.736 33.464C500.368 23.224 508.048 15.288 517.776 9.65599C527.675 3.85333 539.28 0.951996 552.592 0.951996C565.051 0.951996 576.059 3.68266 585.616 9.144C595.173 14.6053 602.597 22.1147 607.888 31.672C613.349 41.0587 616.08 51.5547 616.08 63.16C616.08 65.0373 615.995 67 615.824 69.048C615.824 71.096 615.739 73.2293 615.568 75.448H519.056C519.739 85.3467 523.152 93.112 529.296 98.744C535.611 104.376 543.205 107.192 552.08 107.192C558.736 107.192 564.283 105.741 568.72 102.84C573.328 99.768 576.741 95.8427 578.96 91.064H612.24C609.851 99.0853 605.84 106.424 600.208 113.08C594.747 119.565 587.92 124.685 579.728 128.44C571.707 132.195 562.576 134.072 552.336 134.072ZM552.592 27.576C544.571 27.576 537.488 29.88 531.344 34.488C525.2 38.9253 521.275 45.752 519.568 54.968H582.8C582.288 46.6053 579.216 39.9493 573.584 35C567.952 30.0507 560.955 27.576 552.592 27.576ZM696.12 134.072C684.856 134.072 674.957 132.28 666.424 128.696C657.891 124.941 651.064 119.821 645.944 113.336C640.824 106.851 637.752 99.3413 636.728 90.808H669.752C670.776 95.7573 673.507 100.024 677.944 103.608C682.552 107.021 688.44 108.728 695.608 108.728C702.776 108.728 707.981 107.277 711.224 104.376C714.637 101.475 716.344 98.1467 716.344 94.392C716.344 88.9307 713.955 85.2613 709.176 83.384C704.397 81.336 697.741 79.3733 689.208 77.496C683.747 76.3013 678.2 74.8507 672.568 73.144C666.936 71.4373 661.731 69.304 656.952 66.744C652.344 64.0133 648.589 60.6 645.688 56.504C642.787 52.2373 641.336 47.032 641.336 40.888C641.336 29.624 645.773 20.152 654.648 12.472C663.693 4.79199 676.323 0.951996 692.536 0.951996C707.555 0.951996 719.501 4.45066 728.376 11.448C737.421 18.4453 742.797 28.088 744.504 40.376H713.528C711.651 30.9893 704.568 26.296 692.28 26.296C686.136 26.296 681.357 27.4907 677.944 29.88C674.701 32.2693 673.08 35.256 673.08 38.84C673.08 42.5947 675.555 45.5813 680.504 47.8C685.453 50.0187 692.024 52.0667 700.216 53.944C709.091 55.992 717.197 58.296 724.536 60.856C732.045 63.2453 738.019 66.9147 742.456 71.864C746.893 76.6427 749.112 83.5547 749.112 92.6C749.283 100.451 747.235 107.533 742.968 113.848C738.701 120.163 732.557 125.112 724.536 128.696C716.515 132.28 707.043 134.072 696.12 134.072Z"
                fill="black"
              />
            </svg>
          </div> 
        </div>
      </div>
        <div className="container">
        <div>
          <Homecard />
        </div>
        <div className="grid grid-cols-[70%,30%] gap-[14px] mt-[120px]">
          <TrendingList />
          <Category />
        </div>
        </div>
    </>
  );
};

export default Homepage;
