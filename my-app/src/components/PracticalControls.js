import BottomControlBar from './BottomControlBar';

export default function PracticalControls({
  waitLabel = "čekat",
  onPrev,
  onNext,
  onWaitClick,
  prevDisabled = false,
  nextDisabled = false,
  waitStatus = "default",
}) {
  return (
    <div className="w-full">
      <BottomControlBar
        centerLabel={waitLabel}
        accentColor="amber"
        onPrev={onPrev}
        onNext={onNext}
        onCenterClick={onWaitClick}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        centerStatus={waitStatus}
      />
    </div>
  );
}