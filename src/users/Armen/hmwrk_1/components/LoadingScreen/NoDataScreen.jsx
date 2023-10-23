import './NoDataScreen.scss';

export default function NoDataScreen() {
	return (
		<div className="NoDataScreen">
			<div className="NoDataScreen-logoWrapper">
				<div className="NoDataScreen-ovalOne"></div>
				<div className="NoDataScreen-ovalTwo"></div>
				<div className="NoDataScreen-ovalThree"></div>
				<div className="NoDataScreen-circle"></div>
			</div>
			<h1 className="NoDataScreen-text">
				NO DATA
				<span>.</span>
				<span>.</span>
				<span>.</span>
			</h1>
		</div>
	);
}
