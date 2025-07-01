type DieIconProps = { value: number };

function DieIcon({ value }: DieIconProps) {
  if (value === 1) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f0f0f0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-one</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  } else if (value === 2) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f0f0f0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-two</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  } else if (value === 3) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f0f0f0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-three</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  } else if (value === 4) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-four</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM7.613 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12zM24.335 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  } else if (value === 5) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f0f0f0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-five</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM7.613 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM15.974 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12zM24.335 10.732c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  } else if (value === 6) {
    return (
      <svg
        fill="#f0f0f0"
        width="64px"
        height="64px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#f0f0f0"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dice-six</title>
          <path d="M27.299 2.246h-22.65c-1.327 0-2.402 1.076-2.402 2.402v22.65c0 1.327 1.076 2.402 2.402 2.402h22.65c1.327 0 2.402-1.076 2.402-2.402v-22.65c0-1.327-1.076-2.402-2.402-2.402zM24.335 4.492c1.723 0 3.12 1.397 3.12 3.12s-1.397 3.12-3.12 3.12-3.12-1.397-3.12-3.12 1.397-3.12 3.12-3.12zM7.613 4.492c1.723 0 3.12 1.397 3.12 3.12s-1.397 3.12-3.12 3.12-3.12-1.397-3.12-3.12c0-1.723 1.397-3.12 3.12-3.12zM7.613 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM7.613 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12zM24.335 27.455c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12c-0 1.723-1.397 3.12-3.12 3.12zM24.335 19.093c-1.723 0-3.12-1.397-3.12-3.12s1.397-3.12 3.12-3.12 3.12 1.397 3.12 3.12-1.397 3.12-3.12 3.12z"></path>
        </g>
      </svg>
    );
  }
}

export default DieIcon;
