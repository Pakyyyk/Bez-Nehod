import BottomControlBar from './BottomControlBar';

export default function PracticalControls({ waitLabel = "čekat" }) {
  return (
    <div className="w-full">
      <BottomControlBar
        centerLabel={waitLabel}
        accentColor="amber"
      />
    </div>
  );
}
