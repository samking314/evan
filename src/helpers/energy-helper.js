export const filterAndMapEnergyCompTypes = energyCompData => {
	if (energyCompData != null && energyCompData.length > 0) {
		return energyCompData
			.filter(ec => {
				return ec.name && ec.type;
			})
			.map((ec, ecindex) => {
				return (
					<option
						value={ec.type}
						key={"energy-comp-type-data" + ecindex}
					>
						{ec.name}
					</option>
				);
			});
	} else {
		return [];
	}
};
