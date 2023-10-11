import RandomBtn from "./random";
import PreviousBtn from "./previous";
import PlayBtn from './play'
import NextBtn from "./next";
import RepeatBtn from "./repeat";
import TrackProgress from "./track";
import Volume from "./volumeTrack";
import { SongAudioItf } from "../../../utils/interfaces";

interface Props {
	audio : HTMLAudioElement | null,
	songDetail : SongAudioItf
}

const PlayControl:React.FC<Props> = (props) => {

	const { audio , songDetail} = props

	return (
		<div
			style={{ backdropFilter: "blur(15px)" }}
			className="fixed left-0 bg-gray-blur right-0 bottom-0 h-[125px] border border-white-10 "
		>
			<div className="max-w-[1320px] h-[100%]  pr-[20px] flex items-center my-[0] mx-[auto] gap-[35px]">
				<div className="flex items-center gap-[30px] w-[25%]">
					<div className="w-[55px] h-[55px] rounded-[14px]">
						<img
							src={songDetail.thumbnail}
							alt={songDetail.title}
						/>
					</div>
					<div className="">
						<p>{songDetail.title}</p>
						<p className="text-[12px] text-white-44">{songDetail.artistsNames}</p>
					</div>
				</div>
			<div className="flex flex-col gap-[25px]  flex-1">
					<div className="flex items-center justify-center gap-[42px]">
						<RandomBtn />
						<PreviousBtn />
						<PlayBtn audio={audio} />
						<NextBtn />
						<RepeatBtn />
				</div>
				<TrackProgress audio={audio}/>
				</div>
				<Volume audio={audio} />
			</div>
		</div>
	);
};
export default PlayControl;
