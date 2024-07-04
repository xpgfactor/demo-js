import { lazy, Suspense } from 'react';
const Lottie = lazy(() => import('react-lottie-player'));
import loader1 from 'src/assets/lotties/loader-1.json';
import loader2 from 'src/assets/lotties/loader-2.json';

const animations = {
  loader1,
  loader2,
};

interface AnimationProps {
  animationData: keyof typeof animations;
  width: number | string;
  height: number | string;
  loop?: boolean;
}

export const Animation = ({
  animationData,
  width,
  height,
  loop = true,
}: AnimationProps) => (
  <Suspense fallback='Loading'>
    <Lottie
      loop={loop}
      animationData={animations[animationData]}
      play
      style={{ width, height }}
      data-cy='animation'
    />
  </Suspense>
);
