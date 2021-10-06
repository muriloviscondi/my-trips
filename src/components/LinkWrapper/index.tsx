import Link from 'next/link';

import * as S from './styles';

type LinkWrapperProps = {
  href: string;
  children: React.ReactNode;
};

export default function LinkWrapper({ href, children }: LinkWrapperProps) {
  return (
    <div>
      <S.Wrapper>
        <Link href={href}>{children}</Link>
      </S.Wrapper>
    </div>
  );
}
