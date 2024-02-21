import React from "react";

type IconProps = {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  viewBox?: string;
};

export const CopyIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill={fill ?? "none"}
    >
      <path
        d="M6.66671 5.83333V12.5C6.66671 13.4205 7.4129 14.1667 8.33337 14.1667H13.3334M6.66671 5.83333V4.16667C6.66671 3.24619 7.4129 2.5 8.33337 2.5H12.1549C12.3759 2.5 12.5878 2.5878 12.7441 2.74408L16.4226 6.42259C16.5789 6.57887 16.6667 6.79083 16.6667 7.01184V12.5C16.6667 13.4205 15.9205 14.1667 15 14.1667H13.3334M6.66671 5.83333H5.33337C4.2288 5.83333 3.33337 6.72876 3.33337 7.83333V15.8333C3.33337 16.7538 4.07957 17.5 5.00004 17.5H11.3334C12.4379 17.5 13.3334 16.6046 13.3334 15.5V14.1667"
        stroke={stroke ?? "#4B4B4B"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const DownloadIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-download"
      viewBox="0 0 16 16"
    >
      {" "}
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />{" "}
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />{" "}
    </svg>
  );
};

export const DeleteIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill={fill ?? "none"}
    >
      <path
        d="M15.8334 5.83333L15.1106 15.9521C15.0483 16.8243 14.3226 17.5 13.4482 17.5H6.55191C5.67751 17.5 4.95177 16.8243 4.88947 15.9521L4.16671 5.83333M8.33337 9.16667V14.1667M11.6667 9.16667V14.1667M12.5 5.83333V3.33333C12.5 2.8731 12.1269 2.5 11.6667 2.5H8.33337C7.87314 2.5 7.50004 2.8731 7.50004 3.33333V5.83333M3.33337 5.83333H16.6667"
        stroke={stroke ?? "#4B4B4B"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const AddIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 2.5C10.4602 2.5 10.8333 2.8731 10.8333 3.33333V9.16667H16.6667C17.1269 9.16667 17.5 9.53976 17.5 10C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H10.8333V16.6667C10.8333 17.1269 10.4602 17.5 10 17.5C9.53976 17.5 9.16667 17.1269 9.16667 16.6667V10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 10C2.5 9.53976 2.8731 9.16667 3.33333 9.16667H9.16667V3.33333C9.16667 2.8731 9.53976 2.5 10 2.5Z"
        fill={fill ?? "white"}
      />
    </svg>
  );
};

export const EditIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.4105 5.58712C14.0688 5.24601 13.5147 5.24601 13.173 5.58712L12.7105 6.04882L13.9479 7.28406L14.4105 6.82236C14.7522 6.48126 14.7522 5.92822 14.4105 5.58712ZM13.123 8.10756L11.8855 6.87231L5.33342 13.4128V14.6688H6.55013L13.123 8.10756ZM12.3481 4.76362C13.1454 3.96771 14.4381 3.96771 15.2354 4.76362C16.0327 5.55953 16.0327 6.84995 15.2354 7.64586L7.20424 15.6628C7.09484 15.772 6.94647 15.8334 6.79176 15.8334H4.75008C4.42792 15.8334 4.16675 15.5726 4.16675 15.2511V13.1716C4.16675 13.0172 4.22821 12.8691 4.3376 12.7599L12.3481 4.76362Z"
        fill={fill ?? "#4B4B4B"}
      />
    </svg>
  );
};

