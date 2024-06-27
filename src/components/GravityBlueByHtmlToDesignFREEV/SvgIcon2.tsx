import { memo, SVGProps } from 'react';

const SvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 35' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M31.3984 16.2695H4.60156C4.45117 16.2695 4.32812 16.3926 4.32812 16.543V18.457C4.32812 18.6074 4.45117 18.7305 4.60156 18.7305H31.3984C31.5488 18.7305 31.6719 18.6074 31.6719 18.457V16.543C31.6719 16.3926 31.5488 16.2695 31.3984 16.2695Z'
      fill='#76B5C7'
    />
  </svg>
);

const Memo = memo(SvgIcon2);
export { Memo as SvgIcon2 };
