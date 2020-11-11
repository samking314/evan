export const filterAndMapEnergyTypes = energyCompData => {
	if (energyCompData != null && energyCompData.length > 0) {
		return energyCompData
			.filter(ec => {
				return ec.name && ec.value;
			})
			.map((ec, ecindex) => {
				return (
					<option value={ec.value} key={"energy-comp-data" + ecindex}>
						{ec.name}
					</option>
				);
			});
	} else {
		return [];
	}
};
