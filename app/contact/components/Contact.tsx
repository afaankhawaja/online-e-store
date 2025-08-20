"use client";
import React from "react";

const Contact = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
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
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYUYlhN-L-6mGjxlOw6qNvTWqugIojEwp4FATvRNjVULmp7CuqFEi_NRDdk4zQnESueJC03IyFRwr_IOYcWtbzycgvUSxdsyeF2GdM5rLb6zqDFsKlFpLnSe5211wq3beOKmOr1Npehpmd8A3mtz-QrEFODR7O4RJSWoT9bh_Hm6YssP0yn_oDpbG7WVshBOVazRA0XKtcguZBgxAHZTfgGQhwDdiFQKPn8Oi4R3niYw7DjeLZkrV6un0yuODKbOsGswvZt09Hk-rc");`,
                  }}
                >
                  <div className="flex p-4">
                    <h1 className="text-white tracking-light text-[28px] font-bold leading-tight">
                      Contact Us
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">
                  Name
                </p>
                <input
                  name="name"
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] h-14 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
                  value={form.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">
                  Email
                </p>
                <input
                  name="email"
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] h-14 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
                  value={form.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">
                  Subject
                </p>
                <input
                  name="subject"
                  placeholder="Subject"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] h-14 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
                  value={form.subject}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#181411] text-base font-medium leading-normal pb-2">
                  Message
                </p>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#181411] focus:outline-0 focus:ring-0 border border-[#e5e0dc] bg-white focus:border-[#e5e0dc] min-h-36 placeholder:text-[#887563] p-[15px] text-base font-normal leading-normal"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </label>
            </div>
            <div className="flex px-4 py-3 justify-start">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#eb9947] text-[#181411] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Submit</span>
              </button>
            </div>
            <h2 className="text-[#181411] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Contact Information
            </h2>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Email: support@auraandco.com
            </p>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Phone: (555) 123-4567
            </p>
            <p className="text-[#181411] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Address: 123 Green Street, Anytown, CA 91234
            </p>
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWlMpGwz7-qPdzPo0soDkRiAtivTgt3Oj_LKqEDWu_EKNPtxLqpQCEp6iGx96VyhqxwOEu91wyW_1SLN0OPWVdywimlevENC0wKF0XGTzl9ORQ2wW6n-kyaVj7SgbLDYzz9TVSRBYzpJvyUc43a7nqeu1nX9zrsDoAgI_6Jzo_muCJRFgjON6e8l0WyMeHgLqfYTfikEW78JgDowsKvfniNWUesOlYmno6Pkp8hMmguh1kL43b3jEiO23Rp3DqqhRD9QpWhendCDHr")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
