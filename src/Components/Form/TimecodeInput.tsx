import { TimecodeInputProps } from "../../Interfaces/ShowReelInterfaces";

const TimecodeInput: React.FC<TimecodeInputProps> = ({ label, timecode, onChange }) => {
    return (
      <div>
        <label>{label} (HH:MM:SS:FF): </label>
        <input
          type="number"
          value={timecode.hours}
          onChange={(e) => onChange({ ...timecode, hours: parseInt(e.target.value) })}
          placeholder="HH"
        />
        <input
          type="number"
          value={timecode.minutes}
          onChange={(e) => onChange({ ...timecode, minutes: parseInt(e.target.value) })}
          placeholder="MM"
        />
        <input
          type="number"
          value={timecode.seconds}
          onChange={(e) => onChange({ ...timecode, seconds: parseInt(e.target.value) })}
          placeholder="SS"
        />
        <input
          type="number"
          value={timecode.frames}
          onChange={(e) => onChange({ ...timecode, frames: parseInt(e.target.value) })}
          placeholder="FF"
        />
      </div>
    );
  };

  export default TimecodeInput;
  