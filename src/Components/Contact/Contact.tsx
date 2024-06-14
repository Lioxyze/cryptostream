import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center bg-[#f8fafb]">
      <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
        <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] justify-between group/design-root overflow-x-hidden">
          <div>
            <div className="flex items-center bg-[#f8fafb] p-4 pb-2 justify-between">
              <div
                className="text-[#0e161b] flex size-12 shrink-0 items-center"
                data-icon="ArrowLeft"
                data-size="24px"
                data-weight="regular"
              ></div>
            </div>
            <h1 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">
              Contact us
            </h1>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Your name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Your email address"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  placeholder="Subject"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] h-14 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                  value=""
                />
              </label>
            </div>
            <div className="flex max-w-[480px] flex-1 flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  placeholder="Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] min-h-36 placeholder:text-[#507a95] p-[15px] text-base font-normal leading-normal"
                ></textarea>
              </label>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#e8eef3] text-[#0e161b] text-base font-bold leading-normal tracking-[0.015em] grow">
                  <span className="truncate">Cancel</span>
                </button>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#3aa0e4] text-[#0e161b] text-base font-bold leading-normal tracking-[0.015em] grow">
                  <span className="truncate">Submit</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="h-5 bg-[#f8fafb]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
