import { memo, SVGProps } from 'react';

const ImgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.7911 7.79578H11.3939V2.39859C11.3939 1.73631 10.8568 1.19922 10.1945 1.19922H8.99516C8.33288 1.19922 7.79578 1.73631 7.79578 2.39859V7.79578H2.39859C1.73631 7.79578 1.19922 8.33288 1.19922 8.99516V10.1945C1.19922 10.8568 1.73631 11.3939 2.39859 11.3939H7.79578V16.7911C7.79578 17.4534 8.33288 17.9905 8.99516 17.9905H10.1945C10.8568 17.9905 11.3939 17.4534 11.3939 16.7911V11.3939H16.7911C17.4534 11.3939 17.9905 10.8568 17.9905 10.1945V8.99516C17.9905 8.33288 17.4534 7.79578 16.7911 7.79578Z'
      fill='#76B5C7'
    />
  </svg>
);

const Memo = memo(ImgIcon2);
export { Memo as ImgIcon2 };