export const HomeIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clipPath="url(#clip0_16_40481)">
        <path
          d="M13.7899 6.88969L7.75241 0.855313L7.34772 0.450625C7.25551 0.359026 7.13082 0.307617 7.00085 0.307617C6.87087 0.307617 6.74618 0.359026 6.65397 0.450625L0.211783 6.88969C0.117301 6.9838 0.0426296 7.09589 -0.00782254 7.21934C-0.0582747 7.34278 -0.0834854 7.47509 -0.0819665 7.60844C-0.0757165 8.15844 0.382096 8.5975 0.932096 8.5975H1.59616V13.6866H12.4055V8.5975H13.0837C13.3508 8.5975 13.6024 8.49281 13.7915 8.30375C13.8846 8.21096 13.9583 8.10062 14.0085 7.97912C14.0586 7.85762 14.0842 7.72738 14.0837 7.59594C14.0837 7.33031 13.979 7.07875 13.7899 6.88969ZM7.87585 12.5616H6.12585V9.37406H7.87585V12.5616ZM11.2805 7.4725V12.5616H8.87585V8.99906C8.87585 8.65375 8.59616 8.37406 8.25085 8.37406H5.75085C5.40553 8.37406 5.12585 8.65375 5.12585 8.99906V12.5616H2.72116V7.4725H1.22116L7.00241 1.69594L7.36335 2.05688L12.7821 7.4725H11.2805Z"
          fill={fill ?? "black"}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_40481">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UploadIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5.25 3.96893H6.40469V9.25487C6.40469 9.32362 6.46094 9.37987 6.52969 9.37987H7.46719C7.53594 9.37987 7.59219 9.32362 7.59219 9.25487V3.96893H8.75C8.85469 3.96893 8.9125 3.84862 8.84844 3.76737L7.09844 1.55174C7.08674 1.5368 7.0718 1.52472 7.05475 1.51641C7.03769 1.5081 7.01897 1.50378 7 1.50378C6.98103 1.50378 6.96231 1.5081 6.94525 1.51641C6.92819 1.52472 6.91326 1.5368 6.90156 1.55174L5.15156 3.76581C5.0875 3.84862 5.14531 3.96893 5.25 3.96893ZM12.7188 8.78612H11.7812C11.7125 8.78612 11.6562 8.84237 11.6562 8.91112V11.3174H2.34375V8.91112C2.34375 8.84237 2.2875 8.78612 2.21875 8.78612H1.28125C1.2125 8.78612 1.15625 8.84237 1.15625 8.91112V12.0049C1.15625 12.2814 1.37969 12.5049 1.65625 12.5049H12.3438C12.6203 12.5049 12.8438 12.2814 12.8438 12.0049V8.91112C12.8438 8.84237 12.7875 8.78612 12.7188 8.78612Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const HeaderIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <rect width="14" height="14" fill="white" />
      <path
        d="M12.7498 0.254639H1.24976C0.973193 0.254639 0.749756 0.478076 0.749756 0.754639V12.2546C0.749756 12.5312 0.973193 12.7546 1.24976 12.7546H12.7498C13.0263 12.7546 13.2498 12.5312 13.2498 12.2546V0.754639C13.2498 0.478076 13.0263 0.254639 12.7498 0.254639ZM12.1248 11.6296H1.87476V1.37964H12.1248V11.6296ZM6.68726 4.75464H9.56226C9.63101 4.75464 9.68726 4.69839 9.68726 4.62964V3.87964C9.68726 3.81089 9.63101 3.75464 9.56226 3.75464H6.68726C6.61851 3.75464 6.56226 3.81089 6.56226 3.87964V4.62964C6.56226 4.69839 6.61851 4.75464 6.68726 4.75464ZM6.68726 7.00464H9.56226C9.63101 7.00464 9.68726 6.94839 9.68726 6.87964V6.12964C9.68726 6.06089 9.63101 6.00464 9.56226 6.00464H6.68726C6.61851 6.00464 6.56226 6.06089 6.56226 6.12964V6.87964C6.56226 6.94839 6.61851 7.00464 6.68726 7.00464ZM6.68726 9.25464H9.56226C9.63101 9.25464 9.68726 9.19839 9.68726 9.12964V8.37964C9.68726 8.31089 9.63101 8.25464 9.56226 8.25464H6.68726C6.61851 8.25464 6.56226 8.31089 6.56226 8.37964V9.12964C6.56226 9.19839 6.61851 9.25464 6.68726 9.25464ZM4.31226 4.25464C4.31226 4.4204 4.3781 4.57937 4.49531 4.69658C4.61252 4.81379 4.7715 4.87964 4.93726 4.87964C5.10302 4.87964 5.26199 4.81379 5.3792 4.69658C5.49641 4.57937 5.56226 4.4204 5.56226 4.25464C5.56226 4.08888 5.49641 3.92991 5.3792 3.8127C5.26199 3.69549 5.10302 3.62964 4.93726 3.62964C4.7715 3.62964 4.61252 3.69549 4.49531 3.8127C4.3781 3.92991 4.31226 4.08888 4.31226 4.25464ZM4.31226 6.50464C4.31226 6.6704 4.3781 6.82937 4.49531 6.94658C4.61252 7.06379 4.7715 7.12964 4.93726 7.12964C5.10302 7.12964 5.26199 7.06379 5.3792 6.94658C5.49641 6.82937 5.56226 6.6704 5.56226 6.50464C5.56226 6.33888 5.49641 6.17991 5.3792 6.0627C5.26199 5.94549 5.10302 5.87964 4.93726 5.87964C4.7715 5.87964 4.61252 5.94549 4.49531 6.0627C4.3781 6.17991 4.31226 6.33888 4.31226 6.50464ZM4.31226 8.75464C4.31226 8.9204 4.3781 9.07937 4.49531 9.19658C4.61252 9.31379 4.7715 9.37964 4.93726 9.37964C5.10302 9.37964 5.26199 9.31379 5.3792 9.19658C5.49641 9.07937 5.56226 8.9204 5.56226 8.75464C5.56226 8.58888 5.49641 8.42991 5.3792 8.3127C5.26199 8.19549 5.10302 8.12964 4.93726 8.12964C4.7715 8.12964 4.61252 8.19549 4.49531 8.3127C4.3781 8.42991 4.31226 8.58888 4.31226 8.75464Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};

