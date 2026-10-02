// Private proposal: hidden from search engines, like /vip
export const metadata = {
  title: 'Private VIP Access | DASTAN X-TECH',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function VipLayoutEn({ children }) {
  return children;
}
