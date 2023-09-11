"use client";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";

const ThemeButton = () => {
  const { theme, changeThemeTo } = useContext(ThemeContext) as ThemeContext;

  const handleClick = () => {
    if (theme === "dark") {
      changeThemeTo("light");
    } else {
      changeThemeTo("dark");
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-off-white w-20 h-10 flex flex-row items-center rounded-3xl p-2`}
    >
      <div
        className={`w-8 h-8 bg-button rounded-full grid place-items-center duration-300 ${
          theme === "light" ? " translate-x-0" : " translate-x-full"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g>
            <path
              d="M10.3125 3.4375V1.375C10.3125 1.19266 10.3849 1.0178 10.5139 0.888864C10.6428 0.759933 10.8177 0.6875 11 0.6875C11.1823 0.6875 11.3572 0.759933 11.4861 0.888864C11.6151 1.0178 11.6875 1.19266 11.6875 1.375V3.4375C11.6875 3.61984 11.6151 3.7947 11.4861 3.92364C11.3572 4.05257 11.1823 4.125 11 4.125C10.8177 4.125 10.6428 4.05257 10.5139 3.92364C10.3849 3.7947 10.3125 3.61984 10.3125 3.4375ZM16.5 11C16.5 12.0878 16.1774 13.1512 15.5731 14.0556C14.9687 14.9601 14.1098 15.6651 13.1048 16.0813C12.0998 16.4976 10.9939 16.6065 9.927 16.3943C8.86011 16.1821 7.8801 15.6583 7.11091 14.8891C6.34172 14.1199 5.8179 13.1399 5.60568 12.073C5.39346 11.0061 5.50238 9.90024 5.91866 8.89524C6.33494 7.89025 7.03989 7.03126 7.94436 6.42692C8.84883 5.82257 9.9122 5.5 11 5.5C12.4582 5.50159 13.8562 6.08157 14.8873 7.11267C15.9184 8.14378 16.4984 9.5418 16.5 11ZM15.125 11C15.125 10.1842 14.8831 9.38663 14.4298 8.70827C13.9766 8.02992 13.3323 7.50121 12.5786 7.189C11.8248 6.87679 10.9954 6.7951 10.1953 6.95426C9.39508 7.11343 8.66008 7.50629 8.08318 8.08318C7.50629 8.66008 7.11343 9.39508 6.95426 10.1953C6.7951 10.9954 6.87679 11.8248 7.189 12.5786C7.50121 13.3323 8.02992 13.9766 8.70827 14.4298C9.38663 14.8831 10.1842 15.125 11 15.125C12.0937 15.1239 13.1422 14.6889 13.9156 13.9156C14.6889 13.1422 15.1239 12.0937 15.125 11ZM5.01359 5.98641C5.1426 6.11541 5.31756 6.18788 5.5 6.18788C5.68244 6.18788 5.8574 6.11541 5.98641 5.98641C6.11541 5.8574 6.18788 5.68244 6.18788 5.5C6.18788 5.31756 6.11541 5.1426 5.98641 5.01359L4.61141 3.63859C4.4824 3.50959 4.30744 3.43712 4.125 3.43712C3.94256 3.43712 3.7676 3.50959 3.63859 3.63859C3.50959 3.7676 3.43712 3.94256 3.43712 4.125C3.43712 4.30744 3.50959 4.4824 3.63859 4.61141L5.01359 5.98641ZM5.01359 16.0136L3.63859 17.3886C3.50959 17.5176 3.43712 17.6926 3.43712 17.875C3.43712 18.0574 3.50959 18.2324 3.63859 18.3614C3.7676 18.4904 3.94256 18.5629 4.125 18.5629C4.30744 18.5629 4.4824 18.4904 4.61141 18.3614L5.98641 16.9864C6.05028 16.9225 6.10095 16.8467 6.13552 16.7632C6.17009 16.6798 6.18788 16.5903 6.18788 16.5C6.18788 16.4097 6.17009 16.3202 6.13552 16.2368C6.10095 16.1533 6.05028 16.0775 5.98641 16.0136C5.92253 15.9497 5.8467 15.899 5.76324 15.8645C5.67978 15.8299 5.59033 15.8121 5.5 15.8121C5.40967 15.8121 5.32022 15.8299 5.23676 15.8645C5.1533 15.899 5.07747 15.9497 5.01359 16.0136ZM16.5 6.1875C16.5903 6.18757 16.6798 6.16985 16.7632 6.13534C16.8467 6.10084 16.9225 6.05023 16.9864 5.98641L18.3614 4.61141C18.4904 4.4824 18.5629 4.30744 18.5629 4.125C18.5629 3.94256 18.4904 3.7676 18.3614 3.63859C18.2324 3.50959 18.0574 3.43712 17.875 3.43712C17.6926 3.43712 17.5176 3.50959 17.3886 3.63859L16.0136 5.01359C15.9173 5.10974 15.8518 5.23229 15.8252 5.36573C15.7986 5.49916 15.8122 5.63748 15.8643 5.76317C15.9164 5.88886 16.0046 5.99627 16.1178 6.07181C16.2309 6.14734 16.3639 6.18761 16.5 6.1875ZM16.9864 16.0136C16.8574 15.8846 16.6824 15.8121 16.5 15.8121C16.3176 15.8121 16.1426 15.8846 16.0136 16.0136C15.8846 16.1426 15.8121 16.3176 15.8121 16.5C15.8121 16.6824 15.8846 16.8574 16.0136 16.9864L17.3886 18.3614C17.4525 18.4253 17.5283 18.476 17.6118 18.5105C17.6952 18.5451 17.7847 18.5629 17.875 18.5629C17.9653 18.5629 18.0548 18.5451 18.1382 18.5105C18.2217 18.476 18.2975 18.4253 18.3614 18.3614C18.4253 18.2975 18.476 18.2217 18.5105 18.1382C18.5451 18.0548 18.5629 17.9653 18.5629 17.875C18.5629 17.7847 18.5451 17.6952 18.5105 17.6118C18.476 17.5283 18.4253 17.4525 18.3614 17.3886L16.9864 16.0136ZM4.125 11C4.125 10.8177 4.05257 10.6428 3.92364 10.5139C3.7947 10.3849 3.61984 10.3125 3.4375 10.3125H1.375C1.19266 10.3125 1.0178 10.3849 0.888864 10.5139C0.759933 10.6428 0.6875 10.8177 0.6875 11C0.6875 11.1823 0.759933 11.3572 0.888864 11.4861C1.0178 11.6151 1.19266 11.6875 1.375 11.6875H3.4375C3.61984 11.6875 3.7947 11.6151 3.92364 11.4861C4.05257 11.3572 4.125 11.1823 4.125 11ZM11 17.875C10.8177 17.875 10.6428 17.9474 10.5139 18.0764C10.3849 18.2053 10.3125 18.3802 10.3125 18.5625V20.625C10.3125 20.8073 10.3849 20.9822 10.5139 21.1111C10.6428 21.2401 10.8177 21.3125 11 21.3125C11.1823 21.3125 11.3572 21.2401 11.4861 21.1111C11.6151 20.9822 11.6875 20.8073 11.6875 20.625V18.5625C11.6875 18.3802 11.6151 18.2053 11.4861 18.0764C11.3572 17.9474 11.1823 17.875 11 17.875ZM20.625 10.3125H18.5625C18.3802 10.3125 18.2053 10.3849 18.0764 10.5139C17.9474 10.6428 17.875 10.8177 17.875 11C17.875 11.1823 17.9474 11.3572 18.0764 11.4861C18.2053 11.6151 18.3802 11.6875 18.5625 11.6875H20.625C20.8073 11.6875 20.9822 11.6151 21.1111 11.4861C21.2401 11.3572 21.3125 11.1823 21.3125 11C21.3125 10.8177 21.2401 10.6428 21.1111 10.5139C20.9822 10.3849 20.8073 10.3125 20.625 10.3125Z"
              className="fill-bill"
            />
          </g>
        </svg>
      </div>
    </button>
  );
};

export default ThemeButton;