export const ServersIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "15"}
      viewBox="0 0 14 15"
      fill="none"
    >
      <rect width="14" height="14" transform="translate(0 1)" fill="white" />
      <path
        d="M9.92183 5.01782H9.18902C9.02964 5.01782 8.87808 5.09438 8.78433 5.22563L6.32808 8.63189L5.21558 7.08813C5.12183 6.95845 4.97183 6.88032 4.81089 6.88032H4.07808C3.97652 6.88032 3.91714 6.99595 3.97652 7.07876L5.92339 9.77876C5.96938 9.84295 6.03001 9.89526 6.10026 9.93134C6.1705 9.96743 6.24833 9.98625 6.3273 9.98625C6.40627 9.98625 6.4841 9.96743 6.55434 9.93134C6.62458 9.89526 6.68521 9.84295 6.7312 9.77876L10.0218 5.21626C10.0828 5.13345 10.0234 5.01782 9.92183 5.01782Z"
        fill={fill ?? "black"}
      />
      <path
        d="M7 0.502686C3.13437 0.502686 0 3.63706 0 7.50269C0 11.3683 3.13437 14.5027 7 14.5027C10.8656 14.5027 14 11.3683 14 7.50269C14 3.63706 10.8656 0.502686 7 0.502686ZM7 13.3152C3.79063 13.3152 1.1875 10.7121 1.1875 7.50269C1.1875 4.29331 3.79063 1.69019 7 1.69019C10.2094 1.69019 12.8125 4.29331 12.8125 7.50269C12.8125 10.7121 10.2094 13.3152 7 13.3152Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};

