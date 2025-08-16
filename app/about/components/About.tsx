import React from "react";

const About = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="md:px-32 px-5 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-[218px] rounded-xl"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB7fKvYGRVezm68i5LbMN96MBgAsQ_KdeMDrmgdauOz_jZx5e03lnyqTcCRgWygEHCacGSm1atwvWhAGH0VuLCdXWVodFJV5MHefFQ6yGqX0AroO_5QZPPvNISoDNtVOxYL0l9EerD8UuIfxhGGlkFMAh4bQetZHKciZcOlMa3I3gwP4GBmQ2i_-KyKBfh8ZI-rRZq_RrE_yAt5UMMzst-wjhXGDdUIuWAi4-tSrZ3GU3r0ugLwQ2mNAXEpEDxB8WZg8Q-Jj0kHFbA")',
                  }}
                >
                  <h1 className="text-white tracking-light text-[28px] leading-tight mb-3 ml-5">
                    About us
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Mission
            </h1>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Aura &amp; Co., we believe that your home should be a
              reflection of your values. We are committed to providing
              high-quality, ethically-sourced home goods that are both beautiful
              and sustainable. Our mission is to create a positive impact on the
              world, one home at a time.
            </p>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Values
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e5e0dc] bg-white p-4 flex-col">
                <div
                  className="text-[#181411]"
                  data-icon="Leaf"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M223.45,40.07a8,8,0,0,0-7.52-7.52C139.8,28.08,78.82,51,52.82,94a87.09,87.09,0,0,0-12.76,49c.57,15.92,5.21,32,13.79,47.85l-19.51,19.5a8,8,0,0,0,11.32,11.32l19.5-19.51C81,210.73,97.09,215.37,113,215.94q1.67.06,3.33.06A86.93,86.93,0,0,0,162,203.18C205,177.18,227.93,116.21,223.45,40.07ZM153.75,189.5c-22.75,13.78-49.68,14-76.71.77l88.63-88.62a8,8,0,0,0-11.32-11.32L65.73,179c-13.19-27-13-54,.77-76.71,22.09-36.47,74.6-56.44,141.31-54.06C210.2,114.89,190.22,167.41,153.75,189.5Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#181411] text-base font-bold leading-tight">
                    Sustainability
                  </h2>
                  <p className="text-[#887563] text-sm font-normal leading-normal">
                    We prioritize eco-friendly materials and practices to
                    minimize our environmental footprint.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e5e0dc] bg-white p-4 flex-col">
                <div
                  className="text-[#181411]"
                  data-icon="Heart"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#181411] text-base font-bold leading-tight">
                    Ethical Sourcing
                  </h2>
                  <p className="text-[#887563] text-sm font-normal leading-normal">
                    We partner with artisans and suppliers who share our
                    commitment to fair labor practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#e5e0dc] bg-white p-4 flex-col">
                <div
                  className="text-[#181411]"
                  data-icon="Users"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[#181411] text-base font-bold leading-tight">
                    Community
                  </h2>
                  <p className="text-[#887563] text-sm font-normal leading-normal">
                    We foster a community of conscious consumers who value
                    quality and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