export const SecurityIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M12 6.25195H10.9375V2.75195C10.9375 1.64727 10.0422 0.751953 8.9375 0.751953H5.0625C3.95781 0.751953 3.0625 1.64727 3.0625 2.75195V6.25195H2C1.72344 6.25195 1.5 6.47539 1.5 6.75195V12.752C1.5 13.0285 1.72344 13.252 2 13.252H12C12.2766 13.252 12.5 13.0285 12.5 12.752V6.75195C12.5 6.47539 12.2766 6.25195 12 6.25195ZM4.1875 2.75195C4.1875 2.26914 4.57969 1.87695 5.0625 1.87695H8.9375C9.42031 1.87695 9.8125 2.26914 9.8125 2.75195V6.25195H4.1875V2.75195ZM11.375 12.127H2.625V7.37695H11.375V12.127ZM6.5625 9.95508V10.7832C6.5625 10.852 6.61875 10.9082 6.6875 10.9082H7.3125C7.38125 10.9082 7.4375 10.852 7.4375 10.7832V9.95508C7.56648 9.86248 7.66275 9.73134 7.71245 9.58054C7.76216 9.42974 7.76273 9.26706 7.71409 9.11591C7.66545 8.96477 7.57011 8.83295 7.44179 8.73945C7.31346 8.64594 7.15878 8.59556 7 8.59556C6.84122 8.59556 6.68654 8.64594 6.55821 8.73945C6.42989 8.83295 6.33455 8.96477 6.28591 9.11591C6.23727 9.26706 6.23784 9.42974 6.28755 9.58054C6.33725 9.73134 6.43352 9.86248 6.5625 9.95508Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const TagsIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <g clipPath="url(#clip0_16_40511)">
        <path
          d="M6.54999 11.3509L12.4594 5.44C12.4859 5.41343 12.4984 5.3775 12.4953 5.34156L12.0969 0.632184C12.0859 0.510309 11.9906 0.414997 11.8687 0.404059L7.15936 0.00718419C7.12342 0.00405919 7.08592 0.0165591 7.06092 0.0431216L1.15155 5.9525C1.12828 5.97599 1.11523 6.00772 1.11523 6.04078C1.11523 6.07384 1.12828 6.10557 1.15155 6.12906L6.37342 11.3509C6.42186 11.4009 6.50155 11.4009 6.54999 11.3509ZM7.52811 1.16812L11.0375 1.465L11.3344 4.97437L6.46092 9.84625L2.65467 6.04156L7.52811 1.16812ZM8.46811 4.07797C8.53776 4.14761 8.62045 4.20285 8.71145 4.24053C8.80245 4.27822 8.89998 4.29761 8.99848 4.29761C9.09697 4.2976 9.1945 4.27819 9.2855 4.24049C9.37649 4.20279 9.45917 4.14754 9.52881 4.07789C9.59846 4.00824 9.6537 3.92555 9.69138 3.83455C9.72907 3.74355 9.74846 3.64602 9.74845 3.54752C9.74845 3.44902 9.72904 3.3515 9.69134 3.2605C9.65364 3.1695 9.59839 3.08683 9.52874 3.01718C9.45908 2.94754 9.3764 2.8923 9.2854 2.85462C9.1944 2.81693 9.09686 2.79754 8.99837 2.79754C8.89987 2.79755 8.80234 2.81696 8.71135 2.85466C8.62035 2.89236 8.53767 2.94761 8.46803 3.01726C8.39839 3.08691 8.34315 3.1696 8.30546 3.2606C8.26778 3.3516 8.24839 3.44914 8.24839 3.54763C8.2484 3.64613 8.26781 3.74366 8.30551 3.83465C8.34321 3.92565 8.39846 4.00832 8.46811 4.07797ZM12.9015 7.43687L12.2828 6.81968C12.2593 6.79642 12.2276 6.78337 12.1945 6.78337C12.1615 6.78337 12.1297 6.79642 12.1062 6.81968L6.44999 12.465L2.73748 8.76187C2.71399 8.73861 2.68227 8.72556 2.6492 8.72556C2.61614 8.72556 2.58442 8.73861 2.56092 8.76187L1.94217 9.37906C1.91891 9.40255 1.90586 9.43428 1.90586 9.46734C1.90586 9.5004 1.91891 9.53213 1.94217 9.55562L5.74217 13.3494L6.36092 13.9666C6.40936 14.015 6.48905 14.015 6.53748 13.9666L12.9015 7.61343C12.95 7.565 12.95 7.48531 12.9015 7.43687Z"
          fill={fill ?? "black"}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_16_40511">
          <rect width="14" height="14" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EditIconOutlined = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M13.1252 6.50128H12.2502C12.1815 6.50128 12.1252 6.55753 12.1252 6.62628V11.6263H1.87524V1.37628H6.87524C6.94399 1.37628 7.00024 1.32003 7.00024 1.25128V0.376282C7.00024 0.307532 6.94399 0.251282 6.87524 0.251282H1.25024C0.973682 0.251282 0.750244 0.474719 0.750244 0.751282V12.2513C0.750244 12.5278 0.973682 12.7513 1.25024 12.7513H12.7502C13.0268 12.7513 13.2502 12.5278 13.2502 12.2513V6.62628C13.2502 6.55753 13.194 6.50128 13.1252 6.50128Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
      <path
        d="M4.56108 6.85909L4.53139 8.71691C4.52983 8.85597 4.64233 8.97003 4.78139 8.97003H4.78764L6.63139 8.92472C6.66264 8.92316 6.69389 8.91066 6.71577 8.88878L13.2142 2.40441C13.2626 2.35597 13.2626 2.27628 13.2142 2.22784L11.272 0.287219C11.247 0.262219 11.2158 0.251282 11.183 0.251282C11.1501 0.251282 11.1189 0.263782 11.0939 0.287219L4.59702 6.77159C4.57445 6.7952 4.56161 6.82644 4.56108 6.85909ZM5.55327 7.22784L11.183 1.61066L11.8892 2.31534L6.25639 7.93566L5.54233 7.95284L5.55327 7.22784Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const ExportsIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M12.8794 10.8325H12.0388C11.9732 10.8325 11.9185 10.8872 11.9185 10.9528V11.9184H2.07944V2.0778H11.9201V3.04342C11.9201 3.10905 11.9748 3.16373 12.0404 3.16373H12.881C12.9466 3.16373 13.0013 3.11061 13.0013 3.04342V1.4778C13.0013 1.21217 12.7873 0.998108 12.5216 0.998108H1.47944C1.21382 0.998108 0.999756 1.21217 0.999756 1.4778V12.5184C0.999756 12.784 1.21382 12.9981 1.47944 12.9981H12.5201C12.7857 12.9981 12.9998 12.784 12.9998 12.5184V10.9528C12.9998 10.8856 12.9451 10.8325 12.8794 10.8325ZM13.1701 6.89967L10.9529 5.14967C10.8701 5.08405 10.7498 5.14342 10.7498 5.24811V6.43561H5.84351C5.77476 6.43561 5.71851 6.49186 5.71851 6.56061V7.43561C5.71851 7.50436 5.77476 7.56061 5.84351 7.56061H10.7498V8.74811C10.7498 8.8528 10.8716 8.91217 10.9529 8.84655L13.1701 7.09655C13.185 7.08485 13.1971 7.06991 13.2054 7.05286C13.2137 7.0358 13.218 7.01708 13.218 6.99811C13.218 6.97914 13.2137 6.96041 13.2054 6.94336C13.1971 6.9263 13.185 6.91136 13.1701 6.89967Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const NotificationsFilledIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 21.75C13.1 21.75 14 20.85 14 19.75H10C10 20.85 10.89 21.75 12 21.75ZM18 15.75V10.75C18 7.68 16.36 5.11 13.5 4.43V3.75C13.5 2.92 12.83 2.25 12 2.25C11.17 2.25 10.5 2.92 10.5 3.75V4.43C7.63 5.11 6 7.67 6 10.75V15.75L4 17.75V18.75H20V17.75L18 15.75Z"
        fill={fill ?? "black"}
        fillOpacity="0.87"
      />
    </svg>
  );
};

export const AccountCircleIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
        fill={fill ?? "black"}
      />
    </svg>
  );
};
export const SaveIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.66667 5.83331H4.16667C3.24619 5.83331 2.5 6.57951 2.5 7.49998V15C2.5 15.9205 3.24619 16.6666 4.16667 16.6666H15.8333C16.7538 16.6666 17.5 15.9205 17.5 15V7.49998C17.5 6.57951 16.7538 5.83331 15.8333 5.83331H13.3333M12.5 9.16665L10 11.6666M10 11.6666L7.5 9.16665M10 11.6666L10 3.33331"
        stroke={stroke ?? "white"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChevronDownIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 9L12 16L5 9"
        stroke={stroke ?? "#4B4B4B"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChevronUpIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "25"}
      height={height ?? "24"}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M5.49976 15L12.4998 8L19.4998 15"
        stroke={stroke ?? "#4B4B4B"}
        stroke-width={strokeWidth ?? "2"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ChevronRightIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "7"}
      height={height ?? "12"}
      viewBox="0 0 7 12"
      fill="none"
    >
      <path
        d="M1.68141e-08 10.59L4.32659 6L1.26284e-07 1.41L1.33198 1.58837e-08L7 6L1.33198 12L1.68141e-08 10.59Z"
        fill={fill ?? "#4B4B4B"}
        stroke-width={strokeWidth ?? "2"}
      />
    </svg>
  );
};

export const MicrosoftLogo = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 23"
      width={width ?? "20px"}
      height={height ?? "20px"}
    >
      <path fill="#f3f3f3" d="M0 0h23v23H0z" />
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  );
};

export const UserIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M17.7337 15.6134C17.3127 14.616 16.7016 13.7101 15.9346 12.946C15.17 12.1797 14.2642 11.5688 13.2672 11.1469C13.2583 11.1424 13.2494 11.1402 13.2404 11.1357C14.6311 10.1313 15.5351 8.4951 15.5351 6.64912C15.5351 3.59108 13.0574 1.1134 9.99936 1.1134C6.94132 1.1134 4.46364 3.59108 4.46364 6.64912C4.46364 8.4951 5.36766 10.1313 6.75829 11.138C6.74936 11.1424 6.74043 11.1447 6.7315 11.1491C5.7315 11.571 4.83418 12.1759 4.06409 12.9482C3.29782 13.7129 2.68687 14.6187 2.26498 15.6156C1.85052 16.5917 1.627 17.6381 1.6065 18.6982C1.60591 18.7221 1.61008 18.7458 1.61879 18.7679C1.6275 18.7901 1.64056 18.8103 1.6572 18.8274C1.67384 18.8445 1.69373 18.858 1.71569 18.8673C1.73765 18.8765 1.76124 18.8813 1.78507 18.8813H3.12436C3.22257 18.8813 3.3007 18.8031 3.30293 18.7072C3.34757 16.9839 4.03954 15.3701 5.26275 14.1469C6.52838 12.8813 8.20918 12.1848 9.99936 12.1848C11.7895 12.1848 13.4703 12.8813 14.736 14.1469C15.9592 15.3701 16.6511 16.9839 16.6958 18.7072C16.698 18.8054 16.7761 18.8813 16.8744 18.8813H18.2136C18.2375 18.8813 18.2611 18.8765 18.283 18.8673C18.305 18.858 18.3249 18.8445 18.3415 18.8274C18.3582 18.8103 18.3712 18.7901 18.3799 18.7679C18.3886 18.7458 18.3928 18.7221 18.3922 18.6982C18.3699 17.6313 18.1489 16.5933 17.7337 15.6134ZM9.99936 10.4884C8.97481 10.4884 8.01052 10.0889 7.28507 9.36341C6.55963 8.63796 6.16007 7.67367 6.16007 6.64912C6.16007 5.62456 6.55963 4.66028 7.28507 3.93483C8.01052 3.20939 8.97481 2.80983 9.99936 2.80983C11.0239 2.80983 11.9882 3.20939 12.7136 3.93483C13.4391 4.66028 13.8386 5.62456 13.8386 6.64912C13.8386 7.67367 13.4391 8.63796 12.7136 9.36341C11.9882 10.0889 11.0239 10.4884 9.99936 10.4884Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const LinkIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.3835 13.4224C11.3499 13.3892 11.3046 13.3706 11.2574 13.3706C11.2101 13.3706 11.1648 13.3892 11.1312 13.4224L8.53749 16.0162C7.3366 17.2171 5.30981 17.3443 3.98392 16.0162C2.6558 14.6881 2.78303 12.6635 3.98392 11.4626L6.57767 8.86886C6.64687 8.79967 6.64687 8.68583 6.57767 8.61663L5.68928 7.72824C5.65572 7.695 5.61039 7.67636 5.56316 7.67636C5.51593 7.67636 5.47061 7.695 5.43705 7.72824L2.8433 10.322C0.954904 12.2104 0.954904 15.2662 2.8433 17.1523C4.73169 19.0385 7.78749 19.0407 9.67365 17.1523L12.2674 14.5586C12.3366 14.4894 12.3366 14.3756 12.2674 14.3064L11.3835 13.4224ZM17.1558 2.84208C15.2674 0.953683 12.2116 0.953683 10.3254 2.84208L7.72946 5.43583C7.69622 5.46939 7.67758 5.51471 7.67758 5.56194C7.67758 5.60917 7.69622 5.6545 7.72946 5.68806L8.61562 6.57422C8.68481 6.64342 8.79865 6.64342 8.86785 6.57422L11.4616 3.98047C12.6625 2.77958 14.6893 2.65234 16.0152 3.98047C17.3433 5.30859 17.2161 7.33315 16.0152 8.53404L13.4214 11.1278C13.3882 11.1614 13.3695 11.2067 13.3695 11.2539C13.3695 11.3011 13.3882 11.3465 13.4214 11.38L14.3098 12.2684C14.379 12.3376 14.4928 12.3376 14.562 12.2684L17.1558 9.67467C19.042 7.78627 19.042 4.73047 17.1558 2.84208ZM12.1893 6.88002C12.1557 6.84679 12.1104 6.82815 12.0632 6.82815C12.0159 6.82815 11.9706 6.84679 11.937 6.88002L6.88124 11.9336C6.84801 11.9672 6.82937 12.0125 6.82937 12.0597C6.82937 12.1069 6.84801 12.1523 6.88124 12.1858L7.76517 13.0698C7.83437 13.139 7.94821 13.139 8.0174 13.0698L13.071 8.01618C13.1402 7.94699 13.1402 7.83315 13.071 7.76395L12.1893 6.88002Z"
        fill={fill ?? "black"}
        fillOpacity="0.85"
      />
    </svg>
  );
};

export const MailIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "21"}
      height={height ?? "20"}
      viewBox="0 0 21 20"
      fill="none"
    >
      <g clipPath="url(#clip0_291_13593)">
        <path
          d="M19.7857 2.13879H1.21429C0.819196 2.13879 0.5 2.45799 0.5 2.85308V17.1388C0.5 17.5339 0.819196 17.8531 1.21429 17.8531H19.7857C20.1808 17.8531 20.5 17.5339 20.5 17.1388V2.85308C20.5 2.45799 20.1808 2.13879 19.7857 2.13879ZM18.8929 4.61201V16.2459H2.10714V4.61201L1.49107 4.1321L2.3683 3.00487L3.32366 3.74817H17.6786L18.6339 3.00487L19.5112 4.1321L18.8929 4.61201ZM17.6786 3.74594L10.5 9.32629L3.32143 3.74594L2.36607 3.00263L1.48884 4.12987L2.10491 4.60978L9.72991 10.5383C9.94919 10.7087 10.219 10.8012 10.4967 10.8012C10.7743 10.8012 11.0441 10.7087 11.2634 10.5383L18.8929 4.61201L19.5089 4.1321L18.6317 3.00487L17.6786 3.74594Z"
          fill={fill ?? "black"}
          fillOpacity="0.85"
        />
      </g>
      <defs>
        <clipPath id="clip0_291_13593">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PawIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? "20"}
      height={height ?? "20"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.52344 1.46484C5.77344 1.67188 5.11719 2.29688 4.74219 3.16016C4.32422 4.12891 4.26563 5.41016 4.59376 6.44531C5.00782 7.76562 5.92579 8.59375 6.97266 8.60156C7.35547 8.60156 7.60157 8.54688 7.91407 8.39453C9.19141 7.76562 9.89844 5.89844 9.55079 4.07422C9.31251 2.82422 8.58204 1.83984 7.63672 1.50781C7.36719 1.41016 6.79688 1.39062 6.52344 1.46484Z"
        fill={fill ?? "white"}
      />
      <path
        d="M12.6367 1.43359C11.7188 1.63672 10.9766 2.39062 10.6016 3.49219C10.043 5.125 10.4961 7.18359 11.6133 8.08594C12.0625 8.44922 12.4805 8.60156 13.0273 8.60156C14.0742 8.59375 14.9922 7.76562 15.4063 6.44531C15.7344 5.41016 15.6758 4.12891 15.2578 3.16016C14.8789 2.28516 14.2109 1.65625 13.457 1.46484C13.2422 1.41016 12.8125 1.39453 12.6367 1.43359Z"
        fill={fill ?? "white"}
      />
      <path
        d="M1.44532 6.79296C1.09766 6.90624 0.894534 7.02733 0.664065 7.26171C0.414065 7.51561 0.24219 7.82812 0.109377 8.24218C0.0351587 8.48827 0.0195337 8.61718 0.02344 9.04296C0.0273462 9.63671 0.113284 10.0273 0.347659 10.5273C0.539065 10.9219 0.671877 11.1172 0.957034 11.4101C2.33985 12.8203 4.28906 12.0898 4.44922 10.0976C4.51563 9.27343 4.29688 8.48046 3.80469 7.78905C3.22656 6.96874 2.21485 6.54296 1.44532 6.79296Z"
        fill={fill ?? "white"}
      />
      <path
        d="M17.6836 6.7578C17.1992 6.83983 16.5469 7.28905 16.1953 7.78905C15.3125 9.03124 15.3047 10.6758 16.1758 11.5859C16.5703 11.9922 17.0313 12.1758 17.5781 12.1367C18.2461 12.0898 18.9414 11.6562 19.3867 11.0078C19.5703 10.7422 19.7891 10.2422 19.8867 9.8828C20.0156 9.39842 20.0156 8.65233 19.8906 8.24217C19.7578 7.82811 19.5859 7.51561 19.3359 7.26171C18.9024 6.8203 18.3399 6.64842 17.6836 6.7578Z"
        fill={fill ?? "white"}
      />
      <path
        d="M9.29687 8.89056C8.67187 9.00385 8.28905 9.12103 7.79296 9.3476C5.94921 10.1874 4.33202 12.0859 3.64062 14.2187C3.46093 14.7773 3.3828 15.1367 3.32421 15.6718C3.20312 16.7578 3.37108 17.4453 3.8828 17.9492C4.3164 18.3749 4.78515 18.5468 5.62499 18.582C6.21093 18.6054 6.64452 18.5546 8.22265 18.2851C10.0039 17.9804 9.93359 17.9804 11.9141 18.3203C13.2305 18.5468 13.8555 18.6132 14.4141 18.582C15.8359 18.5038 16.6211 17.7929 16.707 16.5038C16.7461 15.8554 16.625 15.0351 16.3594 14.2187C15.668 12.0859 14.0469 10.1835 12.207 9.3476C11.4219 8.98822 11.0234 8.90228 10.1172 8.88666C9.71874 8.87885 9.35155 8.88275 9.29687 8.89056Z"
        fill={fill ?? "white"}
      />
    </svg>
  );
};

export const APIDocGenIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  viewBox,
}: IconProps) => {
  return (
    <svg
      width={width ?? "71"}
      height={height ?? "71"}
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.251 33.0219V50.2517V15.7921V33.0219ZM39.6585 58.8666C40.435 58.8666 41.086 58.5914 41.6113 58.041C42.1366 57.4906 42.3993 56.8086 42.3993 55.995C42.3993 55.1813 42.1366 54.4993 41.6113 53.9489C41.086 53.3985 40.435 53.1233 39.6585 53.1233C38.882 53.1233 38.231 53.3985 37.7057 53.9489C37.1804 54.4993 36.9178 55.1813 36.9178 55.995C36.9178 56.8086 37.1804 57.4906 37.7057 58.041C38.231 58.5914 38.882 58.8666 39.6585 58.8666ZM56.103 30.1503C56.8795 30.1503 57.5305 29.8751 58.0558 29.3247C58.5811 28.7743 58.8437 28.0923 58.8437 27.2786C58.8437 26.465 58.5811 25.783 58.0558 25.2326C57.5305 24.6822 56.8795 24.407 56.103 24.407C55.3264 24.407 54.6755 24.6822 54.1502 25.2326C53.6249 25.783 53.3622 26.465 53.3622 27.2786C53.3622 28.0923 53.6249 28.7743 54.1502 29.3247C54.6755 29.8751 55.3264 30.1503 56.103 30.1503ZM17.7325 30.1503H31.4363V24.407H17.7325V30.1503ZM17.7325 41.6368H31.4363V35.8935H17.7325V41.6368ZM12.251 55.995C10.7436 55.995 9.45318 55.4326 8.37972 54.3079C7.30626 53.1831 6.76953 51.8311 6.76953 50.2517V15.7921C6.76953 14.2127 7.30626 12.8606 8.37972 11.7359C9.45318 10.6112 10.7436 10.0488 12.251 10.0488H56.103C57.6104 10.0488 58.9008 10.6112 59.9743 11.7359C61.0478 12.8606 61.5845 14.2127 61.5845 15.7921H12.251V50.2517H25.9548V55.995H12.251ZM39.6585 64.6099C37.3745 64.6099 35.4332 63.7723 33.8344 62.0972C32.2356 60.4221 31.4363 58.388 31.4363 55.995C31.4363 54.1284 31.9502 52.4533 32.9779 50.9696C34.0057 49.4859 35.319 48.4569 36.9178 47.8826V38.7652H53.3622V35.391C51.7635 34.8167 50.4502 33.7877 49.4224 32.304C48.3946 30.8203 47.8807 29.1452 47.8807 27.2786C47.8807 24.8856 48.6801 22.8515 50.2789 21.1764C51.8777 19.5013 53.819 18.6637 56.103 18.6637C58.3869 18.6637 60.3283 19.5013 61.9271 21.1764C63.5258 22.8515 64.3252 24.8856 64.3252 27.2786C64.3252 29.1452 63.8113 30.8203 62.7836 32.304C61.7558 33.7877 60.4425 34.8167 58.8437 35.391V44.5084H42.3993V47.8826C43.998 48.4569 45.3113 49.4859 46.3391 50.9696C47.3669 52.4533 47.8807 54.1284 47.8807 55.995C47.8807 58.388 47.0814 60.4221 45.4826 62.0972C43.8838 63.7723 41.9425 64.6099 39.6585 64.6099Z"
        fill={fill ?? "#997862"}
      />
    </svg>
  );
};

export const APIDocGenSmallIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6635 9.65252C14.9375 9.65252 18.4023 8.31381 18.4023 6.66244C18.4023 5.01107 14.9375 3.67236 10.6635 3.67236C6.38955 3.67236 2.9248 5.01107 2.9248 6.66244C2.9248 8.31381 6.38955 9.65252 10.6635 9.65252Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.4023 11.4298V6.6626"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.9248 6.6626V16.197C2.9248 17.6675 5.65576 18.8446 9.25649 19.1254"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.6635 14.3634C6.44241 14.4198 2.9248 13.0799 2.9248 11.4297"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0751 19.0016L19.8918 19.8981L18.9973 18.7119"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.8266 19.8091C20.0219 19.4329 20.1544 19.0157 20.2087 18.5699C20.4513 16.5757 19.0351 14.7618 17.0456 14.5186C16.4159 14.4416 15.8043 14.5312 15.2546 14.7528"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1333 17.3119L13.3166 16.4153L14.211 17.6014"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.3824 16.5051C13.187 16.8814 13.0544 17.2985 13.0002 17.7443C12.7576 19.7386 14.1737 21.5524 16.1633 21.7957C16.793 21.8727 17.4046 21.783 17.9542 21.5614"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const TestWizardIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      width={width ?? "71"}
      height={height ?? "71"}
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50.6694 60.3599L46.9233 56.7548L51.1377 52.7703H34.6148V47.7105H51.1377L46.9233 43.6627L50.6694 40.1209L61.3724 50.2404L50.6694 60.3599ZM58.6967 35.0612H53.3452V19.8819H47.9936V27.4716H21.236V19.8819H15.8845V55.3002H29.2633V60.3599H15.8845C14.4128 60.3599 13.153 59.8645 12.105 58.8736C11.057 57.8827 10.533 56.6916 10.533 55.3002V19.8819C10.533 18.4905 11.057 17.2994 12.105 16.3085C13.153 15.3176 14.4128 14.8222 15.8845 14.8222H27.0558C27.5463 13.3464 28.5052 12.1342 29.9322 11.1855C31.3593 10.2368 32.9202 9.76245 34.6148 9.76245C36.3987 9.76245 37.993 10.2368 39.3977 11.1855C40.8025 12.1342 41.7502 13.3464 42.2407 14.8222H53.3452C54.8168 14.8222 56.0767 15.3176 57.1247 16.3085C58.1727 17.2994 58.6967 18.4905 58.6967 19.8819V35.0612ZM34.6148 19.8819C35.373 19.8819 36.0084 19.6395 36.5213 19.1546C37.0342 18.6697 37.2906 18.0689 37.2906 17.3521C37.2906 16.6353 37.0342 16.0344 36.5213 15.5495C36.0084 15.0646 35.373 14.8222 34.6148 14.8222C33.8567 14.8222 33.2212 15.0646 32.7083 15.5495C32.1955 16.0344 31.9391 16.6353 31.9391 17.3521C31.9391 18.0689 32.1955 18.6697 32.7083 19.1546C33.2212 19.6395 33.8567 19.8819 34.6148 19.8819Z"
        fill={fill ?? "#997862"}
      />
    </svg>
  );
};

export const TestWizardSmallIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "25"}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.6123 19.8989H15.7637V17.2172C15.7637 16.2338 15.4136 15.3921 14.7133 14.6918C14.0131 13.9916 13.1713 13.6415 12.188 13.6415C11.2047 13.6415 10.3629 13.9916 9.66266 14.6918C8.96242 15.3921 8.6123 16.2338 8.6123 17.2172V19.8989ZM12.188 11.8536C13.1713 11.8536 14.0131 11.5035 14.7133 10.8033C15.4136 10.103 15.7637 9.26127 15.7637 8.27795V5.59619H8.6123V8.27795C8.6123 9.26127 8.96242 10.103 9.66266 10.8033C10.3629 11.5035 11.2047 11.8536 12.188 11.8536ZM5.03662 21.6868V19.8989H6.82446V17.2172C6.82446 16.3083 7.03677 15.4554 7.46138 14.6583C7.88599 13.8612 8.47822 13.2243 9.23805 12.7476C8.47822 12.2708 7.88599 11.6339 7.46138 10.8368C7.03677 10.0397 6.82446 9.18677 6.82446 8.27795V5.59619H5.03662V3.80835H19.3394V5.59619H17.5515V8.27795C17.5515 9.18677 17.3392 10.0397 16.9146 10.8368C16.49 11.6339 15.8978 12.2708 15.1379 12.7476C15.8978 13.2243 16.49 13.8612 16.9146 14.6583C17.3392 15.4554 17.5515 16.3083 17.5515 17.2172V19.8989H19.3394V21.6868H5.03662Z"
        fill="#747474"
      />
    </svg>
  );
};